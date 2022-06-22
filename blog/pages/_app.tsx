import React, { useState } from 'react'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

import { Layout } from '../components/index'
import img from '../public/logo.jpg'

function MyApp({ Component, pageProps }: AppProps) {
	const [popup, setPopup] = useState(true)
	return (
		<>
			{popup && (
				<div
					onClick={() => setPopup(false)}
					className='w-full min-h-full fixed z-10 bg-cover cursor-pointer bg-[url(../public/bg.png)]'
				>
					<div className='ml-16 mt-16 font-extrabold text-4xl text-gray-700 animate-pulse tracking-wider grid grid-cols-1'>
						<div className='ml-2 mt-4'>
							<Image
								src={img}
								alt='中南拌島'
								height='120px'
								width='120px'
								unoptimized
								className='rounded-full'
							/>
						</div>
					</div>
				</div>
			)}
			{!popup && (
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0.1 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</motion.div>
				</AnimatePresence>
			)}
		</>
	)
}

export default MyApp
