import React from 'react';
import './list.styles.scss';
import { connect } from 'react-redux';
//import { deleteCollection } from '../../redux/collection/collection.action';
import numberFormat from '../totalBudget/nuberFormat.component';
//import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchBudget } from '../../redux/collection/collection.action';
import { Link } from 'react-router-dom';


class List extends React.Component {

    componentDidMount(){
        this.props.fetchBudget()
    }
       
    render(){
          const { collections, currentUser } = this.props;
          
        return(
           
            <div className="container clearfix">
            <div className="income">
                <h2 className="income__title">Income</h2>
          {currentUser && collections && collections.map((item, index) => {
            
              if(item.value === '+' && currentUser.userId === item.userId){
              return(
                <div className="income__list" key={index} >
                      
                <div className="item clearfix" id="inc-0">
                <div className="item__discription" >{item.discriptions}</div>
                <div className="right clearfix">
                <div className="item__value" >{numberFormat(item.amounts)}</div>
                <div className="item__delete">
                <Link to={`/delete/${item.id}`} className="item__delete--btn">
                <i className="ion-ios-close-outline"></i>
                </Link>
                </div>
                </div>
                </div>
              </div>
              )}return true;
          })}
                   </div>
             
              <div className="expenses" >
                <h2 className="expenses__title">Expenses</h2>
                {currentUser && collections && collections.map((item, index) => {
                   
                    if(item.value === '-' && currentUser.userId === item.userId){
                    return(
                <div className="expenses__list" key={index}>
                    <div className="item clearfix">
                    <div className="item__discription">{item.discriptions}</div>
                    <div className="right clearfix">
                    <div className="item__value">{numberFormat(item.amounts)}</div>
                    <Link to={`/delete/${item.id}`} className="item__delete--btn" >
                    <i  className="ion-ios-close-outline"></i>
                    </Link>
                    </div>
                    </div>
                </div>
                )}return true;
            })}
               </div>
             </div>
        )
    }
     
    
      
       
    
}
const mapStateToProps = (state) => ({
    collections: Object.values(state.collection)
})
// const mapDispatchToProps = ( dispatch ) => ({
//     deleteItem: collection => dispatch(deleteCollection(collection)),
    
// })
export default connect(mapStateToProps, {fetchBudget})(List);