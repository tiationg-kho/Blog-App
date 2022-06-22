import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import img from '../public/logo.jpg'
import { getCategories } from '../services'

const Header = () => {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		getCategories().then((newCategories) => {
			setCategories(newCategories.reverse())
		})
	}, [])

	return (
		<div className='container mx-auto px-10 mb-8'>
			<div className='w-full inline-block py-8'>
				<div className='md:float-left block'>
					<Link href='/'>
						<div className='cursor-pointer font-bold text-4xl text-gray-800 tracking-wider'>
							<Image
								src={img}
								alt='中南拌島'
								height='120px'
								width='120px'
								unoptimized
								className='rounded-full'
							/>
						</div>
					</Link>
				</div>
				<div className='hidden md:float-left md:contents'>
					{categories.map((category, index) => (
						<Link key={category.slug} href={`/category/${category.slug}`}>
							<span className='md:float-right mt-2 align-middle p-1 rounded-lg bg-gray-300 bg-opacity-90 text-gray-800 ml-4 font-semibold cursor-pointer'>
								{category.name}
							</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default Header
