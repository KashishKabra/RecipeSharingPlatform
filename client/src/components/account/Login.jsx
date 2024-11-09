import { Box, TextField, Button, Typography, styled } from '@mui/material';

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
    text-align: center; /* Center the error message */
`;

const Login = () => {
    const imageURL = "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
    
    return (
        <Component>
            <Overlay />
            <Wrapper>
                <Image src={imageURL} alt="login" />
                <TextField
                    id="standard-basic"
                    label="Username"
                    variant="standard"
                    fullWidth
                />
                <TextField
                    id="standard-basic"
                    label="Password"
                    type="password"
                    variant="standard"
                    fullWidth
                />
                <LoginButton variant="contained">
                    Login
                </LoginButton>
                <Typography style={{ textAlign: 'center' }}>OR</Typography>
                <SignupButton variant="text">
                    Create an Account
                </SignupButton>
            </Wrapper>
        </Component>
    );
};

export default Login;
