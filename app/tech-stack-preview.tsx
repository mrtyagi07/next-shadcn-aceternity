import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export function TechStackPreview() {
    return (
        <div className="flex justify-center items-center h-[40rem] flex-col px-4">
            <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
                This boilerplate includes{" "}
                <LinkPreview
                    url="https://nextjs.org"
                    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-black to-gray-700"
                >
                    Next.js
                </LinkPreview>
                ,{" "}
                <LinkPreview
                    url="https://tailwindcss.com"
                    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-teal-500 to-cyan-500"
                >
                    Tailwind CSS
                </LinkPreview>
                ,{" "}
                <LinkPreview
                    url="https://www.framer.com/motion/"
                    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-pink-500 to-purple-500"
                >
                    Framer Motion
                </LinkPreview>
                ,{" "}
                <LinkPreview
                    url="https://www.typescriptlang.org"
                    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-blue-400"
                >
                    TypeScript
                </LinkPreview>
                ,{" "}
                <LinkPreview
                    url="https://ui.shadcn.com/"
                    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-slate-800 to-slate-500"
                >
                    shadcn/ui
                </LinkPreview>
                , and{"\n"} {/* Line break before Aceternity UI */}
                <LinkPreview
                    url="https://ui.aceternity.com"
                    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-700 to-gray-400"
                >
                    Aceternity UI
                </LinkPreview>
                .
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
                These tools help you build modern, efficient, and visually appealing web applications with ease. Explore their documentation for more details.
            </p>
        </div>
    );
}
