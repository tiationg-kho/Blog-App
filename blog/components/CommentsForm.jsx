import React, { useState, useEffect } from 'react'
import { submitComment } from '../services/index'

const CommentsForm = ({ slug }) => {
	const [error, setError] = useState(false)
	const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [comment, setComment] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [storeData, setStoreData] = useState(false)

  useEffect( () => {
    setComment('')
		setName('')
		setEmail('')
    if (window.localStorage.getItem('name') !== null){
      setName(window.localStorage.getItem('name'))
    }
    if (window.localStorage.getItem('email') !== null){
      setEmail(window.localStorage.getItem('email'))
    }
	}, [slug])

	const handlePostSubmission = () => {
		setError(false)
    if (!comment || !name || !email){
      setError(true)
			return
    }

		const commentObj = {
			name,
			email,
			comment,
			slug,
		}

		if (storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
		} else {
      window.localStorage.removeItem('name')
      window.localStorage.removeItem('email')
		}

		submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000)
		})
	}

	return (
		<div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 shadow-xl'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
				留下回應
			</h3>
			<div className='grid grid-cols-1 gap-4 mb-4'>
				<textarea
          value={comment || ''}
          onChange={(e)=>setComment(e.target.value)}
					className='p-4 outline-none w-full rounded-lg h-40 focus:ring-gray-200 bg-gray-100 text-gray-700'
					name='comment'
					placeholder='內容'
				/>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
				<input
					type='text'
          value={name || ''}
					onChange={(e)=>setName(e.target.value)}
					className='py-2 px-4 outline-none w-full rounded-lg focus:ring-gray-200 bg-gray-100 text-gray-700'
					placeholder='您的名字'
					name='name'
				/>
				<input
					type='email'
          value={email || ''}
					onChange={(e)=>setEmail(e.target.value)}
					className='py-2 px-4 outline-none w-full rounded-lg focus:ring-gray-200 bg-gray-100 text-gray-700'
					placeholder='信箱（僅用於活動聯絡）'
					name='email'
				/>
			</div>
			<div className='grid grid-cols-1 gap-4 mb-4'>
				<div>
					<input
            value={storeData || false}
						onChange={(e)=>setStoreData(e.target.checked)}
						type='checkbox'
						id='storeData'
						name='storeData'
					/>
					<label className='text-gray-500 cursor-pointer ml-2' htmlFor='storeData'>
						保存我的名字和信箱在瀏覽器中，方便下次留言
					</label>
				</div>
			</div>
			{error && (
				<p className='text-xs text-red-500'>每格都要填喔</p>
			)}
			<div className='mt-8'>
				<button
					type='submit'
          value='submit'
					onClick={handlePostSubmission}
					className='transition duration-500 ease hover:bg-[#DCC068] inline-block bg-[#4C6250] text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'
				>
					送出回應
				</button>
				{showSuccessMessage && (
					<span className='text-xl float-right font-semibold mt-3 text-green-500'>
						回應送出（審核後將出現在留言區）
					</span>
				)}
			</div>
		</div>
	)
}

export default CommentsForm
