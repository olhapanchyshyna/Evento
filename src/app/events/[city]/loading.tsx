import Skeleton from '@/components/Skeleton'
import SkeletonCard from '@/components/SkeletonCard'

export default function loading() {
	return (
		<div className='flex flex-wrap justify-center max-w-[1100px] mx-auto py-24 '>
			<Skeleton className='h-12 w-[400px]' />
			<div className='flex flex-wrap justify-center max-w-[1100px] mx-auto px-[20px] py-24 gap-20'>
				{Array.from({ length: 6 }).map((item, i) => (
					<SkeletonCard key={i} />
				))}
			</div>
		</div>
	)
}
