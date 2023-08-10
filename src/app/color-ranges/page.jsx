import React from 'react';

export default function page() {
    return (
        <section className='w-screen h-screen flex flex-col'>
            <div className='h-full w-full bg-pure-red'></div>
            {/* <div className='h-full w-full bg-gradient-to-r from-pure-red to-white'></div> */}
            <div className='h-full w-full bg-gradient-to-r from-black to-pure-red'></div>
            <div className='h-full w-full bg-pure-green'></div>
            <div className='h-full w-full bg-gradient-to-r from-black to-pure-green'></div>
            <div className='h-full w-full bg-pure-blue'></div>
            <div className='h-full w-full bg-gradient-to-r from-black to-pure-blue'></div>
            <div className='h-full w-full bg-gradient-to-r from-white to-black'></div>
        </section>
    )
}