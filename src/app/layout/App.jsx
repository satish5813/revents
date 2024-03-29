import React,{useState} from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/evevntsDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';


export default function App() {
  const [formOpen,setFormOpen]=useState(false);
  const[selectedEvent,setSelectedEvent]=useState(null);


  function handleSelectEvent(event){
    setSelectedEvent(event);
    setFormOpen(true);
  }


function handleCreateFormOpen(){
  setSelectedEvent(null);
  setFormOpen(true);
}
  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen}/>
      <Container className='main'>
      <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} selectEvent={handleSelectEvent} selectedEvent={selectedEvent}/>
      </Container>      
    </>
  );
}


