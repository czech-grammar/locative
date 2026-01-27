import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Theory',
      items: [
        'singular',
        'plural',
        'v-vs-na',
        'po-and-pri',
        'palatalization',
        'adjectives',
      ],
    },
    {
      type: 'category',
      label: 'Exercises',
      link: {
        type: 'doc',
        id: 'exercises/index',
      },
      items: [
        'exercises/v-or-na',
        'exercises/fill-blank',
        'exercises/transform',
        'exercises/errors',
        'exercises/interactive',
      ],
    },
    {
      type: 'category',
      label: 'Memory Tools',
      items: [
        'memory/mnemonics',
        'memory/na-words',
      ],
    },
    {
      type: 'category',
      label: 'Cheatsheets',
      link: {
        type: 'doc',
        id: 'cheatsheets/index',
      },
      items: [
        'cheatsheets/singular',
        'cheatsheets/plural',
        'cheatsheets/flowcharts',
      ],
    },
    'exam-guide',
    'quick-reference',
  ],
};

export default sidebars;
