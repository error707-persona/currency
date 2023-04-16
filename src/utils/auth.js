import axios from "axios";

const getToken = () => localStorage.getItem("crypton-auth-token");

const putToken = (token) => localStorage.setItem("crypton-auth-token", token);

const getUser = () => {
  const token = getToken();
  let user = null;

  if (!token) return null;

  axios
    .get("http://localhost:5001/users/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      user = res.data;
      console.log("User", user);
      userinfoset(user);
    })
    .catch((err) => {
      console.log("Get User Error", err.message);
    });

  console.log("User", user);
  return user;
};

const signup = (username, email, password, handleAlert) =>
  axios
    .post("http://localhost:5001/users/signup", {
      name: username,
      email: email,
      password: password,
    })
    .then((res) => {
      putToken(res.data.token);

      console.log(res);

      handleAlert({
        open: true,
        type: "success",
        message: "Account Created",
      });

      // console.log(`\nEmail: ${res.email}\nToken : ${res.token}`);
    })
    .catch((err) => {
      console.log(err.response);
      handleAlert({
        open: true,
        type: "error",
        message: err.response.data.message,
      });
    });

const userinfoset = (user) =>
  sessionStorage.setItem("user-info", JSON.stringify(user));

const userinfo = () => sessionStorage.getItem("user-info");

const login = (email, password, handleAlert) =>
  axios
    .post("http://localhost:5001/users/signin", {
      email: email,
      password: password,
    })
    .then((res) => {
      putToken(res.data.token);

      userinfoset(res.data);
      
      handleAlert({
        open: true,
        type: "success",
        message: `Welcome ${res.data.name}`,
      });

      setTimeout(() => window.location.reload(), 850);
      // console.log(`\nEmail: ${res.data.email}\nToken : ${res.data.token}`);
    })
    .catch((err) => {
      console.log(err.response);
      handleAlert({
        open: true,
        type: "error",
        message: err.response.data.message,
      });
    });

export { signup, login, getUser, getToken, userinfo };
