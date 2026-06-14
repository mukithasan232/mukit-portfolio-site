"use client";

import dynamic from "next/dynamic";

const MukitAI = dynamic(() => import("@/components/MukitAI").then(mod => mod.MukitAI), { ssr: false });
const MetaPixel = dynamic(() => import("@/components/MetaPixel").then(mod => mod.MetaPixel), { ssr: false });

export function LazyLoadedWidgets() {
    return (
        <>
            <MetaPixel />
            <MukitAI />
        </>
    );
}
