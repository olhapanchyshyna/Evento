import { EventoEvents } from '@/lib/types'
import React from 'react'
import EventCard from './EventCard'

type EventsListProps = {
	city : string
}

export default async function EventsList({city}: EventsListProps) {

	const respons = await fetch(
		`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
	)
	const events: EventoEvents[] = await respons.json()

	return (
		<section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
			{events.map((event) => (
				<EventCard event={event} key={event.id}/>
			))}
		</section>
	)
}
