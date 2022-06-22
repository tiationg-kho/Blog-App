import React from 'react'
import {
	FacebookShareButton,
	FacebookIcon,
} from 'next-share'

const Share = ({ path }) => {
	console.log(`${process.env.VERCEL_URL}${path}`)
	return (
		<>
			<FacebookShareButton
				url={`${process.env.VERCEL_URL}${path}`}
			>
				<FacebookIcon size={32} round />
			</FacebookShareButton>
		</>
	)
}

export default Share
