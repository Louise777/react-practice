import React from 'react';
import {ListItem} from './ListItem'

export class TodoList extends React.Component{

  render(){
    return (
      <ul>
        {this.props.todos.map((todo,index) => <ListItem todo={todo} idx={index} finishedOnly={this.props.finishedOnly} key={index} 
        setFinished={this.props.setFinished} deleteItem={this.props.deleteItem}/>)}
      </ul>
    );
  }
}