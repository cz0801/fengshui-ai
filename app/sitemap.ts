// app/sitemap.ts
export const dynamic = 'force-dynamic';

export default async function sitemap() {
  const baseUrl = 'https://www.aifengshui.app';
  const lastModified = new Date().toISOString();

  // 你的网站所有静态页面路径
  const staticRoutes = [
    '/',
    '/bedroom-layout',
    '/about',
    '/privacy-policy',
    '/terms-of-service',
    '/fengshui-request',
    '/blog',
    '/blog/ai-fengshui-tools',
    '/blog/what-is-fengshui',
    '/blog/fengshui-bedroom',
    // 👉 可以继续添加更多静态页面
  ];

  return staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }));
}