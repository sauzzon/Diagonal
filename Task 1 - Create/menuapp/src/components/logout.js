import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../context/Context";

const Logout = () => {
  const { setIsLoggedIn } = useContext(Context);
  const handleClick = () => {
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
  };
  return (
    <Button
      size="small"
      sx={{ m: 1 }}
      variant="outlined"
      color="inherit"
      onClick={handleClick}
    >
      Logout
    </Button>
  );
};

export default Logout;
