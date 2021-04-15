import React from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';


export default function EvenetFrom({setFormOpen}){
    return(
        <Segment clearing>
            <Header content='Create New Event'/>
            <Form >
                <Form.Field>
                    <input type="text" placeholder='Event Tittle'/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Category'/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Desciption'/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='City'/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Venue'/>
                </Form.Field>
                <Form.Field>
                    <input type="date" placeholder='Date'/>
                </Form.Field>
                <Button floated='right' content='Submit' type='submit' positive />
                <Button onClick={()=>setFormOpen(false)} floated='right' content='Cancel' type='submit'  />
            </Form>
        </Segment>
    )
}