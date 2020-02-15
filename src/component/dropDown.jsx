import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Month = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const d = new Date();
return monthNames[d.getMonth()];

}

 const DropDown = () => {
    return (
        <Menu.Item position="right">
        
        
      
         <Dropdown pointing="top left" text={Month()}>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/createEvent' text="Create Event" icon="plus" />
            <Dropdown.Item as={Link} to='/events' text="My Events" icon="calendar" />
            <Dropdown.Item as={Link} to='/settings' text="Settings" icon="settings" />
            <Dropdown.Item  text="Sign Out" icon="power" />
          </Dropdown.Menu>
        </Dropdown>
      
      </Menu.Item>
    )
}
export default DropDown;