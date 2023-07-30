import { Component } from 'react';

import note from './note.png'

export class ToDoList extends Component {
    state ={
        userInput: "",
        toDoList: []
    }

    onChangeEvent (e) {
        this.setState ({userInput: e})
    }

    addItem (input) {
        if(input === '') {
            alert ("Please enter an item")
        } else {
        let listArray = this.state.toDoList;
        listArray.push (input)
        this.setState ({toDoList: listArray, userInput: ''})
       }
    }

    deleteItem (){
        let listArray= this.state.toDoList;
        listArray=[];
        this.setState ({toDoList: listArray})
    }

    crossedWord (event){
        const li = event.target;
        li.classList.toggle ('crossed');
      
    }


    onFormSubmit (e){
        e.preventDefault ();
    }
    
    render(){
        return(
        <div>
            <form onSubmit = {this.onFormSubmit}>
            <div  className="container">
            <input type = "text" 
            placeholder = "What should I do today?"
            onChange = {(e) => {this.onChangeEvent (e.target.value)}} 
            value = {this.state.userInput}/>
          </div>
        <div  className="container">
            <button onClick={() => this.addItem (this.state.userInput)} className="btn add"> Add </button>
        </div>
        <ul>
            {this.state.toDoList.map((item,index) => ( 
            <li onClick={this.crossedWord} key = {index}> <img src = {note} width="40px" alt ="check"/> {item}</li>))}
        </ul>
        <div  className="container">
            <button onClick = {() => this.deleteItem()} className="btn delete">Delete</button>
        </div>
        </form>
        </div>
        )
    }

}