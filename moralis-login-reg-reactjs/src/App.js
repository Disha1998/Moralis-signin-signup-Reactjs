import react from "react";
import { useMoralis } from "react-moralis";
import { Button, Container, Heading, Box, Input } from "@chakra-ui/react";

import "./App.css";
import { useState } from "react";

const SignUp = () => {
  const { signup } = useMoralis();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <Box>
      <Input
        placeholder="Enter your Email"
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
      /><br></br><br></br>
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(event) => setpassword(event.currentTarget.value)}
      /><br></br><br></br>
      <Button onClick={() => signup(email,password, email)}>Sign Up</Button>
      <br></br><br></br>
    </Box>
  );
};


// Login with email-password

const Login = () => {
  const { login } = useMoralis();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <Box>
      <Input
        placeholder="Enter your Email"
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
      /><br></br><br></br>
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(event) => setpassword(event.currentTarget.value)}
      /><br></br><br></br>
      <Button onClick={() => login(email,password)}>Login</Button>
      <br></br><br></br>
    </Box>
  );
};

function App() {
  const { authenticate, isAuthenticated, isAuthenticating, logout } =
    useMoralis(); //Using metamask wallet

  if (isAuthenticated) {
    return (
      <Container>
        <Heading>Welcome user</Heading>
        <Button onClick={() => logout()}>Log out</Button>
      </Container>
    );
  }

  return (
    <Container className="App">
      <Heading>Moralis Authentication_Reactjs</Heading>
      <br></br>
      {/* <Button isLoading={isAuthenticating} onClick={() => authenticate()}>
        Connect with Metamask
      </Button> */}

      <SignUp />
      <Login />
    </Container>
  );
}

export default App;
