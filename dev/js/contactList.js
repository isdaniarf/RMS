import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent} from 'material-ui/styles/colors';

const EXPAND_CONTACT = 'EXPAND_CONTACT';

function expandContact() {
  return {
    type: EXPAND_CONTACT,
    text
  }
}

const ContactList = () => (
  <div>
    <List>
      <ListItem
        primaryText="James Anderson"
        secondaryText="SE-PG"
        leftIcon={<ActionGrade color={pinkA200} />}
        leftAvatar={<Avatar src="images/dani_150.jpg" />}
      />
      <ListItem
        primaryText="Eric Hoffman"
        insetChildren={true}
        leftAvatar={<Avatar src="images/bayu_150.jpg" />}
      />
      <ListItem
        primaryText="Chelsea Otakan"
        insetChildren={true}
        leftAvatar={<Avatar src="images/tiara_150.jpg" />}
      />
      <ListItem
        primaryText="Kerem Suer"
        insetChildren={true}
        leftAvatar={<Avatar src="images/wahyu_150.jpg" />}
      />
    </List>
    <Divider inset={true} />
    <List>
      <ListItem
        primaryText="Adelle Charles"
        leftAvatar={
          <Avatar
            color={pinkA200} backgroundColor={transparent}
            style={{left: 8}}
          >
            A
          </Avatar>
        }
        leftAvatar={<Avatar src="images/diyon_150.jpg" />}
      />
      <ListItem
        primaryText="Adham Dannaway"
        insetChildren={true}
        leftAvatar={<Avatar src="images/ica_150.jpg" />}
      />
      <ListItem
        primaryText="Allison Grayce"
        insetChildren={true}
        leftAvatar={<Avatar src="images/griya_150.jpg" />}
      />
      <ListItem
        primaryText="Angel Ceballos"
        insetChildren={true}
        leftAvatar={<Avatar src="images/monica_150.jpg" />}
      />
    </List>
  </div>
);

export default ContactList;