import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Typography from "@mui/material/Typography";
import { Grid, Paper, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

import { useEffect, useContext, useState } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import Notification from "../components/notification";
import axios from "axios";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ type: "", msg: "" });
  const [regSuccess, setRegSuccess] = useState(false);
  const { isLoggedIn } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      return navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const [formError, setFormError] = useState({
    passwordError: "",
    cpasswordError: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      cpassword: data.get("cpassword"),
    };
    const isValid = checkValidation(formData);
    if (isValid) {
      setLoading(true);
      registerUser(formData);
    }
  };
  const registerUser = async (formData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post("/auth/register", formData, config);
      setLoading(false);
      setNotification({ type: "success", msg: data.msg });
      setRegSuccess(true);
    } catch (error) {
      setLoading(false);
      setNotification({ type: "error", msg: error.response.data.msg });
    }
  };

  const checkValidation = (formData) => {
    let errorFree = true;
    const tempError = {
      passwordError: "",
      cpasswordError: "",
    };

    if (
      formData.password.length < 8 ||
      !/\d/.test(formData.password) ||
      !/[a-zA-Z]/.test(formData.password)
    ) {
      errorFree = false;
      tempError.passwordError =
        "At least 8 character long and include at least a number and an alphabet";
    }

    if (formData.password !== formData.cpassword) {
      errorFree = false;
      tempError.cpasswordError = "Password doesn't match";
    }
    setFormError({
      ...formError,
      ...tempError,
    });
    return errorFree;
  };

  //some styling
  const paperStyle = {
    padding: 50,
    height: "85vh",
    margin: "10vh 0",
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
                    <AppRegistrationIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Register account
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      name="name"
                    />
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
                      error={Boolean(formError.passwordError)}
                      helperText={formError.passwordError}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="cpassword"
                      type="password"
                      label="Confirm Password"
                      name="cpassword"
                      error={Boolean(formError.cpasswordError)}
                      helperText={formError.cpasswordError}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      color="success"
                      sx={{ mt: 3, mb: 2 }}
                      fullWidth
                    >
                      Register
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
                    <HowToRegIcon />
                  </Avatar>
                  <Typography variant="h5">
                    {regSuccess
                      ? "Welcome to Diagonal Food"
                      : "Already Registerd?"}
                  </Typography>
                  <Button
                    component={Link}
                    to="/login"
                    sx={{ m: 3 }}
                    color="success"
                    variant="contained"
                    size="small"
                  >
                    Login Now
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

export default Register;
