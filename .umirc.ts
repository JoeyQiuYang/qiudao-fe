import { defineConfig } from 'umi';

export default defineConfig({
  title: false,
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  ssr: {},
  antd: {},
  dva: {
    immer: true,
  },
});
