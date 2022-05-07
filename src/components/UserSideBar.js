import React, { useCallback, useEffect } from "react";

import { makeStyles, Avatar } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import auth, { getUser, userinfo } from "../utils/auth";

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

  getUser();

  const user = userinfo();
  const data = JSON.parse(user);
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

  const logOut = useCallback(() => {
    console.log("Logging out");
    sessionStorage.removeItem("user-info");
    localStorage.removeItem("crypton-auth-token");
  }, []);

  useEffect(() => {}, [logOut]);

  //   const list = (anchor) => (
  //     <div
  //       className={clsx(classes.list, {
  //         [classes.fullList]: anchor === 'top' || anchor === 'bottom',
  //       })}
  //       role="presentation"
  //       onClick={toggleDrawer(anchor, false)}
  //       onKeyDown={toggleDrawer(anchor, false)}
  //     >
  //       <List>
  //         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //           <ListItem button key={text}>
  //             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItem>
  //         ))}
  //       </List>
  //       <Divider />
  //       <List>
  //         {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //           <ListItem button key={text}>
  //             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItem>
  //         ))}
  //       </List>
  //     </div>
  //   );

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
                    data.watchlist &&
                    data.watchlist.map((e) => (
                      <span
                        style={{ fontSize: 15, textShadow: "0 0 5px black" }}
                      >
                        {e}
                      </span>
                    ))}
                </div>
                <div style={{ paddingBottom: "50px" }}>
                  {user ? data.name : "Unknown User"}
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
