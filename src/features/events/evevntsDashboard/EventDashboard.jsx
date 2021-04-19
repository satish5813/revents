import React,{useState} from 'react';
import { Grid } from 'semantic-ui-react';
import EvenetFrom from '../eventsForm/EventForm';
import EventList from './EventList';
import {sampleData} from '../../../app/api/sampleData';


export default function EventDashboard({formOpen,setFormOpen,selectEvent,selectedEvent}){
    const [events,setEvents]=useState(sampleData);
    

    function handleCreateEvents(event){
        setEvents([...events,event])
    }

    function handleUpdateEvents(updatedEvent){
        setEvents(events.map(evt=>evt.id===updatedEvent.id?updatedEvent:evt));
        selectEvent(null);
    }

    function handleDeleteEvenets(eventId){
        setEvents(events.filter(evt=>evt.id!==eventId));
    }
    

  
    
return(
    <Grid>
        <Grid.Column width={10}>
            <EventList events={events} selectEvent={selectEvent} deleteEvent={handleDeleteEvenets}/>
        </Grid.Column>
        <Grid.Column width={6}>
            {formOpen && <EvenetFrom 
            setFormOpen={setFormOpen} 
            setEvents={setEvents} 
            createEvents={handleCreateEvents} 
            selectedEvent={selectedEvent}
            updatedEvent={handleUpdateEvents}
            key={selectedEvent?selectedEvent.id:null}
            />}
        </Grid.Column>
    </Grid>
)
}