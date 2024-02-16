
import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import prisma from './db'
import { notFound } from 'next/navigation'

export function cn(...classes: ClassValue[]) {
	return twMerge(clsx(classes))
}

export function capitalize(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

export async function getEvents(city: string, page = 1) {
	const events = await prisma.eventoEvents.findMany({
		where: {
			city: city === 'all' ? undefined : capitalize(city),
		},
		orderBy: {
			date: 'asc',
		},
		take: 6,
		skip: (page - 1) * 6
	})

	let totalCount;
  if (city === "all") {
    totalCount = await prisma.eventoEvents.count();
  } else {
    totalCount = await prisma.eventoEvents.count({
      where: {
        city: capitalize(city),
      },
    });
  }

  return {
    events,
    totalCount,
  };
}

export async function getEvent(slug: string) {
	const event = await prisma.eventoEvents.findUnique({
		where: {
			slug: slug,
		},
	});

	if (!event) {
		return notFound()
	}

	return event
}
