import React, { useEffect } from "react";

import { makeStyles, Avatar } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import { getUser, userinfo } from "../utils/auth";
import { CryptoState } from "./Cryptocontext";
import { IconChartLine, IconTrash } from "@tabler/icons";
import { deleteFromWatchlist, getWatchlist } from "../utils/watchlist";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  container: {
    width: 350,
    padding: 25,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    fontFamily: "monoscape",
  },
  profile: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    height: "92%",
    fontFamily: "consolas",
  },
  fullList: {
    width: "auto",
  },
  logout: {
    height: "8%",
    width: "100%",
    background: "#ff0066",
    color: "white",
  },
  watchlist: {
    flex: 1,
    display: "flex",
    width: "100%",
    backgroundColor: "grey",
    borderRadius: 10,
    padding: 15,
    paddingTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    overflowY: "scroll",
    coin: {
      border: "1px solid red",
      outline: "5px pink",
    },
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    right: false,
  });

  const [user, setUser] = React.useState({});
  const { setAlert, watchlist, setwatchlist, coins, symbol } = CryptoState();

  const logOut = () => {
    console.log("Logging out");
    sessionStorage.removeItem("user-info");
    localStorage.removeItem("crypton-auth-token");
    window.location.reload();
  };

  useEffect(() => {
    setUser(JSON.parse(userinfo()));
  }, [state, logOut]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleDelete = (coinId) => {
    deleteFromWatchlist(coinId, Alert);
    setwatchlist(watchlist.filter((coin)=>coin!==coinId))
  };

 

  const handleCurrency = (e) => {
    navigate(`/coins/${e}`);
    window.location.reload();
  };

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Avatar
            onClick={toggleDrawer(anchor, true)}
            style={{
              height: 38,
              width: 38,
              marginLeft: 15,
              cursor: "ponter",
              backgroundColor: "EEBC1D",
            }}
          ></Avatar>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {/* {list(anchor)}
             */}
            <div className={classes.container}>
              <div className={classes.profile}>
                <Avatar
                  onClick={toggleDrawer(anchor, true)}
                  style={{
                    height: 38,
                    width: 38,
                    marginLeft: 15,
                    font: "consolas",
                    cursor: "ponter",
                    backgroundColor: "EEBC1D",
                  }}
                >
                  {/* <span>
                  style={{
                      width: "100%",
                      fontsize: 25,
                      textAlign: "center",
                      fontWeight: "bolder",
                      wordWrap: "break-word",
                  }}
              </span> */}
                </Avatar>
                <div className={classes.watchlist}>
                  <span style={{ fontSize: 15, textShadow: "0 0 5px black" }}>
                    Watchlist
                  </span>
                  {user &&
                    watchlist &&
                    watchlist.map((e) => (
                      <div
                        style={{
                          display: "flex",
                          background: "#4265f5",
                          width: "100%",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "50px",
                          borderRadius: "5rem",
                          cursor: "pointer",
                        }}
                      >
                        <div 
                         style={{
                          display: "flex",
                          background: "#4265f5",
                          width: "100%",
                          borderRadius:"5rem",
                          alignItems: "center",
                          height: "50px",}}
                        onClick={() => handleCurrency(e)}>
                          <div
                            style={{ marginRight: "15px", marginLeft: "10px" }}
                          >
                            <IconChartLine />
                          </div>
                          <span style={{ fontSize: 15 }}>{e}</span>
                        </div>
                        <button
                          style={{
                            marginLeft: "auto",
                            marginRight: "10px",
                            color: "white",
                            background: "#4265f5",
                            outline: "none",
                            border: "none",
                          }}
                          onClick={() => handleDelete(e)}
                        >
                          <IconTrash />
                        </button>
                      </div>
                    ))}
                </div>
                <div style={{ paddingBottom: "50px" }}>
                  {user ? user.name : "Unknown User"}
                </div>
              </div>

              <Button
                variant="contained"
                className={classes.logout}
                onClick={logOut}
              >
                Logout
              </Button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
