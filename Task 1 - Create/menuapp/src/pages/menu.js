import data from "../foodData";
import { Container, Grid } from "@mui/material";
import MenuCard from "../components/menuCard";
import BasicTable from "../components/orderTable";

import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { Context } from "../context/Context";
import Footer from "../components/footer";

const Menu = () => {
  const { isLoggedIn, selectedFood } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
    if (!isLoggedIn) {
      return navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Container>
        <Grid sx={{ mt: 1, mb: 5 }} container spacing={4}>
          <MenuCard data={data} />
        </Grid>
        <Grid sx={{ m: 1, background: "#f4fdf4" }} container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <BasicTable data={selectedFood}></BasicTable>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Menu;
