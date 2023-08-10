"use client"

import { useRouter } from "next/navigation"

export default function Home() {
    const { push } = useRouter()

    return (
        <main className="w-screen h-screen grid place-items-center">
            <button onClick={() => push("screen-tearing")} className="px-2 py-1 bg-white border border-black">Screen Tearing Test</button>
            <button onClick={() => push("black-light")} className="px-2 py-1 bg-white border border-black">Black light Test</button>
            <button onClick={() => push("color-ranges")} className="px-2 py-1 bg-white border border-black">Color Ranges</button>
        </main>
    )
}
