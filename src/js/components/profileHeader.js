import React from 'react';
import { ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import { white, pinkA200 } from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';

const secondaryTextStyle = {
    color: white
}

const ProfileHeader = ({ func }) => (
    <ListItem
        disabled={true}
        primaryText='James Anderson'
        secondaryText={<div style={secondaryTextStyle}>SE-PG</div>}
        leftIcon={<ActionGrade color={pinkA200} />}
        leftAvatar={<Avatar src="images/dani_150.jpg" />}
    />
);

export default ProfileHeader;