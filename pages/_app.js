import { Provider, useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer/footer";
import { Navbar } from "../components/Navbar/navbar";
import "../styles/globals.css";
import reduxStore from "../redux/store";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={reduxStore}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
