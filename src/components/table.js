import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';
import AddEdit from './addEdit';
import Delete from './delete';
import axios from 'axios';
import { API } from '../config/config'

export class table extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user:[],             
             column: [                
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc',
                                      
                },
                {
                    label: 'Username',
                    field: 'username',
                    sort: 'asc',
                    
                }, 
                {
                    label: 'Action',
                    field:'action',
                    width: '100px'                                     
                },              
                // {
                //     label: 'Password',
                //     field:'password',
                //     sort: 'asc',
                                      
                // },
                               
              ]    
        }
    }     
    getDataFromApi = () => {
        axios.get(`${API.USER_API}`).then(response => {
          this.setState({
            user: response.data
          });
        });        
    };       
    componentDidMount(){
        this.getDataFromApi();
        console.log(API.USER_API)
    } 
    
    deleteUser = (user) => {
        axios.delete(`${API.USER_API}/${user.id}`)
        .then(res => {            
            this.getDataFromApi();
            alert("User deleted");
        })        
    }  
    getArrangedDataForTable = () => {
        const data = [];  
        
        this.state.user.map((user) =>                         
            data.push({  
                                   
                
                email: user.email,                           
                username : user.username ,                 
                // password : user.password,               
                action :  
                <div className="col-button">
                    
                    <AddEdit action="edit" id={user} data={this.getDataFromApi}/>
                    
                    <Delete action="edit" id={user} data={this.deleteUser}/>           
                    
                </div>,
                
            })
        )
        const data2 = {columns: this.state.column, rows: data};                   
        return data2;            
    }
    render() {     
        
        return(
            <div>   
                 <div className="div-add">
                    < AddEdit data={this.getDataFromApi}/> 
                </div>                           
                <MDBDataTable btn 
                    striped
                    bordered
                    small
                    data={this.getArrangedDataForTable()}
                    />                 
            </div>
        )        
    }
}

export default table
