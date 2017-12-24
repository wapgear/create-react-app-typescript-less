import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/index');
  require('../node_modules/antd/dist/antd.less')
  require('../src/styles/index.less')
}

configure(loadStories, module);
