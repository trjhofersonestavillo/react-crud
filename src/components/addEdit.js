import React from 'react';
import Modal from 'react-responsive-modal';
import axios from 'axios';
import { API } from '../config/config'
 
export class addEdit extends React.Component {
  state = {
    open: false,    
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
  saveUser = (user) => {
    axios.post(`${API.USER_API}`, user)
    .then(res => {       
      if(res.data.email === "Email already exists" || res.data.email === "Username already exists"){
        alert(res.data.email);          
      }       
      else{
        alert("User Added");  
        this.onCloseModal();      
      } 
      this.props.data();            
    })       
  }  
  editUser = (user) => {
    axios.put(`${API.USER_API}/${user.id}`, user)
    .then(res => {            
      if(res.data.email === "Email already exists" || res.data.email === "Username already exists"){
        alert(res.data.email);          
      }       
      else{
        alert("User Updated");  
        this.onCloseModal();      
      } 
      this.props.data();
    })       
  }
  onCloseModal = () => {
    
    this.setState({ open: false });
  };
  onCancel = (event) => {
      event.preventDefault();
      this.setState({ open: false });
  }
  saveUsers = (e) => {
    e.preventDefault();      
    
    if(this.props.action === "edit"){
      
      this.editUser({id: this.props.id.id, username: this.refs.username.value, email: this.refs.email.value, password: this.refs.password.value })
    }
    else{
      this.saveUser({username: this.refs.username.value, email: this.refs.email.value, password: this.refs.password.value });
    }      
  }
  
  render() {
    const { open } = this.state;
    if(this.props.action === "edit"){
        return (
            <div>        
               <button onClick={this.onOpenModal} className="btn btn-blue btn-sm Ripple-parent">edit</button>
               <Modal open={open} onClose={this.onCloseModal} center>
                   <h2>Edit user</h2>
                   <form onSubmit={this.saveUsers}>
                       <h6>Email</h6>                
                       <input type="email" className="modal-textbox" ref="email" required defaultValue={this.props.id.email}></input>
                       <h6>Username</h6>
                       <input type="text" className="modal-textbox" ref="username" required defaultValue={this.props.id.username}></input>
                       <h6>Password</h6>
                       <input type="password" className="modal-textbox" ref="password" required defaultValue={this.props.id.password}></input>
                       <div className="button-div">
                           <button className="btn-primary">Save</button>
                           <button className="btn-primary" onClick={this.onCancel}>Cancel</button>
                       </div>  
                   </form>
               </Modal>
             </div>
           );    
    }
    else{
        return (
          <div>         
              <button onClick={this.onOpenModal} className="btn btn-primary"><i className="far fa-user pr-2" aria-hidden="true"></i>Add User</button>
              <Modal open={open} onClose={this.onCloseModal} center>
                <h2>Add user</h2>
                <form onSubmit={this.saveUsers}>
                  <h6>Email</h6>                
                  <input type="email"  className="modal-textbox" ref="email" required></input>
                    <h6>Username</h6>
                      <input type="text"  className="modal-textbox" ref="username" required></input>
                    <h6>Password</h6>
                      <input type="password" className="modal-textbox" ref="password" required></input>
                    <div className="button-div">
                      <button className="btn-primary">Save</button>                           
                          <button className="btn-primary" onClick={this.onCancel}>Cancel</button>
                    </div>  
                </form>
            </Modal>
          </div>
        );    
    }    
  }
} 
export default addEdit