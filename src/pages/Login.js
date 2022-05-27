import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Captcha from "../components/Captcha";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { setUserSession } from "../utils/Common";
import axios from "axios";

const theme = createTheme();
const redirect = false;

export default function SignIn(props) {
  let history = useNavigate();
  const redirect = path => {
    history(path);
  };
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([{email: '', password: ''}]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchItems();
  }, []);
  
  const fetchItems = async () => {
    const data1 = await fetch(
      `https://localhost:44380/api/Customers`
    )
    .then((res)=> res.json())
    .then((json)=>{
      setUsers(json)
    });
  };
  console.log(users);
  const user2 = users.map((item) => ({
    email: item.email,
    password: item.password,
  }));
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const inputUser = 
      {
        email: data.get("email"),
        password: data.get("password"),
      }
    ;
    console.log(inputUser);
    for(let i=0; i<users.length;i++)
    {
      console.log(users[i].fullname);
    if (inputUser.email==users[i].email && inputUser.password == users[i].password) {
      console.log(user[i]);
      setUserSession("token", users[i]);
    }
    if(localStorage.getItem("token")!==null){
      redirect('/')
    }else{
      redirect('/signin')
    }
  }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h2">
            Log <span style={{color: 'red'}}> in</span>
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <Captcha /> */}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Link to="/">
            <Button
              style={{ background: "rgb(190, 37, 49, 1)"}}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log in
            </Button>
            </Link>
            
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
