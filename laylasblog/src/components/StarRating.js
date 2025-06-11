import React from 'react';

export default function StarRating({ rating, maxRating = 5 }) {
  const validatedRating = Math.max(0, Math.min(maxRating, Number(rating) || 0));
  const fullStars = Math.floor(validatedRating);
  const hasHalfStar = validatedRating % 1 !== 0 && validatedRating > 0;
  const emptyStars = Math.max(0, maxRating - fullStars - (hasHalfStar ? 1 : 0));

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={`full-${i}`} className="star star--filled" aria-hidden="true">
        ★ {/* Unicode filled star */}
      </span>,
    );
  }

  if (hasHalfStar) {
    stars.push(
      <span key="half" className="star star--half-filled" aria-hidden="true">
        ★ {/* The full star character that will be visually halved by CSS */}
      </span>,
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty-${i}`} className="star star--empty" aria-hidden="true">
        ☆ {/* Unicode empty star */}
      </span>,
    );
  }

  return (
    <div className="star-rating-container" title={`Rated ${rating} out of ${maxRating}`}>
      {stars}
      <span className="sr-only">Rated {rating} out of {maxRating} stars</span>

      <style jsx>{`
        .star-rating-container {
          display: inline-flex;
          align-items: center; /* Vertically centers children in the flex container */
          gap: 2px;
          font-size: 2.2em;
          line-height: 1; /* Essential for consistent vertical rhythm */
          vertical-align: middle; /* Ensures the whole container aligns with surrounding text */
          /* You might want to specify a font that renders stars consistently, e.g.: */
          /* font-family: "Segoe UI Emoji", "Apple Color Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif; */
        }
        .star {
          cursor: default;
          display: inline-block; /* Crucial for controlling width/height and vertical-align */
          vertical-align: middle; /* Aligns the middle of the element box with its line's middle */
          line-height: 1; /* Prevents extra space above/below character */
          width: 1em; /* Ensures all stars occupy the same square space */
          height: 1em; /* Ensures all stars occupy the same square space */
          text-align: center; /* Centers the star character horizontally within its 1em box */
          box-sizing: border-box; /* Include padding/border in width/height if added later */
        }
        .star--filled {
          color: gold;
        }
        .star--empty {
          color: lightgray;
        }

        /* --- Half-star specific styling --- */
        .star--half-filled {
          position: relative;
          display: inline-block;
          vertical-align: middle;
          line-height: 1;
          width: 1em;
          height: 1em;
          overflow: hidden; /* This clips the pseudo-element outside its 1em width */
          color: lightgray; /* This is the color of the "empty" half of the base star */
          text-align: center; /* Centers the underlying star character */
          box-sizing: border-box;
        }

        .star--half-filled::before {
          content: '★'; /* The filled star character for the visible half */
          position: absolute;
          top: 0;
          left: 0;
          /* Use a very precise width calculation based on font-size if 50% isn't perfect */
          /* For example, if font-size is 1.2em (19.2px), 50% is 9.6px. */
          /* If you consistently round to 10px, it might be better, but often 50% works */
          width: 50%;
          height: 100%; /* Ensure pseudo-element has full height of parent */
          overflow: hidden; /* Clips the right half of the pseudo-element's content */
          color: gold; /* Color of the "filled" half */
          line-height: 1; /* Match parent line-height for vertical alignment */
          font-size: 1em; /* Ensure same font size as parent for character consistency */
          text-align: center; /* Center the star character within the pseudo-element's own box */
        }

        /* Screen reader only class */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>
    </div>
  );
}