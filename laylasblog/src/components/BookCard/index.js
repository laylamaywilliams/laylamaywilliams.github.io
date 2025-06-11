// src/components/BookCard/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import StarRating from '@site/src/components/StarRating'; // Adjust path if necessary
import styles from './styles.module.css'; // We'll create this CSS Module

export default function BookCard({ book }) {
  const {
    permalink,
    frontMatter: { title, authors, rating, cover_image, short_description },
  } = book;

  // Default image if cover_image is not provided
  const defaultCover = '/img/book-covers/default.jpg'; // Create a default image at this path

  return (
    <div className={styles.bookCard}>
      <Link to={permalink} className={styles.bookCoverLink}>
        <img
          src={cover_image || defaultCover}
          alt={`Cover for ${title}`}
          className={styles.bookCover}
          loading="lazy" // Good for performance
        />
      </Link>
      <div className={styles.bookInfo}>
        <Link to={permalink} className={styles.bookTitleLink}>
          <h3 className={styles.bookTitle}>{title}</h3>
        </Link>
        {authors && authors.length > 0 && (
          <p className={styles.bookAuthor}>
            By {authors.join(', ')}
          </p>
        )}
        {rating !== undefined && rating !== null && (
          <div className={styles.bookRating}>
            <StarRating rating={rating} />
          </div>
        )}
        {short_description && (
          <p className={styles.bookDescription}>{short_description}</p>
        )}
      </div>
    </div>
  );
}