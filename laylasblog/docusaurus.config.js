// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// --- CRITICAL: Keep this import for Prism themes ---
import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Book Reviews', // Updated: More general title for your site
  tagline: 'BookShelf', // Updated: A tagline for your homepage
  favicon: 'img/favicon.ico',

  // If you are on Docusaurus v3+, keep this. Otherwise, it might be removed.
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://laylamaywilliams.github.io', // IMPORTANT: Set your actual site URL
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/', // Keep this as '/' for your homepage to be at the root

  // GitHub pages deployment config.
  organizationName: 'laylamaywilliams', // IMPORTANT: Your GitHub org/user name.
  projectName: 'laylamaywilliams.github.io', // IMPORTANT: Your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        
        docs: false,
        // --- BLOG PLUGIN CONFIGURATION ---
        blog: {
          // IMPORTANT: Set the blog's base path to /blog
          // This allows your src/pages/index.js to serve as the homepage (root /)
          routeBasePath: 'blog', 
          
          showReadingTime: true,
          blogSidebarTitle: 'All Reviews', // Added for clarity
          blogSidebarCount: 'ALL', // Added for clarity
          
          feedOptions: {
            type: ['rss', 'atom'],
            // Your original feedOptions had xslt: true. I'm keeping that.
            xslt: true, 
            title: 'Bookshelf Blog', // Updated
            description: 'The latest book reviews and thoughts.', // Updated
            copyright: `Copyright © ${new Date().getFullYear()} My Book Shelf.`, // Updated
            language: 'en',
          },
          // You had these extra options, which are good to keep for best practices:
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        // --- END BLOG CONFIGURATION ---

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // --- PLUGINS (OPTIONAL) ---
  // This array should be empty if you don't have other custom plugins.
  // If you had a redirect plugin for the homepage, it should be removed now
  // as src/pages/index.js will handle the homepage.
  plugins: [], // Keep this empty unless you have specific plugins

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg', // Keep this as is if it's your placeholder

      navbar: {
        title: 'BookShelf', // Updated: More general site title
        logo: {
          alt: 'Logo', // Updated: More descriptive alt text
          src: 'img/logo.svg',
        },
        items: [
          // Link to your new homepage (root /)
          { to: '/', label: 'Home', position: 'left' }, 
          // Link to your blog (now at /blog)
          { to: '/blog', label: 'Reviews', position: 'left' }, // Changed label from 'Blog' to 'Reviews'
          // If you decide to add docs later, this would be a docs link:
          // { type: 'doc', docId: 'intro', position: 'left', label: 'Categories' },
          
        ],
      },
      footer: {
        style: 'dark',
        
        copyright: `Copyright © ${new Date().getFullYear()} Layla Williams. Powered By BookShelf, a Project ReLabel Enterprise`, // Preserving your custom message
      },
      // --- CRITICAL: Use the imported Prism themes ---
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // --- END CRITICAL ---

      // Add Docusaurus v3+ color mode toggle if you want it enabled
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false, // Set to true to hide the switch
        respectPrefersColorScheme: true, // Automatically adapt to user's system preference
      },
    }),
};

// --- CRITICAL: Export the config ---
export default config;