import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import logo from "../utils/images/logo.jpg";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="success">
        <Toolbar>
          <Avatar sx={{ mr: 2 }} src={logo}></Avatar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Diagonal Foods
          </Typography>
          <Button
            component={Link}
            to="/orders"
            sx={{ m: 1 }}
            color="inherit"
            variant="outlined"
            size="small"
          >
            Orders
          </Button>
          <Button
            component={Link}
            to="/menu"
            sx={{ m: 1 }}
            color="inherit"
            variant="outlined"
            size="small"
          >
            Menu
          </Button>
          <Button
            component={Link}
            to="/"
            sx={{ m: 1 }}
            color="inherit"
            variant="outlined"
            size="small"
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/register"
            sx={{ m: 1 }}
            color="inherit"
            variant="outlined"
            size="small"
          >
            Register
          </Button>
          <Button
            component={Link}
            to="/login"
            sx={{ m: 1 }}
            color="inherit"
            variant="outlined"
            size="small"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}