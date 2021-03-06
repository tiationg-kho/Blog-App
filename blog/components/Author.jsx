import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => (
	<div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-white shadow-2xl'>
		<div className='absolute left-0 right-0 -top-14'>
			<Image
				unoptimized
				alt={author.name}
				height='100px'
				width='100px'
				className='align-middle rounded-full hover:animate-pulse'
				src={author.photo.url}
			/>
		</div>
		<h3 className='text-black mt-4 mb-4 text-xl font-bold'>{author.name}</h3>
		<p className='text-black text-ls'>{author.bio}</p>
	</div>
)

export default Author
