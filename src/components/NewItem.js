import React from 'react';

export class NewItem extends React.Component{

  constructor(props){
    super(props);

    this.state = {text:''};
  }

  handleChange = (e) => {
    this.setState({text:e.target.value});
  }

  add = (e) => {
    if(e.keyCode===13){
      this.props.addNewItem (this.state.text);
      this.setState({text:''});
    }
  }

  render(){
    return (
      <div onKeyDown={this.add}>
        <input type="text" value={this.state.text} onChange={this.handleChange} placeholder="新建待办..."/>
      </div>
    );
  }
}