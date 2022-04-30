import data from "../foodData";
import {
  Container,
  Grid,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import MenuCard from "../components/menuCard";
import BasicTable from "../components/orderTable";

import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { Context } from "../context/Context";
import Notification from "../components/notification";

const Menu = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ type: "", msg: "" });
  const { isLoggedIn } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate("/login");
    }
  }, [isLoggedIn, navigate]);

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
      )}
    </>
  );
};

export default Menu;
