import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'PiZone',
  tagline: 'Sample Tagline',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AryanK1511',
  projectName: 'PiZone',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'PiZone',
      logo: {
        alt: 'PiZone Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/AryanK1511/PiZone',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Follow me',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/aryan-khurana-239684229/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/AryanK1511',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCCrKswcxk_hCSXedUEOs7Fw',
            },
            {
              label: 'Website',
              href: 'https://www.aryank.me',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'My Blog',
              to: 'https://github.com/AryanK1511',
            },
            {
              label: 'Project GitHub',
              href: 'https://github.com/AryanK1511/PiZone',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PiZone. Built by Aryan Khurana.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
