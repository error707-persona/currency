import { BottomNavigation } from "@material-ui/core";
import React from "react";
import Banner from "./Banner/Banner";
import CoinsTable from "./CoinsTable";
import Footer from "./Footer";
import Alert from "./Alert";

const Homepage = () => {
  return (
    <>
      <Alert />
      <Banner />
      <CoinsTable />
      <Footer />
    </>
  );
};

export default Homepage;
