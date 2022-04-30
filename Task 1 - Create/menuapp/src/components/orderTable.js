import {
  Button,
  styled,
  TableFooter,
  CircularProgress,
  Typography,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import axios from "axios";
import Notification from "./notification";

import { useContext, useState } from "react";
import { Context } from "../context/Context";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
  [`&.${tableCellClasses.footer}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const BasicTable = (props) => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ type: "", msg: "" });
  const getTotalPrice = (foods) => {
    let sum = 0;
    foods.map((food, index) => {
      sum = sum + food.price * quantity[index];
      return null;
    });
    return sum;
  };

  const getOrderDetails = (foods) => {
    let foodArray = [];
    foods.map((food, index) => {
      const temp = {
        name: food.name,
        price: food.price,
        quantity: quantity[index],
      };
      foodArray.push(temp);
      return null;
    });
    return foodArray;
  };

  const handleSubmit = async (foods) => {
    let order = {
      price: getTotalPrice(foods),
      details: JSON.stringify(getOrderDetails(foods)),
    };

    setQuantity([]);
    setSelectedFood([]);
    localStorage.setItem("selectedFood", JSON.stringify([]));
    localStorage.setItem("quantity", JSON.stringify([]));
    setLoading(true);

    try {
      const token = localStorage.getItem("userToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      };
      await axios.post("/orders", order, config);
      setLoading(false);
      setNotification({
        type: "success",
        msg: "Order Placed Successfully Goto Orders for payment ",
      });
    } catch (error) {
      setLoading(false);
      setNotification({ type: "error", msg: error.response.data.msg });
    }
  };

  const { setSelectedFood, quantity, setQuantity } = useContext(Context);
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
          {!!props.data.length && (
            <>
              <Box sx={{ margin: "50px" }}>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <StyledTableRow>
                        <StyledTableCell align="left">S.N</StyledTableCell>
                        <StyledTableCell align="left">Item</StyledTableCell>
                        <StyledTableCell align="left">Price</StyledTableCell>
                        <StyledTableCell align="left">Quantity</StyledTableCell>
                        <StyledTableCell align="left">Total</StyledTableCell>
                      </StyledTableRow>
                    </TableHead>
                    <TableBody>
                      {props.data.map((food, index) => (
                        <StyledTableRow key={food.name}>
                          <StyledTableCell align="left">
                            {index + 1}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {food.name}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {food.price}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            <Button
                              sx={{ mr: 2 }}
                              color="success"
                              size="small"
                              variant="contained"
                              onClick={() => {
                                const temp = [...quantity];
                                if (temp[index] > 1) temp[index]--;
                                setQuantity(temp);
                                localStorage.setItem(
                                  "quantity",
                                  JSON.stringify(temp)
                                );
                              }}
                            >
                              -
                            </Button>
                            {quantity[index]}
                            <Button
                              color="success"
                              sx={{ ml: 2 }}
                              size="small"
                              variant="contained"
                              onClick={() => {
                                const temp = [...quantity];
                                temp[index]++;
                                setQuantity(temp);
                                localStorage.setItem(
                                  "quantity",
                                  JSON.stringify(temp)
                                );
                              }}
                            >
                              +
                            </Button>
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            Rs. {food.price * quantity[index]}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                    <TableFooter>
                      <StyledTableRow>
                        <StyledTableCell align="left"></StyledTableCell>
                        <StyledTableCell align="left">Total</StyledTableCell>
                        <StyledTableCell align="left"></StyledTableCell>
                        <StyledTableCell align="left"></StyledTableCell>
                        <StyledTableCell align="left">
                          Rs. {getTotalPrice(props.data)}
                        </StyledTableCell>
                      </StyledTableRow>
                    </TableFooter>
                  </Table>
                </TableContainer>
              </Box>
              <center>
                <Button
                  onClick={() => {
                    handleSubmit(props.data);
                  }}
                  sx={{ mb: 5 }}
                  color="success"
                  variant="contained"
                >
                  Confirm Order
                </Button>
              </center>
            </>
          )}
          {!props.data.length && (
            <Typography variant="h6" textAlign="center">
              No items selected
            </Typography>
          )}
        </>
      )}
    </>
  );
};

export default BasicTable;
