import { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CircularProgress,
} from "@mui/material";
import photo from "../utils/images/order.jpg";
import axios from "axios";
import Notification from "./notification";

const OrderCard = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ type: "", msg: "" });
  const [seeMore, setSeeMore] = useState(new Array(data.length).fill(false));

  const payOrder = async (d) => {
    try {
      const token = localStorage.getItem("userToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      };
      await axios.patch(`/orders/${d._id}`, {}, config);
      setLoading(false);
      setNotification({ type: "success", msg: "Payment done successfully" });
    } catch (error) {
      setLoading(false);
      setNotification({ type: "error", msg: error.response.data.msg });
    }
  };

  const getStatusButton = (d) => {
    if (d.status === "pending") {
      return (
        <Button
          sx={{ mb: 1, mt: 0 }}
          fullWidth
          color="error"
          variant="contained"
          size="small"
          onClick={() => {
            setLoading(true);
            payOrder(d);
          }}
        >
          Pay Now
        </Button>
      );
    } else
      return (
        <Button
          sx={{ mb: 1, mt: 0 }}
          fullWidth
          variant="contained"
          size="small"
          color="success"
        >
          Paid
        </Button>
      );
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
          {data.map((d, index) => (
            <Grid item key={d._id} xs={12} sm={6} md={4} lg={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={photo}
                  alt="food picture"
                />
                <CardContent>
                  <Typography textAlign="center" variant="h6">
                    Order Date: {d.createdAt.slice(0, 10)}
                  </Typography>
                  <Typography color="red" textAlign="center" variant="h6">
                    Rs. {d.price}
                  </Typography>
                  <div style={{ margin: "20px" }}>
                    {seeMore[index] &&
                      JSON.parse(d.details).map((item, i) => (
                        <Typography
                          key={i}
                          color="green"
                          textAlign="left"
                          variant="body1"
                        >
                          {item.quantity} {item.name} Rs.{item.price} each
                        </Typography>
                      ))}
                  </div>

                  <Button
                    fullWidth
                    size="small"
                    onClick={() => {
                      const temp = [...seeMore];
                      temp[index] = !seeMore[index];
                      setSeeMore(temp);
                    }}
                  >
                    See {!seeMore[index] ? "More" : "Less"}
                  </Button>
                </CardContent>
                <CardActions>{getStatusButton(d)}</CardActions>
              </Card>
            </Grid>
          ))}
        </>
      )}
    </>
  );
};

export default OrderCard;
