import React, {useState} from 'react'
import './App.css'

export default function Teste() {
    const [value, setValue] = useState([]);

    // salvar item
    const addItens = () => {
      if(localStorage.getItem('lists') == null){
        var list = []
        list.push(value)
        localStorage.setItem('lists', JSON.stringify(list))
        setValue('')
      }else{
        var list = JSON.parse(localStorage.getItem('lists'))
        list.push(value)
        localStorage.setItem('lists', JSON.stringify(list))
        setValue('')
      }
    }

    // retornar item
    const listarItens = () => {
      // retornando item da lista
      const reclist = JSON.parse(localStorage.getItem('lists'))
      const arr = []
      for(let i=0; i < reclist.length; i++){
        arr.push(reclist[i])
      }
      document.getElementById('lista').innerHTML = arr
    }

    // remover item
    const removeItem = () => {
      const listando = JSON.parse(localStorage.getItem('lists'))
      console.log(listando.length)
      // removendo o ultimo item
      listando.splice(listando.length - 1, 1)
      localStorage.setItem('lists', JSON.stringify(listando))
      listarItens()
      
    }
     
    return (
      <div>
        <h1>Local Storage</h1>
          <div className="container">
            <input
              placeholder='O que você quer salvar?'
              value={value} 
              type="text" 
              onChange={e => setValue(e.target.value)} 
            />
            <button onClick={addItens}> Salvar </button>
            <button onClick={listarItens}>Listar </button>
            <button onClick={removeItem}>Remover </button>
            <p id="lista"></p>
          </div>
      </div>
    );
  };
   

