import React from 'react'

type EventsPageProps = {
	params: {
		slug: string
	}
}

export default async function EventPage({params}: EventsPageProps) {
	const slug = params.slug
	const respons = await fetch(
		`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
	)
	const event = await respons.json()

	return (
		<main>

		</main>
	)
}
