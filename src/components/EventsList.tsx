import { EventoEvents } from '@/lib/types'
import React from 'react'
import EventCard from './EventCard'

type EventsListProps = {
	events :  EventoEvents[]
}

export default function EventsList({events}: EventsListProps) {
	return (
		<section>
			{events.map((event) => (
				<EventCard event={event} key={event.id}/>
			))}
		</section>
	)
}
