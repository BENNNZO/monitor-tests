"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function page() {
    const WIDTH = 50
    
    const [screenDim, setScreenDim] = useState({ x: 0, y: 0 })
    const [tileAmount, setTileAmount] = useState(5)
    const [ready, setReady] = useState(false)

    useEffect(() => {
        setScreenDim({ x: window.innerWidth, y: window.innerHeight })
        setTileAmount(Math.round(window.innerWidth / WIDTH))
        setReady(true)
    }, [])

    if (ready) {
        return (
            <section className='w-screen h-screen flex flex-row overflow-hidden'>
                {/* <div className='w-full h-full absolute top-0 left-0'>
                    <span className='w-1/4 left-0 h-full bg-neutral-900 shadow-md absolute z-10' />
                    <span className='w-1/4 right-0 h-full bg-neutral-900 shadow-md absolute z-10' />
                </div> */}

                {[...Array(tileAmount)].map((e, i) => (
                    <motion.div 
                        key={i}
                        className={`${i % 2 === 0 ? "bg-black" : "bg-white"} h-screen`} style={{ width: `${WIDTH}px` }}
                        initial={{ x: -WIDTH }}
                        animate={{ x: WIDTH }}
                        transition={{ ease: "linear", repeat: Infinity, duration: 0.1, repeatType: "mirror" }}
                    >

                    </motion.div>
                ))}
            </section>
        )
    } else {
        return <div className='grid place-items-center w-screen h-screen'> Loading... </div>
    }
}