import { defineConfig } from '@umijs/max';
import { RoutePathEnum } from './routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  define: {
    RoutePathEnum: RoutePathEnum,
  },
  layout: {
    title: '@umijs/max',
  },
  alias: {},
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: 'AntV G2Plot Canvas 复现',
      path: '/antv-g2plot-canvas-repro',
      component: './AntvG2plotCanvasRepro',
    },
  ],
  npmClient: 'pnpm',
  utoopack: {},
  // mako: {}
});
