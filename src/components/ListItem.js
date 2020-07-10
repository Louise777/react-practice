import React from 'react';

export class ListItem extends React.Component{

  setFinished = () => {
    this.props.setFinished(this.props.idx);
  }

  delete = () => {
    this.props.deleteItem(this.props.idx);
  }

  render(){
    return (
      (!this.props.finishedOnly || this.props.todo.isFinished) && 
      (
        <li>
          <span>{this.props.todo.todo}</span>
          <button class="rightbut" onClick={this.delete}>删除</button>
          <button class="leftbut" onClick={this.setFinished}>完成</button>
        </li>
      )
    );
  }
}
