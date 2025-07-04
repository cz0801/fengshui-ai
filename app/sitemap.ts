// app/sitemap.ts
export const dynamic = 'force-dynamic';

export default async function sitemap() {
  const baseUrl = 'https://www.aifengshui.app';
  const lastModified = new Date().toISOString();

  // 你的网站所有静态页面路径
  const staticRoutes = [
    '/',
    '/layout',
    '/bedroom-layout',
    '/about',
    '/privacy-policy',
    '/terms-of-service',
    '/fengshui-request',
    '/fengshui-bedroom-example',
    '/room-planner',
    '/blog',
    '/blog/ai-fengshui-tools',
    '/blog/what-is-fengshui',
    '/blog/fengshui-bedroom',
    '/blog/bedroom-fengshui-guide-part1',
    '/blog/bedroom-fengshui-guide-part2',
    '/blog/fengshui-bedroom-layout-guide',
    '/blog/fengshui-essentials',
    // 👉 可以继续添加更多静态页面
  ];

  return staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }));
}