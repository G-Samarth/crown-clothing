import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email: '',
                password: ''
            });

        }catch(error){
            console.error(error);
        }

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='email' 
                        name='email' 
                        handleChange={this.handleChange} 
                        label='Email' 
                        value={this.state.email} 
                        required
                    />
       
                    <FormInput 
                        type='password' 
                        name='password' 
                        handleChange={this.handleChange} 
                        label='Password' 
                        value={this.state.password} 
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>
                            sign in
                        </CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
                            sign in with google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;