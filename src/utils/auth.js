import axios from "axios";

const getToken = () => localStorage.getItem("crypton-auth-token");

const putToken = (token) => localStorage.setItem("crypton-auth-token", token);

const getUser = () => {
  const token = getToken();
  let user = null;

  if (token) return null;

  axios
    .post("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      user = res.data;
    });

  console.log(user);
  return user;
};

const signup = (username, email, password) =>
  axios
    .post("http://localhost:5000/users/signup", {
      name: username,
      email: email,
      password: password,
    })
    .then((res) => {
      putToken(res.data.token);

      // console.log(res);

      // console.log(`\nEmail: ${res.email}\nToken : ${res.token}`);
    })
    .catch((err) => {
      console.log(err.response);
    });

const login = (email, password) =>
  axios
    .post("http://localhost:5000/users/signin", {
      email: email,
      password: password,
    })
    .then((res) => {
      putToken(res.data.token);

      // console.log(res);

      // console.log(`\nEmail: ${res.data.email}\nToken : ${res.data.token}`);
    })
    .catch((err) => {
      console.log(err.response);
    });

export { signup, login, getUser, getToken };
