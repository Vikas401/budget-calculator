import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = this.state;
        try{
           await auth.signInWithEmailAndPassword(email, password);
           this.setState({ email: '', password: '' });
        }catch(error){
            console.log(error);
        }
    }

    handleChange= (e) => {
        const { value, name } = e.target;
        
        this.setState({ [name]: value })
    }
    render(){
        return (
            <div className='sign-in'>
            <h2 className='title'>already have an account</h2>
            <span>sign in with your google and password</span>
            <form onSubmit={this.handleSubmit}>
             <FormInput name="email"
              type="email"
              handleChange={this.handleChange}
              value={this.state.email}
              lable="email"
              required/>
             <FormInput name="password"
              type="password"
               value={this.state.password}
               handleChange={this.handleChange}
               lable="password"
               required/>
             
              <div className='buttons'>
             <CustomButton type="submit" > Sign In</CustomButton>
             <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
             </div>
             </form>
            </div>
        );
    }
}
export default SignIn;