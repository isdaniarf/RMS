import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent} from 'material-ui/styles/colors';

const ContactList = () => (
  <div>
    <List>
      <ListItem
        primaryText="Chelsea Otakan"
        leftIcon={<ActionGrade color={pinkA200} />}
        rightAvatar={<Avatar src="images/dani_150.jpg" />}
      />
      <ListItem
        primaryText="Eric Hoffman"
        insetChildren={true}
        rightAvatar={<Avatar src="images/bayu_150.jpg" />}
      />
      <ListItem
        primaryText="James Anderson"
        insetChildren={true}
        rightAvatar={<Avatar src="images/tiara_150.jpg" />}
      />
      <ListItem
        primaryText="Kerem Suer"
        insetChildren={true}
        rightAvatar={<Avatar src="images/wahyu_150.jpg" />}
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
        rightAvatar={<Avatar src="images/diyon_150.jpg" />}
      />
      <ListItem
        primaryText="Adham Dannaway"
        insetChildren={true}
        rightAvatar={<Avatar src="images/ica_150.jpg" />}
      />
      <ListItem
        primaryText="Allison Grayce"
        insetChildren={true}
        rightAvatar={<Avatar src="images/griya_150.jpg" />}
      />
      <ListItem
        primaryText="Angel Ceballos"
        insetChildren={true}
        rightAvatar={<Avatar src="images/monica_150.jpg" />}
      />
    </List>
  </div>
);

export default ContactList;