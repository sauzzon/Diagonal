import data from "../ordersData";
import OrderCard from "../components/orderCard";
import { Container, Grid } from "@mui/material";
import AppBar from "../components/appbar";
import Footer from "../components/footer";

const Orders = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Grid sx={{ mt: 1, mb: 5 }} container spacing={4}>
          <OrderCard data={data} />
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Orders;
