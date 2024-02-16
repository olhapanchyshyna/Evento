import EventsList from '@/components/EventsList'
import H1 from '@/components/H1'
import { capitalize } from '@/lib/utils'
import { Suspense } from 'react'
import Loading from './loading'
import { Metadata } from 'next'

type Props = {
	params: {
		city: string
	}
}

type EventsPageProps = Props & {
	searchParams : {
		page: string
	}
}

export function generateMetadata({ params}: Props): Metadata {
	const city = params.city

	return {
		title: city === 'all' ? 'All Events' : `Events in ${capitalize(city)}`,
	}
}

export default function EventsPage({ params, searchParams }: EventsPageProps) {
	const city = params.city
	const page = searchParams.page ?? 1

	return (
		<main className='flex flex-col items-center py-24 px-[20px] min-h-[110vh]'>
			<H1 className='mb-28'>
				{city === 'all' ? 'All Events' : `Events in ${capitalize(city)}`}
			</H1>

			<Suspense fallback={<Loading />}>
				<EventsList city={city} page={+page}/>
			</Suspense>
		</main>
	)
}
