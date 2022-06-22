import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { PostCard, Categories, PostWidget } from '../components/index'
import { getPosts } from '../services/index'
import { FeaturedPosts } from '../sections'

const Home = ({ posts }) => {
	const [curPosts, setCurPosts] = useState([])
	useEffect(() => {
		setCurPosts(posts)
	}, [posts])

	return (
		<>
			<div className='container mx-auto px-10 mb-8'>
				<Head >
					<title>中南拌島</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<div className='mb-36'></div>
				<FeaturedPosts />
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
					<div className='lg:col-span-8 col-span-1'>
						{curPosts.map((post, index) => (
							<PostCard key={post.node.title} post={post.node} />
						))}
					</div>
					<div className='lg:col-span-4 col-span-1'>
						<div className='lg:sticky relative top-8'>
							<PostWidget />
							<Categories />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home

export async function getStaticProps() {
	const posts = (await getPosts()) || []
	return {
		props: { posts },
		revalidate: 20,
	}
}
