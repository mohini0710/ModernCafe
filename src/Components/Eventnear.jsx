export default function Eventnear({ events}) {
return (
    <div className="homepage-cont3">
      <img src={events.images} alt={events.title} className="w-full h-40 object-cover"/>
      <div className="homepage-cont3-pera'">
      <div className="pera">
        <h3 className="peras1">{events.title}</h3>
        <p className="peras2">
          {new Date(events.date).toLocaleString()}
        </p>
        <p className="peras3">{events.description}</p>
        </div>
        <div>
        
        </div>
        </div>
      
    </div>
     );
}
