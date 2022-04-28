import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Typography from "@mui/material/Typography";
import { Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const ConnectUser = () => {
  //some styling
  const paperStyle = {
    padding: 50,
    height: "75vh",
    margin: "10vh 0",
  };

  return (
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
            <Box component="form" sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                type="email"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                type="password"
                label="Password"
                name="password"
                autoComplete="password"
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
              <HowToRegIcon />
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
  );
};

export default ConnectUser;
