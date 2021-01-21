import { defineConfig } from 'umi';

export default defineConfig({
  title: false,
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  ssr: {
    mode: 'stream'
  },
  antd: {},
  dva: {
    immer: true,
  },
});
