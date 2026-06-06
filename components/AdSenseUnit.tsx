"use client";

import Script from "next/script";

export function AdSenseUnit() {
    return (
        <div className="my-8 flex justify-center min-h-[90px] w-full bg-slate-900/50 rounded-xl overflow-hidden border border-slate-800">
            {/* AdSense Unit Placeholder for layout stability */}
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                data-ad-slot="XXXXXXXXXX"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
            <Script
                id="adsense-init"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
                }}
            />
        </div>
    );
}
