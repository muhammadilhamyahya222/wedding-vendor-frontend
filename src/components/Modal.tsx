"use client";

import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";

// komponen untuk menghilangkan scroll/overflow
export function PreventScrolling() {
    useLayoutEffect(() => {
        document.querySelector("body")!.classList.add("overflow-hidden");

        return () => {
            document.querySelector("body")!.classList.remove("overflow-hidden");
        };
    }, []);

    return null;
}

export function RouterBack() {
    const router = useRouter();

    return <div className="absolute isset-0 z-10 cursor-pointer" onClick={router.back}></div>;
}
