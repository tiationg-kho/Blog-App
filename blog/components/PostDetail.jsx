import React from 'react'
import { useRouter } from 'next/router'
import moment from 'moment'
import { RichText } from '@graphcms/rich-text-react-renderer'

import CodeBlock from './CodeBlock'
import Share from './Share'

const PostDetail = ({ post, slug }) => {
	const router = useRouter()
	const query = router.asPath

	// const getContentFragment = (index, text, obj, type) => {
	// 	let modifiedText = text

	// 	if (obj) {
	// 		if (obj.code) {
	// 			modifiedText = <CodeBlock key={index} text={text}></CodeBlock>
	// 		}

	// 		else if (obj.bold) {
	// 			modifiedText = <b key={index}>{text}</b>
	// 		}

	// 		else if (obj.italic) {
	// 			modifiedText = <em key={index}>{text}</em>
	// 		}

	// 		else if (obj.underline) {
	// 			modifiedText = <u key={index}>{text}</u>
	// 		}

	// 	}

	// 	switch (type) {
	// 		case 'heading-three':
	// 			return (
	// 				<h3 key={index} className='text-xl font-semibold mb-4'>
	// 					{modifiedText.map((item, i) => (
	// 						<React.Fragment key={i}>{item}</React.Fragment>
	// 					))}
	// 				</h3>
	// 			)
	// 		case 'paragraph':
	// 			return (
	// 				<div key={index} className='mb-8'>
	// 					{modifiedText.map((item, i) => (
	// 						<React.Fragment key={i}>{item}</React.Fragment>
	// 					))}
	// 				</div>
	// 			)
	// 		case 'heading-four':
	// 			return (
	// 				<h4 key={index} className='text-md font-semibold mb-4'>
	// 					{modifiedText.map((item, i) => (
	// 						<React.Fragment key={i}>{item}</React.Fragment>
	// 					))}
	// 				</h4>
	// 			)
	// 		case 'image':
	// 			return (
	// 				<img
	// 					key={index}
	// 					alt={obj.title}
	// 					height={obj.height}
	// 					width={obj.width}
	// 					src={obj.src}
	// 				/>
	// 			)
	// 		default:
	// 			return modifiedText
	// 	}
	// }

	return (
		<>
			<div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
				<div className='relative overflow-hidden shadow-md mb-6'>
					<img
						src={post.featuredImage.url}
						alt=''
						className='object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg'
					/>
				</div>
				<div className='px-4 lg:px-0'>
					<div className='flex items-center mb-8 w-full'>
						<div className='hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8'>
							<img
								alt={post.author.name}
								height='30px'
								width='30px'
								className='align-middle rounded-full'
								src={post.author.photo.url}
							/>
							<p className='inline align-middle text-gray-700 ml-2 font-medium text-lg'>
								{post.author.name}
							</p>
						</div>
						<div className='font-medium text-gray-700'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 inline mr-2 text-[#DCC068]'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
								/>
							</svg>
							<span className='align-middle'>
								{moment(post.createdAt).format('MMM DD, YYYY')}
							</span>
						</div>
					</div>
					<h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
					{
						<div>
							<RichText
								content={post.content.raw.children}
								renderers={{
									p: ({ children }) => (
										<div className='mt-4 mb-4'>{children}</div>
									),
									code:({ children }) => (
										<CodeBlock text={children}></CodeBlock>
									),
								}}
							/>
						</div>
					}
				</div>
				<div className='flex justify-end mr-3'>
					<p className='mr-2 mt-1'>分享到</p>
					<Share path={query} />
				</div>
			</div>
		</>
	)
}

export default PostDetail
