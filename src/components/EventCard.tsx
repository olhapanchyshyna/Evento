
import { EventoEvents } from '@/lib/types'
import Image from "next/image";


type EventCardProps = {
  event: EventoEvents;
};

export default function EventCard({ event }: EventCardProps) {
  return (
      <section className="w-full h-full flex flex-col bg-white/[3%] rounded-xl overflow-hidden relative state-effects max-w-[500px]">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
        />

        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>
      </section>
  );
}