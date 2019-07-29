import React from 'react';
import Modal from 'react-responsive-modal';
 
export class Delete extends React.Component {
  state = {
    open: false,    
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  }; 
  onCloseModal = () => {    
    this.setState({ open: false });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.data(this.props.id);
    this.setState({ open: false });
  }
  onCancel = (e) => {
    e.preventDefault();
    this.setState({ open: false });
  }
  render() {
    const { open } = this.state;
    return (
        <div>        
           <button onClick={this.onOpenModal} className="btn btn-purple btn-sm Ripple-parent">Delete</button>
           <Modal open={open} onClose={this.onCloseModal} center>
               <h1>Delete user</h1>
               <h2>Are you sure you want to delete this user?</h2>
               <form onSubmit={this.onSubmit}>                   
                   <div className="button-div">
                       <button className="btn-primary">Yes</button>
                       <button className="btn-primary" onClick={this.onCancel}>No</button>
                   </div>  
               </form>
           </Modal>
         </div>
       );                  
    }
}
export default Delete