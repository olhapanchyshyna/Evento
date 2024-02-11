import React, { ReactNode } from 'react'

type H1Props = {
	children: ReactNode
}
export default function H1({children}: H1Props) {
	return (
		<h1 className="text-3xl lg:text-6xl font-bold tracking-tight">{children}</h1>
	)
}
