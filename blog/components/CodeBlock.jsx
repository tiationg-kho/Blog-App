import React from 'react'
import { CopyBlock, atomOneLight } from 'react-code-blocks'

export default function CodeBlock({text}) {
	return (
		<div className='mt-6 mb-6'>
			<CopyBlock
				text={text}
				language='python'
				theme={atomOneLight}
			/>
		</div>
	)
}
