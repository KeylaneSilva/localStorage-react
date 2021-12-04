import React, {useState} from 'react'

export default function Teste() {
    const [value, setValue] = useState([]);

    // add localStorage
    const addItems = () => {
      if(localStorage.getItem('lists') == null){
        var list = []
        list.push(value)
        localStorage.setItem('lists', JSON.stringify(list))
      }else{
        var list = JSON.parse(localStorage.getItem('lists'))
        list.push(value)
        localStorage.setItem('lists', JSON.stringify(list))
      }
    }

    // get localStorage
    const listarItens = () => {
      const reclist = JSON.parse(localStorage.getItem('lists'))
      // console.log(reclist)
      const arr = []
      for(let i=0; i < reclist.length; i++){
        arr.push(reclist[i])
      }
      document.getElementById('lista').innerHTML = arr
    }

    // remove 
    const removeItem = () => {
      const listando = JSON.parse(localStorage.getItem('lists'))
      console.log(listando.length)
      listando.splice(listando.length - 1, 1)
      localStorage.setItem('lists', JSON.stringify(listando))
      listarItens()
      
    }
     
    return (
      <div>
        <h1>Hello React with Local Storage!</h1>
            <input 
              value={value} 
              type="text" 
              onChange={e => setValue(e.target.value)} />
            <button onClick={addItems}>Adicionar</button><br/>
            <button onClick={listarItens}>Listar</button>
            <button onClick={removeItem}>Remover</button>
        <p id="lista"></p>
      </div>
    );
  };
   

