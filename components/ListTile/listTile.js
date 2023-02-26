import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropUp,
  MdOutlineStickyNote2,
} from "react-icons/md";
import JSXStyle from "styled-jsx/style";
import { decrementRating, incrementRating } from "../../api/links/linkService";
import styles from "../../styles/Services.module.css";

const ListTile = ({ link }) => {
  const copied = useRef();
  const [dropdown, setDropdown] = useState(false);
  const [rating, setRating] = useState(link.rating);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(link.linkValue);
    } catch (error) {
      console.log(error);
    }

    copied.current.classList.remove("opacity-0");
    copied.current.classList.add("opacity-100");
    setTimeout(() => {
      copied.current.classList.add("opacity-0");
      copied.current.classList.remove("opacity-100");
    }, 1000);
  };
  const openDropDown = () => {
    if (dropdown) {
      setDropdown(false);
    } else if (dropdown === false) {
      setDropdown(true);
    }
  };
  const [favourite, setfavourite] = useState(link.incremented);

  const handleRating = async () => {
    const data = { id: link.id, username: link.username };
    console.log(data);
    if (favourite) {
      setfavourite(false);
      setRating(rating - 1);
      decrementRating(data);
    } else {
      setfavourite(true);
      setRating(rating + 1);
      incrementRating(data);
    }
  };

  return (
    <div className="flex justify-center">
      <div
        className={`${
          styles.listTile
        } transition-all duration-700 ease-in-out w-[80vw] ${
          dropdown ? "h-60" : "h-24"
        } rounded-lg flex flex-col`}
      >
        <div className={` flex h-24 w-full relative rounded-lg `}>
          <div
            onClick={openDropDown}
            className={`${styles.readmore} absolute right-10 top-9 sm:right-7 `}
          >
            <p>
              {!dropdown ? (
                <MdOutlineArrowDropDown className="cursor-pointer" size={20} />
              ) : (
                <MdOutlineArrowDropUp className="cursor-pointer" size={20} />
              )}
            </p>
          </div>
          <div className="imageListTile h-24 w-24 flex justify-center items-center transition-all duration-500 ease-in-out hover:rotate-[360deg]">
            <Image
              className=" h-16 w-16 rounded-lg"
              height={100}
              width={100}
              src="/gitcat.png"
              alt="gitcat"
            ></Image>
          </div>
          <div className="LinkDescreption relative h-24 flex flex-col justify-center">
            <div className="heading relative">
              <h1 className="text-lg font-roboto font-semibold">
                {link.title}
              </h1>
              <div className="rating absolute top-[3px] flex left-20">
                <p className="font-thin pr-2 pt-1 text-xs">{rating / 100}K</p>
                {favourite ? (
                  <AiFillHeart className="cursor-pointer" size={20} onClick={handleRating} color="red" />
                ) : (
                  <AiFillHeart className="cursor-pointer"
                    onClick={handleRating}
                    size={20}
                    color="lightgrey"
                  />
                )}
              </div>
            </div>
            <div className="link flex">
              <Link
                className="text-blue-600 underline"
                target="_blank"
                href={link.linkValue}
              >
                {link.linkValue.substring(0, 30)}
              </Link>
              <div className="pl-3 relative sm:absolute sm:-right-10">
                <div
                  ref={copied}
                  className="box transition-opacity duration-1000 ease-in-out opacity-0 absolute -top-5 left-0 bg-black rounded-md px-1"
                >
                  <p className="text-white font-thin text-[10px]">Copied!</p>
                </div>
                <MdOutlineStickyNote2 onClick={copy} size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.descreption} px-4 text-justify `}>
          <h1 className="text-lg font-roboto font-semibold">{link.title}</h1>

          <p className="font-roboto py-1">
            {link.description ||
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit lo. Tempore debitis hic consectetur, adipisicing elit lo. Tempore debitis hic ut re consectetur, adipisicing elit lo. Tempore debitis hic ut re consectetur, adipisicing elit lo. Tempore debitis hic ut re consectetur, adipisicing elit lo. Tempore debitis hic ut re consectetur, adipisicing elit lo. Tempore debitis hic ut re consectetur, adipisicing elit lo. Tempore debitis hic ut re consectetur, adipisicing elit lo. Tempore debitis hic ut re consectetur, adipisicing elit lo. Tempore debitis hic ut re consectetur, adipisicing elit lo. Tempore debitis hic ut re consectetur, adipisicing elit lo. Tempore debitis hic ut re consectetur, adipisicing elit lo. Tempore debitis hic ut re consectetur, adipisicing elit lo. Tempore debitis hic ut re consectetur, adipisicing elit lo. Tempore debitis hic ut re consectetur, adipisicing elit lo. Tempore debitis hic ut re consectetur, adipisicing elit lo. Tempore debitis hic ut re consectetur, adipisicing elit lo. Tempore debitis hic ut re consectetur, adipisicing elit lo. Tempore debitis hic ut re consectetur, adipisicing elit lo. Tempore debitis hic ut re consectetur, adipisicing elit lo. Tempore debitis hic ut re consectetur, adipisicing elit lo. Tempore debitis hic ut re ut rerum voluptas commodi sit reiciendis possimus vero quis, voluptatibus praesentium cum recusandae autem, labore vitae illum quae! Rem!"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ListTile;
