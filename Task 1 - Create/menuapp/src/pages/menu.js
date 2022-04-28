import data from "../foodData";
import { Container, Grid } from "@mui/material";
import MenuCard from "../components/menuCard";
const Menu = () => {
  return (
    <Container>
      <Grid sx={{ mt: 1, mb: 5 }} container spacing={4}>
        <MenuCard data={data} />
      </Grid>
    </Container>
  );
};

export default Menu;
