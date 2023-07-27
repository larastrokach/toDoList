
import './App.css';
import image from './to-do-list.png';

import { ToDoList } from './ToDoList';


function App() {
  return (
    <div className="App">
      <div  className="container">
     <img src = { image } width="200px" alt ="shopping" />
     </div>
     <div  className="container">
     <h1>Today's To Do List </h1>
     </div>
     <ToDoList />
   
    </div>
  );
}

export default App;
