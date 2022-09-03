
import React from 'react';
import { ShowCounter } from './Components/ShowCounter';
import {AddCounter}from './Components/AddCounter';
import {useState} from 'react';
import {RemoveCounter} from './Components/RemoveCounter';

//import './App.css';

function Main() {

  const [number, setNumer]= useState(0);

  const onAdd = () => {
    setNumer(number + 1);


  };

  const onLess = () => {
    if(number >0){
      setNumer(number - 1);

    }
  

  };

  return (
    <React.Fragment>
          <ShowCounter number={number}/>
          <AddCounter onAddPress={onAdd}/>
          <RemoveCounter RemoveNumber={onLess}/>
    </React.Fragment>



  );
}

export default Main;
