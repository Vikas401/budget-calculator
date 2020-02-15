import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state= {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
         
        
        if(password !== confirmPassword){
            alert('password not matched');
            return;
        }
        try {
           const { user } = await auth.createUserWithEmailAndPassword( email, password);
           await createUserProfileDocument(user, {displayName});
        
           this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
           })

        }catch(error){
            console.log(error)
        }
    }
    handleChange = event => {
        const { name, value } = event.target;

        this.setState ({ [name]: value });
    }
    render(){
        return(
            <div className='sign-up'>
            <h2 className='title'> I have already an account</h2>
            <span>Sign up with email and password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput
             type="text"
             name="displayName"
             value={this.state.displayName}
             handleChange={this.handleChange} 
             lable="Display Name"
             required>
             </FormInput>
             <FormInput
             type="email"
             name="email"
             value={this.state.email}
             handleChange={this.handleChange} 
             lable="email"
             required>
             </FormInput>
             <FormInput
             type="password"
             name="password"
             value={this.state.password}
             handleChange={this.handleChange} 
             lable="password"
             required>
             </FormInput>
             <FormInput
             type="password"
             name="confirmPassword"
             value={this.state.confirmPassword}
             handleChange={this.handleChange} 
             lable="Confirm Password"
             required>
             </FormInput>
             <CustomButton type="submit">
             Sign Up
             </CustomButton>
            
             </form>
            </div>
        );
    }
}
export default SignUp;