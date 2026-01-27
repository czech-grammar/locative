import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Czech Locative Case',
  tagline: 'Master the 6th case with exercises, drills & memory tools',
  favicon: 'img/favicon.ico',

  url: 'https://grammar.ilearnczech.com',
  baseUrl: '/locative/',

  organizationName: 'czech-grammar',
  projectName: 'locative',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/locative-social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Locative Case',
      logo: {
        alt: 'Locative Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Learn',
        },
        {
          to: '/exercises',
          position: 'left',
          label: 'Exercises',
        },
        {
          to: '/cheatsheets',
          position: 'left',
          label: 'Cheatsheets',
        },
        {
          href: 'https://grammar.ilearnczech.com',
          label: 'Full Grammar',
          position: 'right',
        },
        {
          href: 'https://ilearnczech.com',
          label: 'iLearnCzech',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            { label: 'Introduction', to: '/' },
            { label: 'V vs Na', to: '/v-vs-na' },
            { label: 'Exercises', to: '/exercises' },
          ],
        },
        {
          title: 'iLearnCzech Family',
          items: [
            { label: 'iLearnCzech.com', href: 'https://ilearnczech.com' },
            { label: 'Grammar Reference', href: 'https://grammar.ilearnczech.com' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'YouTube', href: 'https://youtube.com/ilearnczechcom' },
            { label: 'GitHub', href: 'https://github.com/czech-grammar/locative' },
          ],
        },
      ],
      copyright: `Part of the iLearnCzech family. Made by <a href="https://ilearnczech.com" target="_blank">Jana</a> & <a href="https://melvin.me" target="_blank">Melvin</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
