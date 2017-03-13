import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import {pinkA200, transparent} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';

const ProfileHeader = () => (
    <ListItem
        disabled={true}
        primaryText='James Anderson'
        secondaryText='SE-PG'
        leftIcon={<ActionGrade color={pinkA200} />}
        leftAvatar={<Avatar src="images/dani_150.jpg" />}
      />
);

export default ProfileHeader;