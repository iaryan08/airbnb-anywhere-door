"use client";

import { useState, useRef, useEffect } from "react";
import { usePropertyImage } from "@/hooks/usePropertyImage";
import { Heart, Star } from "lucide-react";

interface ListingCardProps {
  id: string;
  name: string;
  location: string;
  price: string;
  rating: number;
  tags?: string[];
  badge?: string;
  gradient?: string;
  emoji?: string;
  index?: number;
  onClick?: () => void;
  wishlisted?: boolean;
  onWishlistToggle?: () => void;
  priceUnit?: string;
  imageUrl?: string;
  /** Short AI-generated description — rendered clamped to 2 lines, never in a tag pill */
  tagline?: string;
  type?: "stay" | "experience" | "service";
}

export default function ListingCard({
  id,
  name,
  location,
  price,
  rating,
  tags = [],
  badge,
  gradient = "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  emoji = "🏡",
  index = 0,
  onClick,
  wishlisted,
  onWishlistToggle,
  priceUnit = "/ night",
  imageUrl: propImageUrl,
  tagline,
  type = "stay",
}: ListingCardProps) {
  const [localWishlisted, setLocalWishlisted] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150px" }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Fetch real Pexels image (query: location + name keywords) - only when card is visible in viewport and no imageUrl is passed
  const imageQuery = `${location} ${name.split(" ").slice(0, 3).join(" ")}`;
  const { url: pexelsUrl, alt: imageAlt, photographer, loading: imgLoading } = usePropertyImage(imageQuery, isVisible && !propImageUrl, type);

  const resolvedImageUrl = propImageUrl || pexelsUrl;
  const showRealImage = resolvedImageUrl && !imgError;
  const isWishlisted = wishlisted !== undefined ? wishlisted : localWishlisted;

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onWishlistToggle) {
      onWishlistToggle();
    } else {
      setLocalWishlisted((prev) => !prev);
    }
  };

  return (
    <div
      ref={cardRef}
      className="listing-card"
      onClick={onClick}
      style={{ animationDelay: `${index * 0.08}s` }}
      role="article"
    >
      {/* Image Area */}
      <div
        className="listing-image-placeholder"
        style={{ background: showRealImage ? "#111" : gradient, position: "relative" }}
      >
        {/* Real Pexels / SerpApi Image */}
        {showRealImage && (
          <img
            src={resolvedImageUrl}
            alt={imageAlt || name}
            onError={() => setImgError(true)}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "opacity 0.4s ease",
            }}
          />
        )}

        {/* Shimmer loading skeleton */}
        {imgLoading && !showRealImage && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 100%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s infinite",
            }}
          />
        )}

        {/* Fallback emoji (no image / loading) */}
        {!showRealImage && (
          <span style={{ fontSize: 52, position: "relative", zIndex: 1, opacity: imgLoading ? 0.4 : 1 }}>
            {emoji}
          </span>
        )}

        {/* Bottom scrim for text legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)",
            zIndex: 2,
          }}
        />

        {/* Guest Favourite badge */}
        {badge && (
          <div className="guest-fav-badge" style={{ zIndex: 3 }}>
            {badge}
          </div>
        )}

        {/* Rating badge */}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            right: 12,
            zIndex: 3,
            display: "flex",
            alignItems: "center",
            gap: 4,
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(8px)",
            borderRadius: 999,
            padding: "4px 10px",
            fontSize: 12,
            fontWeight: 700,
            color: "#fff",
          }}
        >
          <Star size={12} fill="#ffb100" stroke="#ffb100" />
          <span>{rating.toFixed(2)}</span>
        </div>

        {/* Photographer credit (required by Pexels ToS) */}
        {showRealImage && photographer && (
          <div
            style={{
              position: "absolute",
              bottom: 10,
              left: 12,
              zIndex: 3,
              fontSize: 9,
              color: "rgba(255,255,255,0.55)",
              fontFamily: "var(--font-body)",
            }}
          >
            📷 {photographer} · Pexels
          </div>
        )}
      </div>

      {/* Info */}
      <div className="listing-info">
        <div className="listing-row-1">
          <span className="listing-name">{name}</span>
        </div>
        <div className="listing-location">{location}</div>

        {tagline && (
          <p className="listing-tagline">{tagline}</p>
        )}

        {tags.length > 0 && (
          <div className="listing-tags">
            {tags.map((tag) => (
              <span key={tag} className="listing-tag">{tag}</span>
            ))}
          </div>
        )}

        <div className="listing-price-row" style={{ marginTop: 10 }}>
          <div className="listing-price">
            {price.toLowerCase() === "free" ? (
              "Free"
            ) : (
              <>
                {price} {priceUnit && <span>{priceUnit}</span>}
              </>
            )}
          </div>
          <button
            className={`listing-wishlist${isWishlisted ? " active" : ""}`}
            onClick={handleWishlistClick}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              size={16}
              fill={isWishlisted ? "currentColor" : "none"}
              strokeWidth={2.5}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
