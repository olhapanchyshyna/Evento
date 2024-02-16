import { getEvents } from '@/lib/utils'
import EventCard from './EventCard'
import PaginationControls from './PaginationControls'

type EventsListProps = {
	city: string
	page: number
}

export default async function EventsList({ city, page }: EventsListProps) {
	const {events, totalCount} = await getEvents(city, page)

	const prevPath =  page > 1 ? `/events/${city}?page=${page - 1}` : ''
	const nextPath = totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : ''

	return (
		<section className='max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]'>
			{events.map(event => (
				<EventCard event={event} key={event.id} />
			))}

			<PaginationControls prevPath={prevPath} nextPath={nextPath}/>
		</section>
	)
}
