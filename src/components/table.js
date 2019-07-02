import React, { Component } from 'react'
import { MDBBtn, MDBDataTable } from 'mdbreact';
//import axios from 'axios';

export class table extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user:[],             
             column: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Username',
                    field: 'username',
                    sort: 'asc'
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc'                    
                },
                {
                    label: 'Password',
                    field:'password',
                    sort: 'asc',                    
                },
                {
                    label: 'Action',
                    field:'action',               
                                      
                },
                
              ]    
        }
    }     
    edit(id){
        console.log(id)
    }
    getTable(){
        this.setState();

         fetch('http://localhost:9090/User/getUsers')
        .then(response => response.json())
        .then(data => this.setState({user: data}))
        const data = [];
        
        this.state.user.map((user) =>                         
            data.push({
                id : user.id , 
                username : user.username , 
                password : user.password,  
                email : user.email,
                edit: <p><MDBBtn color="blue" size="sm" onClick={() => this.edit(user.id)}>Edit</MDBBtn><MDBBtn color="purple" size="sm">Delete</MDBBtn></p>,
                
            })
        )
        const data2 = {columns: this.state.column, rows: data};                   
        return data2;            
    }
    render() {     
        
        return(
            <div>                
                <MDBDataTable btn 
                    striped
                    bordered
                    small
                    data={this.getTable()}
                    />     
                
            </div>
        )
        
    }
}

export default table
