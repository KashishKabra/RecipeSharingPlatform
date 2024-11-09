import { Box, TextField, Button, styled } from '@mui/material';

const Container = styled(Box)({
    width: 400,
    margin: '20vh auto',  // Centers horizontally and adds top margin for vertical centering
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
});

const Logo = styled('img')({
    width: '120px',
    marginBottom: '20px',
});

const StyledTextField = styled(TextField)({
    width: '100%',
    marginBottom: '1.5rem',
});

const StyledButton = styled(Button)({
    width: '100%',
    marginBottom: '1rem',
    fontWeight: 'bold',
});

const Login = () => {
    const imageURL = "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
    return (
        <Container>
            <Logo src={imageURL} alt="login" />
            <StyledTextField id="standard-basic" label="Username" variant="standard" />
            <StyledTextField id="standard-basic" label="Password" type="password" variant="standard" />
            <StyledButton variant="contained" color="primary">
                Login
            </StyledButton>
            <Button variant="text" color="secondary">
                Create an Account
            </Button>
        </Container>
    );
}

export default Login;
