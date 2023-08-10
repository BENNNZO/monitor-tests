"use client"

import React from 'react';

import { motion } from 'framer-motion';

export default function page() {
    return (
        <section className='w-screen h-screen bg-black grid place-items-center relative'>
            <div className='w-1/2 bg-white h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
            <div className='w-12 bg-white h-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
            <div className='w-24 bg-white h-24 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>

            <motion.div
                initial={{ x: "0vw", y: "0vh" }}
                animate={{ 
                    x: ["calc(0vw - 0%)", "calc(100vw - 100%)", "calc(100vw - 100%)", "calc(0vw - 0%)", "calc(0vw - 0%)"],
                    y: ["calc(0vh - 0%)", "calc(0vh - 0%)", "calc(100vh - 100%)", "calc(100vh - 100%)", "calc(0vh - 0%)"],
                    transition: { duration: 20, repeat: Infinity, repeatType: "loop" }
                }}
                className='w-24 h-24 bg-white absolute top-0 left-0'
            ></motion.div>
        </section>
    )
}