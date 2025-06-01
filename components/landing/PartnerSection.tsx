// components/landing/PartnerSection.tsx

export default function PartnerSection() {
  return (
    <section className="w-full flex flex-col text-start border-t border-default-200 py-10 gap-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Trusted by <span className="text-primary">Our Partners</span>
      </h2>
      <p className="text-lg text-default-600">
        We&apos;re proud to be featured on curated AI platforms, directories, and communities that help users discover innovative tools like ours.
      </p>

      <div className="w-full flex flex-row flex-wrap gap-4 md:gap-6 mt-2">

        {/* Partner 2: 预留示例 */}
        <a href="https://www.producthunt.com/products/ai-feng-shui-generator/reviews?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-ai&#0045;feng&#0045;shui&#0045;generator" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1066503&theme=dark" alt="AI&#0032;Feng&#0032;Shui&#0032;Generator - Aifengshui&#0046;app | Product Hunt" style={{ width: "250px", height: "54px" }} width="250" height="54" /></a>

        {/* Partner 1: Dang.ai */}
        <a href="https://dang.ai/" target="_blank" ><img src="https://cdn.prod.website-files.com/63d8afd87da01fb58ea3fbcb/6487e2868c6c8f93b4828827_dang-badge.png" alt="Dang.ai" style={{ width: "150px", height: "54px" }} width="150" height="54"/></a>

        {/* Partner 3: 可添加更多 */}
        <a title="All The Best AI Tools" href="https://allinai.tools" className="flex flex-row items-center gap-2" target="_blank"><img src="https://allinai.tools/logo.svg" alt="All in AI Tools" style={{ width: "54px", height: "54px" }} width="150" height="54"/>All in AI Tools</a>

        <a href="https://yo.directory/" target="_blank" ><img src="https://cdn.prod.website-files.com/65c1546fa73ea974db789e3d/65e1e171f89ebfa7bd0129ac_yodirectory-featured.png" alt="yo.directory" style={{ width: "150px", height: "54px" }} width="150" height="54"/></a>

        <a href="https://www.ontoplist.com/pro-services/" target="_blank"><img src="https://www.ontoplist.com/images/ontoplist31.png?id=68302e370b880" alt="Professional Services Firms - OnToplist.com" style={{ width: "150px", height: "54px" }} width="150" height="54" /></a>

        <a href="https://toolpilot.ai" target="_blank" rel="noopener">
          <img src="https://www.toolpilot.ai/cdn/shop/files/tp-b-h_bec97d1a-5538-498b-8a26-77de74f90ed5_1692x468_crop_center.svg?v=1695882612" alt="Listed on Toolpilot" style={{ width: "150px", height: "54px" }} width="150" height="54" />
        </a>

      </div>
    </section>
  );
}