import Head from "next/head";
import Image from "next/image";
import { Content, Inter } from "@next/font/google";
import { ContentPage } from "../components/Content/contentPage";
import Block from "../components/Blocks/block";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOGIN, SET_USER } from "../redux/reducer/login";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>OneForAll.com</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main bg-black">
        <ContentPage />
        <Block />
      </div>
    </>
  );
}
