import React from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {usePluralForm} from '@docusaurus/theme-common';
import {useDateTimeFormat} from '@docusaurus/theme-common/internal';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import styles from './styles.module.css';

// Import your StarRating component
import StarRating from '@site/src/components/StarRating'; // Make sure this path is correct!

// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
  const {selectMessage} = usePluralForm();
  return (readingTimeFloat) => {
    const readingTime = Math.ceil(readingTimeFloat);
    return selectMessage(
      readingTime,
      translate(
        {
          id: 'theme.blog.post.readingTime.plurals',
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One min read|{readingTime} min read',
        },
        {readingTime},
      ),
    );
  };
}

function ReadingTime({readingTime}) {
  const readingTimePlural = useReadingTimePlural();
  return <>{readingTimePlural(readingTime)}</>;
}

function DateTime({date, formattedDate}) {
  return <time dateTime={date}>{formattedDate}</time>;
}

function Spacer() {
  return <>{' · '}</>;
}

export default function BlogPostItemHeaderInfo({className}) {
  const {metadata} = useBlogPost();
  const {date, readingTime, authors, frontMatter} = metadata;
  const { rating } = frontMatter;

  const dateTimeFormat = useDateTimeFormat({
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
  const formatDate = (blogDate) => dateTimeFormat.format(new Date(blogDate));

  return (
    <div className={clsx(styles.container, 'margin-vert--md', className)}>
      {/* Star Rating - NOW ABOVE DATE */}
      {rating !== undefined && rating !== null && (
        <div className={styles.ratingContainer}> {/* Add a div for better spacing/styling if needed */}
          <StarRating rating={rating} />
        </div>
      )}

      {/* Date */}
      <div> {/* Wrap date and reading time in a div for better layout control */}
        <DateTime date={date} formattedDate={formatDate(date)} />

        {/* Original ReadingTime logic (next to date) */}
        {typeof readingTime !== 'undefined' && (
          <>
            <Spacer />
            <ReadingTime readingTime={readingTime} />
          </>
        )}
      </div>

      {/* Optional Author Display (can be adjusted for placement too) */}
      {authors && authors.length > 0 && (
        <p className={styles.authors}>By {authors.map((a) => a.name || a).join(', ')}</p>
      )}
    </div>
  );
}