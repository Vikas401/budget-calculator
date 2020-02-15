import React from 'react';
import back from '../../images/back.png';
//import { createStructuredSelector } from 'reselect';
import numberFormat from '../totalBudget/nuberFormat.component';
// import { selectIncomeCollectionTotal } from '../../redux/collection/collection.selector';
// import { selectExpanseCollectionTotal } from '../../redux/collection/collection.selector';


import './top.styles.scss';

const Month = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const d = new Date();
return monthNames[d.getMonth()];

}

 



class Top extends React.Component{

   
    render(){
          
       
          const { collections, currentUser } = this.props;
          
            const totalIncome = currentUser && collections.reduce(
                  (result, collection) => (
                   currentUser.userId === collection.userId &&
                    collection.value === '+' ? result + parseInt(collection.amounts) : result), 0
              ) 

            const totalExpenses = currentUser && collections.reduce(
                (result, collection) => (
                    currentUser.userId === collection.userId &&
                    collection.value === '-' ? result + parseInt(collection.amounts) : result), 0
            ) 
              
          
         const expansePercrntage = (totalExpenses * 100 / totalIncome);
         const totalBudget =  (totalIncome > totalExpenses ?   totalIncome - totalExpenses :  totalExpenses - totalIncome)
    return(
        
        <div 
        style={{
            backgroundImage: `url(${back})`
        }}
        className="top">
                <div className="budget">
                    <div className="budget__title">
                        Available Budget in <span className="budget__title--month">{Month()}</span>:
                    </div>
                    
                   {currentUser && collections && 
                    
                   
                   <div  className="budget__value">+{numberFormat(totalBudget.toFixed(2))}</div> 
                }
                      
                    
                    <div className="budget__income clearfix">
                        <div className="budget__income--text">Income</div>
                        
                      
                            <div className="right">
                       {collections && currentUser &&
                            <div className="budget__income--value">+{numberFormat(totalIncome.toFixed(2))}</div>}
                            <div className="budget__income--percentage">&nbsp;</div>
                        </div>
                      
                      
                    
                    </div>
                
                    <div className="budget__expenses clearfix">
                        <div className="budget__expenses--text">Expenses</div>
                       
                        <div className="right clearfix">
                        {collections && currentUser &&
                            <div className="budget__expenses--value">-{numberFormat(totalExpenses.toFixed(2))}</div>
                        }
                            <div className="budget__expenses--percentage">{expansePercrntage.toFixed(2)}%</div>
                        </div>
                    </div>
                </div>
           </div>
    )
    }
}

export default Top;

