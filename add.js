import React from 'react';
import './App.css';
import EmployeeList from './EmployeeList';
const aName='value from app';

class App extends React.Component  {
  
  state={
    employees:[
      {
            empName:'charlie',
            desig:'admin',
            age:34
      },
      {
        empName:'Anup',
        desig:'Manager',
        age:32
      },
      {
        empName:'Alex',
        desig:'developer',
        age:26
      },
      {
        empName:'Annu',
        desig:'Tester',
        age:28
      }
    ]
  }
  deleteEmployee=(index)=>{
    const empStat=this.state.employees;

    this.setState(
      {
        employees: empStat.filter(
          (em,ind)=>{
            return ind!==index
          }),
      })
  }

  render(){
    
    return (
      <div>
        <FormComp/>
    <EmployeeList emp={this.state.employees} rem={this.deleteEmployee} />
    </div>
    );
  }
}

class FormComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { empName: '' };
    this.state = { desig: '' };
    this.state = { age: '' };
    this.changeName=this.changeName.bind(this);
    this.changeDesig=this.changeDesig.bind(this);
    this.changeAge=this.changeAge.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  changeName(event){
    console.log('hi');
    this.setState({empName:event.target.value})
  }
  changeDesig(event){
   
    this.setState({desig:event.target.value})
  }
  changeAge(event){
    
    this.setState({age:event.target.value})
  }
  addItem(e)
  {
    
  }
  
  render(){
  return(
    <form>
      <h1>{this.state.empName}  
       {this.state.desig} 
       {this.state.age}
    </h1>
     EmpName: <input type='text'  onChange={this.changeName}/>
     Desingation <input type='text'  onChange={this.changeDesig}/>
     Age: <input type='text'  onChange={this.changeAge}/>
     
          <button type="button" onClick={this.addItem}>ADD</button>
    </form>
  )
  }
}
export default App;
