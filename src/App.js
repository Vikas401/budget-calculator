import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import { connect } from 'react-redux';
import HomePage from './component/homepage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './component/header/header.component';
import UserPage from './pages/userPage/userPage.component';


import './App.css';
import Delete from './component/delete';


class App extends React.Component{
    
       unsubscribeFromAuth = null
       
       componentDidMount(){
           const { setCurrentUser }  = this.props;
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
       if(userAuth){
         const userRef = await  createUserProfileDocument(userAuth);

         userRef.onSnapshot(snapShot => {
         setCurrentUser({
                    userId: snapShot.id,
                    ...snapShot.data()
               
            });
           
         });
       }
         setCurrentUser(userAuth)
           })
       }

       componentWillUnmount(){
           this.unsubscribeFromAuth();
       }
   
    render(){
        //console.log(this.props.currentUser)
        return(
            <div>
            <Header/>
            <Switch>
            <Route exact path='/' render={() => <HomePage currentUser={this.props.currentUser}/>}/>
             <Route path='/user-page' component={UserPage}/>
             <Route  path='/delete/:id' component={Delete}/>
            <Route exact path='/sign-in' render={() => this.props.currentUser ? ( <Redirect to='/'/>) : (<SignInAndSignUp/>)}/>
            </Switch>
             
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,  mapDispatchToProps )(App);