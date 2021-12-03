import React, {useEffect, useState} from 'react'

export default function Teste() {
    const [value, setValue] = useState([]);

    const addItems = () => {
      if(localStorage.getItem('lists') == null){
        var list = []
        list.push(value)
        localStorage.setItem('lists', JSON.stringify(list))
      }else{
        var list = JSON.parse(localStorage.getItem('lists'))
        console.log(list)
        list.push(value)
        localStorage.setItem('lists', JSON.stringify(list))
      }
    }
     
    return (
      <div>
        <h1>Hello React with Local Storage!</h1>
            <input 
              value={value} 
              type="text" 
              onChange={e => setValue(e.target.value)} />
            <button onClick={addItems}>Adicionar</button>
        <p>{value}</p>
      </div>
    );
  };
   

