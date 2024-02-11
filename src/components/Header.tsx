'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

const routes = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'All Events',
		path: '/events/all',
	},
]

export default function Header() {
	const activePath = usePathname()

	return (
		<header className='flex items-center justify-between border-b border-white/10 h-14 px-3 sm:px-9'>
			<Logo />
			<nav className='h-full'>
				<ul className='flex gap-x-6 h-full text-sm'>
					{routes.map(route => {
						return (
							<li
								className={clsx(
									'hover:text-white flex items-center relative transition',
									{
										'text-white': activePath === route.path,
										'text-white/50': activePath !== route.path,
									}
								)}
								key={route.path}
							>
								<Link href={route.path}>{route.name}</Link>

								{activePath === route.path && (
									<motion.div
										layoutId='header-active-link'
										className='bg-accent h-1 w-full absolute bottom-0'
									></motion.div>
								)}
							</li>
						)
					})}
				</ul>
			</nav>
		</header>
	)
}
