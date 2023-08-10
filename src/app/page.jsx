"use client"

import { useRouter } from "next/navigation"

export default function Home() {
    const { push } = useRouter()

    return (
        <main className="w-screen h-screen flex flex-row justify-center items-center gap-5 bg-neutral-950">
            <button onClick={() => push("screen-tearing")} className="rounded-sm shadow-md px-2 py-1 bg-white border border-black">Screen Tearing Test</button>
            <button onClick={() => push("black-light")} className="rounded-sm shadow-md px-2 py-1 bg-white border border-black">Black light Test</button>
            <button onClick={() => push("color-ranges")} className="rounded-sm shadow-md px-2 py-1 bg-white border border-black">Color Ranges</button>
        </main>
    )
}
