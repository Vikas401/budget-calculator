import React from 'react';
import UserPage from '../pages/userPage/userPage.component';
import HomePageModal from './HomePageModal';
import { Link } from 'react-router-dom';

class HomePage extends React.Component{
  renderActions(){
    return(
    <div>
    <Link exact to='/sign-in' className='ui primary button'>GET STARTED</Link>
    </div>
  )}
  render(){
       const { currentUser } = this.props;
   return(
    <div>
    {currentUser ? (
      <UserPage currentUser={currentUser}/>
     ) : (
    <HomePageModal
    title= 'Please login or signup first'
    content='This app support for claculate your budget of month'
    actions={this.renderActions()} 
    />
     )
   }
    </div>
    );
}};
export default HomePage;