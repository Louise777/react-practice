import React from 'react';

export class FinishCheckbox extends React.Component{

  handleChange = (e) => {
    this.props.setFinishedOnly(e.target.checked);
  }

   render(){
     return (
       <div>
         <input type="checkbox" id="finished" onChange={this.handleChange}/>
         <label for="finished">显示已完成项目</label>
       </div>
     );
   }
}