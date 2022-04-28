import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="success">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Diagonal Foods
          </Typography>
          <Button sx={{ m: 1 }} color="inherit" variant="outlined">
            Register
          </Button>
          <Button sx={{ m: 1 }} color="inherit" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
