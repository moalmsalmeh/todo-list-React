
import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todos,setTodos] = useState([]);
   const[error,setError]= useState("");

  const inputRef= useRef();
 
  const handleAdTodo = () =>{
    const text = inputRef.current.value;
    const newItem={text, completed:false}
    if(!text){
      setError("Please add something!!!");
      return;
    }
    setTodos([...todos,newItem]);
     setError("");
    inputRef.current.value="";
  }
  const handleItemDone =(index)=>{
    const newTodos= [...todos];
    newTodos[index].completed= !newTodos[index].completed;
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h2>To Do List</h2>
     {error && <p className="error">{error}</p>}
      <div className='to-do-container'>
        <ul>
        {todos.map((item, index) =>{
          return <li className={item.completed ? "done" : ""} key={index} onClick={() => handleItemDone(index)}>{item.text}</li>
        })}
      </ul>
      <input ref={inputRef} placeholder='Enter Item..'/>
      <button onClick={handleAdTodo}>Add</button>
      </div>
      
    </div>
  );
}

export default App;
