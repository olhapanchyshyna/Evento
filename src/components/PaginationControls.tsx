import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const btnClass =
	'text-white flex items-center gap-x-2 px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm'

type PaginationControlsProps = {
	prevPath: string
	nextPath: string
}

export default function PaginationControls({
	prevPath,
	nextPath,
}: PaginationControlsProps) {
	return (
		<section className='flex justify-between w-full'>
			{prevPath ? (
				<>
					<Link href={prevPath} className={btnClass}>
						<ArrowLeftIcon />
						Previous
					</Link>
				</>
			) : (
				<div />
			)}

			{nextPath ? (
				<>
					<Link href={nextPath} className={btnClass}>
						Next
						<ArrowRightIcon />
					</Link>
				</>
			) : (
				<div />
			)}
		</section>
	)
}
