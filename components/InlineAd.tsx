// components/InlineAd.tsx
import Script from 'next/script';

export default function InlineAd({ slotId }: { slotId: string }) {
  return (
    <>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-5943172736337554"
        data-ad-slot={slotId}
      />
      <Script id={`adsbygoogle-init-${slotId}`} strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </>
  );
}