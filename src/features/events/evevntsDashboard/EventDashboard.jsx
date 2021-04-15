import React,{useState} from 'react';
import { Grid } from 'semantic-ui-react';
import EvenetFrom from '../eventsForm/EventForm';
import EventList from './EventList';
import {sampleData} from '../../../app/api/sampleData';


export default function EventDashboard({formOpen,setFormOpen}){
    const [events,setEvents]=useState(sampleData);
    
return(
    <Grid>
        <Grid.Column width={10}>
            <EventList events={events}/>
        </Grid.Column>
        <Grid.Column width={6}>
            {formOpen && <EvenetFrom setFormOpen={setFormOpen}/>}
        </Grid.Column>
    </Grid>
)
}