import React from "react";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import UserSidebar from "../components/UserSideBar";
import { makeStyles } from "@material-ui/styles";
import { createTheme, Avatar } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import AuthModal from "./AuthModal";
import { CryptoState } from "./Cryptocontext";
import SelectButton from "./SelectButton";
import auth, { userinfo } from "../utils/auth"

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    backgroundColor: "#442ACE",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    fontFamily: "Alegreya Sans SC",
  },
  AppBar: {
    backgroundColor: "#442ACE",
  },
}));
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#442ACE",
    },
    type: "dark",
  },
});
const user = userinfo();
const data = JSON.parse(user);
const Header = () => {
  const { currency, setCurrency } = CryptoState();
  console.log(currency);
  const classes = useStyles();

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar className={classes.AppBar}>
        <Container color="transparent" position="static">
          <Toolbar>
            <Avatar src="company2.png" />
            <Typography className={classes.title} onClick={() => navigate("/")}>
              Crypton
            </Typography>

            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginleft: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
            {!(data)?
            <AuthModal />: <UserSidebar/>
            }
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
