import React from 'react'
import { CopyBlock, atomOneLight } from 'react-code-blocks'

export default function CodeBlock({ text }) {
	return (
		<div className='mt-6 mb-6 font-bold text-lg'>
			<CopyBlock
				text={text}
				language='text'
				theme={atomOneLight}

			/>
		</div>
	)
}
