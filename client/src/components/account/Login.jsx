import { useState } from 'react';
import { Box, TextField, Button, Typography, styled } from '@mui/material';

import {API} from '../../service/api';


const Component = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; /* Vertically center the component */
    background: url('https://hungerbay.com/assets/images/b6.jpg') no-repeat center center; /* Replace with your food image URL */
    background-size: cover; /* Ensure the image covers the entire screen */
    position: relative;
`;

const Overlay = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* Semi-transparent dark overlay */
    z-index: 1; /* Ensure it sits behind the content */
`;

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex-direction: column;
    gap: 20px; /* Use gap for consistent spacing */
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    width: 100%;
    max-width: 400px; /* Ensure the form doesn't exceed this width */
    z-index: 2; /* Ensure the content sits above the overlay */
`;

const Image = styled('img')({
    width: 120,
    margin: '0 auto', /* Center the image */
    paddingBottom: '20px', /* Adjust padding for better spacing */
});

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 4px;
    width: 100%; /* Make the button fill the available width */
    &:hover {
        background: #ff8b3d; /* Slightly darker hover effect */
    }
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 4px;
    width: 100%; /* Ensure the button takes full width */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    &:hover {
        background: #f1f1f1; /* Light background on hover */
    }
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
    text-align: center; /* Center the text */
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
    text-align: center; 
`;
const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const Login = () => {
    const imageURL = "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
    
    const [account, toggleAccount] = useState('login');  
    const [signup,setSignup] = useState(signupInitialValues);
    const [error, setError] =useState('');
    const onInputChange = (e) =>{
        setSignup({...signup, [e.target.name]:e.target.value});//dont want to override
    }

    const signupUser = async () =>{
        let response= await API.userSignup(signup);
        if(response.isSuccess){
            setError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else{
            setError('Something went wrong, try again');
        }
    }

    return (
        <Component>
            <Overlay />
            <Wrapper>
                <Image src={imageURL} alt="login" />
                
                {/* Display Login Form */}
                {account === 'login' ? (
                    <>
                        <TextField
                            label="Username"
                            variant="standard"
                            fullWidth
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="standard"
                            fullWidth
                        />
                        {error && <Error>{error}</Error>}
                        <LoginButton variant="contained">
                            Login
                        </LoginButton>
                        <Typography style={{ textAlign: 'center' }}>OR</Typography>
                        <SignupButton variant="text" onClick={() => toggleAccount('signup')}>
                            Create an Account
                        </SignupButton>
                    </>
                ) : (
                    // Display Signup Form
                    <>
                        <TextField
                            label="Enter Name"
                            variant="standard"
                            onChange={(e) => onInputChange(e) }
                            name='name'
                            fullWidth
                        />
                        <TextField
                            label="Username"
                            variant="standard"
                            onChange={(e) => onInputChange(e)}
                            name='username'
                            fullWidth
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="standard"
                            onChange={(e) => onInputChange(e)}
                            name='password'
                            fullWidth
                        />

                        {error && <Error>{error}</Error>}
                        <SignupButton variant="contained" onClick={() => signupUser()}>
                            Signup
                        </SignupButton>
                        <Typography style={{ textAlign: 'center' }}>OR</Typography>
                        <LoginButton variant="text" onClick={() => toggleAccount('login')}>
                            Already have an Account
                        </LoginButton>
                    </>
                )}
            </Wrapper>
        </Component>
    );
};

export default Login;
