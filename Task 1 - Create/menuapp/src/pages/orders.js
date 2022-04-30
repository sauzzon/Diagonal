import OrderCard from "../components/orderCard";
import { Container, Grid, CircularProgress, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { Context } from "../context/Context";
import axios from "axios";
import Notification from "../components/notification";

const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ type: "", msg: "" });
  const [orderDetails, setOrderDetails] = useState([]);
  const { isLoggedIn } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate("/login");
    } else {
      setLoading(true);
      getOrderDetails();
    }
  }, [isLoggedIn, navigate]);

  const getOrderDetails = async () => {
    try {
      const token = localStorage.getItem("userToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      };
      const orderDetails = await axios.get("/orders", config);
      setLoading(false);
      setOrderDetails(orderDetails.data.orders);
    } catch (error) {
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
          <Container>
            <Grid sx={{ mt: 1, mb: 5 }} container spacing={4}>
              {!!orderDetails.length && (
                <OrderCard
                  getOrderDetails={getOrderDetails}
                  data={orderDetails}
                />
              )}
            </Grid>
          </Container>
          {!orderDetails.length && (
            <Typography textAlign="center" color="green" variant="h6">
              No any order history
            </Typography>
          )}
        </>
      )}
    </>
  );
};

export default Orders;
