import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const ToDoList = ({ list, setList, filterList }) => {
  const handleComplete = (currItem) => (
		setList(
			list.map((item)=>{
				if(item.id === currItem.id) {
					return {...item, completed: !item.completed}
				}
				return item
			})
		)
	)

	const handleDelete = ({ id }) => (
		setList(list.filter((todo) => todo.id !== id))
	)

  return (
    <List>
      {filterList.length ? filterList.map((item, i) => (
        <ListItem key={i.toString()} dense button>
          <Checkbox tabIndex={-1} checked={item.completed} onChange={() => handleComplete(item)}/>
          <ListItemText primary={item.title} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => handleDelete(item)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )) : null}
    </List>
  );
};

export default ToDoList;