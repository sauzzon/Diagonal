import data from "../ordersData";
import OrderCard from "../components/orderCard";
import { Container, Grid } from "@mui/material";

const Orders = () => {
  return (
    <>
      <Container>
        <Grid sx={{ mt: 1, mb: 5 }} container spacing={4}>
          <OrderCard data={data} />
        </Grid>
      </Container>
    </>
  );
};

export default Orders;
