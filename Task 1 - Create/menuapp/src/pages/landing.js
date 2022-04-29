import "./landing.css";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import AppBar from "../components/appbar";
import Footer from "../components/footer";
const Landing = () => {
  return (
    <>
      <AppBar />
      <section className="section1"></section>
      <section className="content">
        <Typography variant="h4" color="black">
          Find Your Favourite Food
        </Typography>
        <Button
          component={Link}
          to="/menu"
          sx={{ m: 2 }}
          variant="contained"
          color="success"
        >
          See Our Menu
        </Button>
      </section>
      <Footer />
    </>
  );
};

export default Landing;
