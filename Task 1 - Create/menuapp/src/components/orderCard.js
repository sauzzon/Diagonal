import { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import photo from "../utils/images/order.jpg";

const OrderCard = ({ data }) => {
  const [seeMore, setSeeMore] = useState(new Array(data.length).fill(false));
  const getStatusButton = (status) => {
    if (status === "pending") {
      return (
        <Button
          sx={{ mb: 1, mt: 0 }}
          fullWidth
          color="error"
          variant="contained"
          size="small"
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
      {data.map((d) => (
        <Grid item key={d.id} xs={12} sm={6} md={4} lg={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={photo}
              alt="food picture"
            />
            <CardContent>
              <Typography textAlign="center" variant="h6">
                Order Date: {d.createdAt}
              </Typography>
              <Typography color="red" textAlign="center" variant="h6">
                Rs. {d.price}
              </Typography>
              <div style={{ margin: "20px" }}>
                {seeMore[d.id] &&
                  d.details.map((item) => (
                    <Typography color="green" textAlign="left" variant="body1">
                      {item.quantity} {item.name} Rs.{item.price} each
                    </Typography>
                  ))}
              </div>

              <Button
                fullWidth
                size="small"
                onClick={() => {
                  const temp = [...seeMore];
                  temp[d.id] = !seeMore[d.id];
                  setSeeMore(temp);
                }}
              >
                See {!seeMore[d.id] ? "More" : "Less"}
              </Button>
            </CardContent>
            <CardActions>{getStatusButton(d.status)}</CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default OrderCard;
