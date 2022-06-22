import React from 'react'
import { FacebookIcon } from 'next-share'
import { FacebookShareButton } from 'react-share'

const Share = ({ path }) => {
	return (
		<>
			<FacebookShareButton
				url={`https://bradou.vercel.app${path}`}
				hashtag='#南港'
			>
				<FacebookIcon size={32} round />
			</FacebookShareButton>
		</>
	)
}

export default Share
