import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { pinkA200, transparent } from 'material-ui/styles/colors';

const EXPAND_CONTACT = 'EXPAND_CONTACT';

function expandContact() {
  return {
    type: EXPAND_CONTACT,
    text
  }
}

const ContactList = ({contacts}) => (
  <div>
    <List>
      {contacts.map((contact) => (
        <ListItem
          key = {contact.name}
          primaryText={contact.name}
          secondaryText={contact.grade}
          leftIcon={<ActionGrade color={pinkA200} />}
          leftAvatar={<Avatar src={contact.avatar} />}
        />
      ))}
    </List>
    <Divider inset={true} />

  </div>
);

export default ContactList;