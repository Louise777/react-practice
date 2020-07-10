import React from 'react';
import {NewItem} from './NewItem'
import {FinishCheckbox} from './FinishCheckbox'

export class ControlPanel extends React.Component{

  render(){
    return (
      <div>
        <NewItem addNewItem={this.props.addNewItem}/>
        <FinishCheckbox setFinishedOnly={this.props.setFinishedOnly}/>
      </div>
    );
  }
}