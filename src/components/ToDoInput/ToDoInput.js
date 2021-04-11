import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';

import { convertDate } from '../../utils/date';

const ToDoInput = ({ input, setInput, list, setList, editItem, setEditItem }) => {

  const updateList = (title, id, completed) => {
		const newList = list.map((el) => el.id === id ? {title, id, completed} : el)
		setList(newList);
		setEditItem('');
	}

	useEffect(() => {
    editItem ? setInput(editItem.title) : setInput('');
	}, [setInput, editItem]);

	const handleInputChange = (event) => {
		setInput(event.target.value);
	}

	const handleFormSumbit = (event) => {
		event.preventDefault();

		if(!editItem) {
			setList([...list, {
				id: +new Date(),
        date: convertDate(new Date()),
				title: input,
				completed: false
			}])
			setInput('');
		}
		else {
			updateList(input, editItem.id, editItem.completed);
		}
	}

  return (
    <form onSubmit={handleFormSumbit}>
      <TextField
        variant="outlined"
        placeholder="Add task"
        margin="normal"
        value={input}
        onChange={handleInputChange}
        required
				fullWidth
      />
    </form>
  );
};

export default ToDoInput;