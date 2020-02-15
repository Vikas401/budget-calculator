import React from 'react';
import './input-form.styles.scss';
import List from '../list/list.component';
import Top from '../top/top.component';
import { connect } from 'react-redux';
import { setCollection } from '../../redux/collection/collection.action';




class InputForm extends React.Component {
      state={
        discriptions: '',
          amounts: '',
          value: '+',
         
         
          
      }
     
     handleSubmit = () => {
        //console.log(collections)
        //  console.log(currentUser.id)
      
        
         if(this.state.value === '+'){
             console.log('Hello Income');
         }
         if(this.state.value === '-'){
             console.log('Hello Expence');
         }
      
           this.props.setCollection(this.state)
        
           this.setState({
               discriptions: '', amounts: ''
           })
     }

     handleChange = (e) => {
         
         this.setState({
            [e.target.name]: e.target.value,
           });
       
     }

    render(){
        
        const { currentUser, collections } = this.props;
           //console.log(collections);
        
            return(
                <div>
                 <Top currentUser={currentUser} collections={collections}/>
                <div className='user-page'>
                 <div className="bottom">
                  <div className="add">
                   <div className="add__container">
                    <select className="add__type" value={this.state.value} onChange={e => this.setState({value: e.target.value})} >
                    <option  value="+">+</option>
                    <option  value="-">-</option>
                    </select>
                    <input type="text"   name="discriptions" value={this.state.discriptions} onChange={this.handleChange} className="add__description" placeholder="Add description"/>
                    <input type="number" name="amounts" value={this.state.amounts} onChange={this.handleChange} className="add__value" placeholder="Value"/>
                  
                    
                    
                    <button onClick= { this.handleSubmit} className="add__btn" ><i className="ion-ios-checkmark-outline"></i></button>
                   
                    </div>
                 </div>
              </div>
            </div>
            <List currentUser={currentUser}/>
            </div>
            )
        }
    }
            
const mapStateToProps = ( state )=> ({
  

 collections: Object.values(state.collection)
   
 
})
        
export default connect(mapStateToProps, {setCollection})(InputForm);