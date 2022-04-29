import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Typography from "@mui/material/Typography";
import { Grid, Paper, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

import { useEffect, useContext, useState } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Notification from "../components/notification";

const Login = () => {
  //some styling
  const paperStyle = {
    padding: 50,
    height: "75vh",
    margin: "10vh 0",
  };

  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ type: "", msg: "" });
  const { isLoggedIn, setIsLoggedIn } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      return navigate("/menu");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);
    const formData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post("/auth/login", formData, config);
      localStorage.setItem("userToken", data.token);
      setLoading(false);
      setNotification({ type: "success", msg: "Login Successful" });
      setIsLoggedIn(true);
    } catch (error) {
      setLoading(false);
      setNotification({ type: "error", msg: error.response.data.msg });
    }
  };

  return (
    <>
      {notification.type && (
        <Notification
          severity={notification.type}
          message={notification.msg}
        ></Notification>
      )}

      {loading ? (
        <CircularProgress
          sx={{ margin: "auto", position: "absolute", top: "48%", left: "48%" }}
        />
      ) : (
        <>
          <Grid rowSpacing={0} columnSpacing={1} container component="main">
            <CssBaseline />
            <Grid item xs={12} sm={7} md={6} lg={6}>
              <Paper elevation={3} style={paperStyle}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: "#2e7d32" }}>
                    <LockOpenIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Log into account
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      type="email"
                      id="email"
                      label="Email Address"
                      name="email"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="password"
                      type="password"
                      label="Password"
                      name="password"
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      color="success"
                      sx={{ mt: 3, mb: 2 }}
                      fullWidth
                    >
                      Log in
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={5} md={6} lg={6}>
              <Paper elevation={3} style={paperStyle}>
                <Box
                  sx={{
                    marginTop: "12vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: "#2e7d32" }}>
                    <AppRegistrationIcon />
                  </Avatar>
                  <Typography variant="h5">Not Registerd Yet?</Typography>
                  <Button
                    component={Link}
                    to="/register"
                    sx={{ m: 3 }}
                    color="success"
                    variant="contained"
                    size="small"
                  >
                    Register Now
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default Login;
