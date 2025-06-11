// src/pages/index.js

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useGlobalData from '@docusaurus/useGlobalData'; // Hook to get global plugin data (like blog posts)

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const blogGlobalData = useGlobalData('@docusaurus/plugin-content-blog');

  console.log('DEBUG: blogGlobalData (raw):', blogGlobalData);
  // --- MODIFIED DEBUGGING LINE ---
  console.log('DEBUG: Keys of blogGlobalData:', JSON.stringify(Object.keys(blogGlobalData || {}))); // This will force print the key!
  // --- END MODIFIED DEBUGGING LINE ---

  const blogData = blogGlobalData?.['default']; // We are still trying to access 'default' for now
  console.log('DEBUG: blogData (from default ID):', blogData);

  let latestPost = null;
  if (blogData && blogData.posts && blogData.posts.length > 0) {
    latestPost = blogData.posts.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))[0];
  }
  console.log('DEBUG: latestPost variable:', latestPost);

  const tags = blogData?.tags ? Object.values(blogData.tags) : [];
  console.log('DEBUG: tags variable:', tags);


  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        {latestPost ? (
          <div className={styles.latestBlogPost}>
            <h2>Latest Review:</h2>
            <h3>
              <Link to={latestPost.metadata.permalink}>
                {latestPost.metadata.title}
              </Link>
            </h3>
            <Link to={latestPost.metadata.permalink} className="button button--secondary button--lg">
              Read Full Review
            </Link>
          </div>
        ) : (
          <div className={styles.latestBlogPost}>
            
            <Link to="/blog" className="button button--secondary button--lg">
              Latest Reviews
            </Link>
          </div>
        )}
        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Discover your next favorite book with our latest reviews and browse by genre.">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}