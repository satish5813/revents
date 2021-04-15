import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar({setFormOpen}){
    return(
        <Menu inverted fixed='top'>
            <Container>
               
                    <Menu.Item header>
                        <img src="/assets/logo.png" alt="logog" style={{marginRight:25}}/>
                        Re-Events
                    </Menu.Item>
                    <Menu.Item name='Events'/>
                    <Menu.Item>
                        <Button onClick={()=>setFormOpen(true)} positive inverted content='Create Eevents'/>
                    </Menu.Item>
                    <Menu.Item position='right'>
                        <Button basic inverted content='Login'/>
                        <Button basic inverted content='Register' style={{marginLeft:'0.5em'}} />      
                    </Menu.Item>
                
            </Container>
        </Menu>
    )
}