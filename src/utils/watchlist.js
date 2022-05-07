import { getUser, userinfo } from "./auth";
import axios from "axios";

export function addToWatchlist(coinId, handleAlert) {
  const user = JSON.parse(userinfo());

  if (!user) {
    handleAlert({ open: true, type: "warning", message: "No logged in user" });
    return;
  }
  console.log("User Email", user);

  console.log("Coin Id", coinId);

  axios
    .post("http://localhost:5001/watchlist/add", {
      email: user.email,
      coinId: coinId,
    })
    .then((res) => {
      handleAlert({
        open: true,
        type: "success",
        message: "Successfully added to watchlist",
      });
      getUser();
    })
    .catch((err) => {
      console.log(err);
      handleAlert({
        open: true,
        type: "error",
        message: err.message,
      });
    });
}
