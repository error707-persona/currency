import React, { useEffect } from "react";

import { makeStyles, Avatar } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import { getUser, userinfo } from "../utils/auth";

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
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const [user, setUser] = React.useState({});

  useEffect(() => {
    setUser(getUser());
    console.log(user);
  }, [state, logOut]);

  console.log(user);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logOut = () => {
    console.log("Logging out");
    sessionStorage.removeItem("user-info");
    localStorage.removeItem("crypton-auth-token");
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
                    user.watchlist &&
                    user.watchlist.map((e) => (
                      <span
                        style={{ fontSize: 15, textShadow: "0 0 5px black" }}
                      >
                        {e}
                      </span>
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