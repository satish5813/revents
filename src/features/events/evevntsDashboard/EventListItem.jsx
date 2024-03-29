import React from 'react';
import {  Button, Icon, Item, List, Segment, SegmentGroup } from 'semantic-ui-react';
import EventListAtendee from './EventListAtendee';

export default function EventListItem({event,selectEvent,deleteEvent}){
    return(
        <SegmentGroup>
            <Segment>
                <Item.Group>
                    <Item>
                    <Item.Image size='tiny' circular src={event.hostPhotoURL} />
                    <Item.Content>
                        <Item.Header content={event.title}/>
                        <Item.Description>
                            Hosted by {event.hostedBy}
                        </Item.Description>
                    </Item.Content>         
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock'/> {event.date}
                    <Icon name='marker'/> {event.venue}                    
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map(attendee=>(
                        <EventListAtendee key={attendee.id} attendee={attendee}/>
                    ))}           
                               
                </List>
            </Segment>
            <Segment clearing>
                <div>{event.description}</div>
                <Button onClick={()=>deleteEvent(event.id)} color='red' floated='right' content='Delete'/>
                <Button onClick={()=>selectEvent(event)} color='teal' floated='right' content='View'/>
            </Segment>
        </SegmentGroup>
    )
}