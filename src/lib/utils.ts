import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import prisma from './db'


export function cn(...classes: ClassValue[]) {
	return twMerge(clsx(classes))
}

export function capitalize(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

export async function getEvents(city: string) {
	const events = await prisma.eventoEvents.findMany({
		where: {
			city: city === 'all' ? undefined : capitalize(city),
		},
		orderBy: {
			date: 'asc'
		}
	});

	return events
}

export async function getEvent(slug: string) {
	const event = await prisma.eventoEvents.findUnique({
		where: {
			slug: slug,
		},
	});

	return event
}
