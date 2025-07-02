
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; 
import { useState } from 'react';
import './Calendar.css'

const EVENTS = [
  {
    id: '1',
    title: 'Musical night ',
    start: '2025-07-04T09:00:00',
    end: '2025-07-04T10:00:00',
    
    extendedProps: {
      location: 'indore',
      description: 'Discuss project milestones',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbag2Hyu3d-5jtuH57BpXJ3zfionXSxAMaH6qXLsA4IcTWz_1CUEsmGfkyxIkB-WwsWbc&usqp=CAU'
    }
  },
  {
    id: '2',
    title: 'musical fest',
    start: '2025-07-08T12:00:00',
    end: '2025-07-08T13:00:00',
    extendedProps: {
      location: 'Cafe Downtown',
      description: 'Casual catch-up',
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZpd6dtC0OZH5di2Db8SDmmJhS9008hMoAeg&s'

    }
  },
   {
    id: '3',
    title: 'Musical night',
    start: '2025-07-12T12:00:00',
    end: '2025-07-12T13:00:00',
    extendedProps: {
      location: 'indore',
      description: 'Casual catch-up',
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6X_PpQ-z9qvmOdFOBUIUn_ytr7mHkBorT1r_XhnCBPceMfDm8Dm1m-KoaDcpGMhK0m4I&usqp=CAU'
    }
  },
   {
    id: '4',
    title: 'Musical night',
    start: '2025-07-15T12:00:00',
    end: '2025-07-15T13:00:00',
    extendedProps: {
      location: 'indore',
      description: 'Casual catch-up',
      imageUrl:'https://process.filestackapi.com/Ar1JhJgKrRMCHY5XInB1Iz/output=f:jpg/cache=expiry:max/https://cdn.filepicker.io/api/file/1M7C4iKgRFC74SPZzGsU'
    }
  },
  {
    id: '5',
    title: 'Musical night',
    start: '2025-07-21T12:00:00',
    end: '2025-07-21T13:00:00',
    extendedProps: {
      location: 'indore',
      description: 'party night',
      imageUrl:'https://process.filestackapi.com/Ar1JhJgKrRMCHY5XInB1Iz/output=f:jpg/cache=expiry:max/https://cdn.filepicker.io/api/file/1M7C4iKgRFC74SPZzGsU'
    }
  }
];


function renderEventContent(eventInfo) {
  const { title, extendedProps } = eventInfo.event;
  return (
    <div>
      <strong>{title}</strong><br/>
      <small>{extendedProps.location}</small>

    </div>
  );
}

export default function Calendar() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  
   const handleEventClick = info => {
    const e = info.event;
    info.jsEvent.preventDefault(); 

    if (e.url) {
      window.open(e.url, '_blank');
    }
   

  
    setSelectedEvent({
      id: e.id,
      title: e.title,
      location: e.extendedProps.location,
      description: e.extendedProps.description,
      start: info.event.startStr,
      end: info.event.endStr,
       imageUrl: e.extendedProps.imageUrl,
    });
  };
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={EVENTS}                         
        eventContent={renderEventContent}     
        selectable
        select={info => {
          alert(`Selected dates: ${info.startStr} to ${info.endStr}`);
        }}
        eventClick={handleEventClick}
      />
      {selectedEvent && (
        <div className="homepage-cont3-calendar">
          <div className='pera'>
          <h3 className='peras1'>{selectedEvent.title}</h3>
           
          <p className='peras3'><strong>When:</strong> {selectedEvent.start} – {selectedEvent.end}</p>
          
          <p className='peras2'><strong>Where:</strong> {selectedEvent.location}</p>
          </div>
          
          <p className='peras2'><strong>Details:</strong> {selectedEvent.description}</p>
          <img className='calendar-img'
            src={selectedEvent.imageUrl}
            alt=""
            
          />
          <button onClick={() => setSelectedEvent(null)}></button>
            <button
            onClick={() => addToCart(EVENTS)}
          className="booking-btn"
        >

          Book
        </button>
        </div>
      )}
    </div>
  );
}
