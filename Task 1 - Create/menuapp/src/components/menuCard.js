import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

import { useContext } from "react";
import { Context } from "../context/Context";

const MenuCard = ({ data }) => {
  const { selectedFood, setSelectedFood, quantity, setQuantity } =
    useContext(Context);
  return (
    <>
      {data.map((d) => (
        <Grid item key={d.name} xs={12} sm={6} md={4} lg={4}>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image={d.image}
              alt="food picture"
            />
            <CardContent>
              <Typography textAlign="center" variant="h5">
                {d.name}
              </Typography>
              <Typography color="red" textAlign="center" variant="h6">
                Rs. {d.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                sx={{ m: 1 }}
                color="success"
                variant="contained"
                size="small"
                onClick={() => {
                  if (!selectedFood.includes(d)) {
                    setSelectedFood([...selectedFood, d]);
                    setQuantity([...quantity, 1]);
                    localStorage.setItem(
                      "selectedFood",
                      JSON.stringify([...selectedFood, d])
                    );
                    localStorage.setItem(
                      "quantity",
                      JSON.stringify([...quantity, 1])
                    );
                  }
                  window.scrollTo({
                    left: 0,
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                }}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default MenuCard;
