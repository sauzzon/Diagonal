import data from "../foodData";
import { Container, Grid, Typography, Button } from "@mui/material";
import MenuCard from "../components/menuCard";
import BasicTable from "../components/orderTable";
import AppBar from "../components/appbar";
import Footer from "../components/footer";

const Menu = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Grid sx={{ mt: 1, mb: 5 }} container spacing={4}>
          <MenuCard data={data} />
        </Grid>
        <Grid sx={{ m: 1, background: "#f4fdf4" }} container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            {data ? (
              <BasicTable data={data}></BasicTable>
            ) : (
              <Typography variant="h6">No items selected</Typography>
            )}
            <center>
              <Button sx={{ mb: 5 }} color="success" variant="contained">
                Confirm Order
              </Button>
            </center>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Menu;
