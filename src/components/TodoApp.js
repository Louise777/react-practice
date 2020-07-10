import React from 'react';
import {TodoList} from './TodoList'
import {ControlPanel} from './ControlPanel'
import  './TodoApp.css'

export class TodoApp extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      todos:[{todo:'吃饭',isFinished:true},{todo:'睡觉',isFinished:false},{todo:'上课',isFinished:true}],
      finishedOnly:false
    }
  }

  setFinished = (index) => {
    let todos = this.state.todos;
    todos[index].isFinished = true;
    this.setState({todos:todos})
  }

  deleteItem = (index) => {
    let todos = this.state.todos;
    
    todos.splice(index,1);
    this.setState({todos:todos})
  }

  setFinishedOnly = (finishedOnly) => {
    this.setState({finishedOnly:finishedOnly})
  }

  addNewItem = (item) => {
    let todos = this.state.todos;
    todos.push({todo:item,isFinished:false})
    this.setState({todos:todos})
  }

  render(){
    return (
      <div id="app">
        <ControlPanel addNewItem={this.addNewItem} setFinishedOnly={this.setFinishedOnly}/>
        <TodoList todos={this.state.todos} finishedOnly={this.state.finishedOnly} setFinished={this.setFinished} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}
