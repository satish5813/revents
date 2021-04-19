import cuid from 'cuid';
import React, { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';


export default function EvenetFrom({setFormOpen,setEvents,createEvents,selectedEvent,updatedEvent}){
    
    const intialValues=selectedEvent??{
        title:'',
        category:'',
        desciption:'',
        city:'',
        venue:'',
        date:''


    };
    const [values,setValues]=useState(intialValues);
        

    function handleFormSubmit(){
        
        selectedEvent?updatedEvent({...selectedEvent,...values}):
        createEvents({...values,id:cuid(),hostedBy:'satish',attendees:[]});
        setFormOpen(false);
    }

    function inputChange(e){
        const{name,value}=e.target;
        setValues({...values,[name]:value});
    }
    


    return(
        <Segment clearing>
            <Header content={selectedEvent?'Editing Event':'Create New Event'}/>
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input type="text" name='title' placeholder='Event Tittle' value={values.title} onChange={(e)=>inputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" name='category' placeholder='Category' value={values.category} onChange={(e)=>inputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" name='desciption' placeholder='Desciption' value={values.desciption} onChange={(e)=>inputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" name='city' placeholder='City' value={values.city} onChange={(e)=>inputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" name='venue' placeholder='Venue' value={values.venue} onChange={(e)=>inputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="date" name='date' placeholder='Date' value={values.date} onChange={(e)=>inputChange(e)}/>
                </Form.Field>
                <Button floated='right' content='Submit' type='submit' positive />
                <Button onClick={()=>setFormOpen(false)} floated='right' content='Cancel' type='submit'  />
            </Form>
        </Segment>
    )
}