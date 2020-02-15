import React from 'react';

import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import { createStructuredSelector } from 'reselect';
//import { selectCurrentUser } from '../../redux/user/user.selector';


const Header = ({ currentUser }) => {
   
    return(
        <div className='header'>
        <Link to='/' className='logo-container '>
        Budget
        </Link>
        <div className='options'>
        
        <Link to='/contact' className='option'>
           Contact
        </Link>
        {
            currentUser ? 
            <div className='option' onClick={() => auth.signOut()}>Sign Out</div> 
            :
            <Link to='/sign-in' className='option'>Sign In</Link>
        }
        {currentUser && 
        <div className='option'>
        Hello {currentUser.displayName}
        </div>}
        </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header);