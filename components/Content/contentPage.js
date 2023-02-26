import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import styles from "../../styles/Home.module.css"

export const ContentPage = () => {
  const str = "Welcome to One4ALL";
  const arr = str.split("");
  const [rand, setrand] = useState(0);
  useEffect(() => {
    // create interval
    const interval = setInterval(
      // set number every 5s
      () => setrand(Math.floor(Math.random() * arr.length)),
      1000
    );

    // clean up interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, [rand]);

  return (
    <div className="heroContent text-gray-400">
      <div className="content pt-20  flex flex-col justify-start items-center align-middle  ">
        <div className="contentImage flex justify-center flex-2 ">
          {/* <Image height={100} width={300} src="/alltask.svg"></Image> */}
          <h1 className="text-6xl flex flex-wrap justify-center px-3 font-bold text-white text-center">
            {/* Welcome to One4ALL */}
            {arr.map((char, index) => (
              <p
                key={index}
                className={` ${
                  rand === index ? styles.animateSpin : ""
                } ${index===6 || index===9 ? "pr-3" : ""}`}
              >
                {char}
              </p>
            ))}
          </h1>
        </div>
        <div className="mt-3 my-3 flex justify-start align-middle items-center descreption h-[211px] py-14 text-gray-400 font-roboto text-left font-bold text-[22px] px-5">
          <div>
            <Typewriter
              className="text-left"
              options={{
                strings: [
                  "Hello my name is Shahrukh :)fekfekfefef ",
                  "This is my new site ..",
                  "Main aim of this site is to help other in doing daily task of finding tools make easier .......",
                ],
                cursor: "_",
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="exploreNow py-20">
        <Link href="/exploreAll">

          <button className="exploreNowButton bg-red-500 px-8 py-4 text-white font-roboto rounded-full font-semibold">
            Explore Now
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};
