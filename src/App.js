/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ToDoInput from './components/ToDoInput/ToDoInput';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoChart from './components/ToDoChart/ToDoChart';

import './App.css';

import { getList } from './request/requestData';

const App = () => {
  const initState = JSON.parse(localStorage.getItem('list')) || [];
  const [input, setInput] = useState('');
  const [list, setList] = useState(initState);
  const [editItem, setEditItem] = useState(null);
  const [filterList, setFilterList] = useState([]);
  const [value, setValue] = useState('all');
  const [err, setError] = useState(false);

  const filteredList = () => {
    switch (value) {
      case 'done':
        setFilterList(list.filter((item) => item.completed === true));
        break;
      case 'undone':
        setFilterList(list.filter((item) => item.completed === false));
        break;
      default: 
        setFilterList(list);
        break;
    }
  }

  useEffect(() => {
    fetchList();
  }, [])


  const fetchList = () => {
    getList()
      .then(res => {
        let flag = false;
        let tmp = [...list].slice(0, list.length);

        for(let i = 0; i < res.length; i++) {
          if(tmp[i].id !== res[i].id) {
            flag = true;
          }
        }

        if(flag){
          setList([...res, ...list])
        }
      })
      .catch(err => setError(true));
  }

  useEffect(() => {
    filteredList();
    localStorage.setItem('list', JSON.stringify(list));
  }, [list, value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="app">
      <Typography component="h1" variant="h2">
        Input your task
      </Typography>

      <ToDoInput
        input={input}
        setInput={setInput}
        list={list}
        setList={setList}
        editItem={editItem}
        setEditItem={setEditItem}
      />

      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="All" value='all' />
          <Tab label="Done" value='done' />
          <Tab label="Undone" value='undone'/>
        </Tabs>
      </Paper>
      
      <ToDoList 
        list={list}
        filterList={filterList}
        setList={setList}
        setEditItem={setEditItem}
      />

      {value === 'done' ? <ToDoChart filterList={filterList}/> : null}
    </div>
  );
}

export default App;
