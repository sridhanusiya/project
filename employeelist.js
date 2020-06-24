import React from 'react';
import PropTypes from 'prop-types';

class EmployeeList extends React.Component{
    
constructor(props){
    super(props);
       //data=this.props.emp
    }

    render()
    {
     //   console.log(this.props.rem);
    //    const {data}=this.props.emp;// destructuring
        return(
            <React.Fragment>
            <h1>employee list</h1>
                <table>
                    <TableHead/>
                    <TableBody data={this.props.emp} del={this.props.rem} />
                    
                </table>
                </React.Fragment>
        );
    }

}
/*
EmployeeList.defaultProps={
  //  name: PropTypes.string.isRequired,

};

EmployeeList.propTypes={
    };
  */  
export default EmployeeList;

const TableHead=()=>{

    return(
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>age</th>
                    </tr>
                    </thead>
            );
}

const TableBody=(props)=>{
    console.log(props);
    const tableData=props.data.map(
        (row,index)=>{
            return(  <tr key={index}>
                    <td>{row.empName}</td>                    
                    <td>{row.desig}</td>
                    <td>{row.age}</td>
                
                    <td><button onClick={()=>props.del(index)}>delete</button></td>
                    
                   </tr>
            )
        })
 
    return    <tbody>{tableData}</tbody>
}
