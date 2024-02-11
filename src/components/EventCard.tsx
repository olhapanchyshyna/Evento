import { EventoEvents } from '@/lib/types'

type EventCardProps = {
	event: EventoEvents
}

export default function EventCard({ event }: EventCardProps) {
	return <section>{event.name}</section>
}
