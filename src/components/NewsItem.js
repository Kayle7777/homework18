import React from 'react';
import { Avatar, List, ListItem, ListItemSecondaryAction, ListItemText, IconButton, Collapse } from '@material-ui/core';
import { Comment as CommentIcon, ExpandLess, ExpandMore } from '@material-ui/icons/';

const NewsItem = props => {
    const { link, image, text, index, isOpen, handleClick } = props;
    return (
        <List>
            <ListItem role={undefined} dense button onClick={() => handleClick(index)}>
                <ListItemText primary={text.slice(0, 40) + '...'} />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Open">{isOpen === index ? <ExpandLess /> : <ExpandMore />}</IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Collapse in={isOpen === index}>
                <List>
                    <ListItem button onClick={() => window.open(link, '_blank')}>
                        <Avatar alt="pic" src={image} />
                        <ListItemText primary={text} />
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );
};

export default NewsItem;
