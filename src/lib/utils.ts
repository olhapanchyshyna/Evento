import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { EventoEvents } from './types'

export function cn(...classes: ClassValue[]) {
	return twMerge(clsx(classes))
}

export function capitalize(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

export async function getEvents(city: string) {
	const respons = await fetch(
		`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
	)
	const events: EventoEvents[] = await respons.json()

	return events
}

export async function getEvent(slug: string) {
	const respons = await fetch(
		`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
	)
	const event = await respons.json()

	return event
}
