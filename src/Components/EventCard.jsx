export default function EventCard({ event, onBook }) {
  return (
    <div className="upcoming-cont">
      <img src={event.image} alt={event.title} className="w-full h-40 object-cover"/>
      <div className="upcoming-peras">
      <div className="pera">
        <h3 className="peras1">{event.title}</h3>
        <p className="peras2">
          {new Date(event.date).toLocaleString()}
        </p>
        <p className="peras3">{event.description}</p>
        </div>
        <div>
        <button
          onClick={() => onBook(event.bookingUrl)}
          className="booking-btn"
        >

          Book
        </button>
        </div>
        </div>
      
    </div>
  );
}