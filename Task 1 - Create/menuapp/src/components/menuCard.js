import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const MenuCard = ({ data }) => {
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
              >
                Order Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default MenuCard;
