import { useState } from 'react';
import '../styles/todolist.css';


function TodoListApp() {
let [todolist,setTodoList] = useState([]) 


    let saveTodoList = (event)=>{

        let todoname= event.target.toname.value;
       // alert(todoname);
       if(!todolist.includes(todoname)){
             let finalToDoList = [...todolist,todoname]
             setTodoList(finalToDoList);
       }else{
        alert("Todo name already exists")
       }

        event.preventDefault();
    }

    let list = todolist.map((data,ind)=>{

        return(
              <ToListItems key={ind} index={ind} todoData={data}
                todolist={todolist} settodolist={setTodoList}
              />
        )
    })

  return (
    <div className='App'>
        <h1 className='text-shadow-blue-800 text-3xl font-bold'>Todo List</h1>
        <form onSubmit={saveTodoList}>
            <input type='text' name='toname' />  <button>Save</button>
        </form>

        <div className='outerDiv'>
        <ul>
            {list}
        </ul>
        </div>
    </div>
  )
}

export default TodoListApp


function ToListItems({todoData,index,todolist,settodolist}){
       //console.log(todoData,index);
       let [status,setStatus] = useState(false)

       let deleteRow = ()=>{
        //console.log(index);
        let finalData = todolist.filter((v,i)=>i!=index)
          // console.log(finalData);
           settodolist(finalData)
       }

        let checkStatus = ()=>{
             setStatus(!status);
        }

    return(
         <li className={(status)? 'completetodo' : ''} onClick={checkStatus}>{index+1} {todoData} <span onClick={deleteRow}>&times;</span> </li>
    )
}