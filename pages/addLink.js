import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { createAccount } from "../api/users/userService";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { SET_LOGIN, SET_USER } from "../redux/reducer/login";
import { addLink } from "../api/links/linkService";

const AddLink = () => {
  const [title, setTitle] = useState("");
  const [descreption, setDescreption] = useState("");
  const [linkValue, setlinkValue] = useState("");
  const user = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user === null) {
        router.push("/auth/login");
      }
      const username = user.username;
      const userData = { title, descreption, linkValue, username };

      console.log(userData);
      const res = await addLink(userData);
      if (res.message === "Added Link Successfully.") {
        setTitle("");
        setDescreption("");
        setlinkValue("");
        router.push("/links");
      } else if (
        title.length === 0 ||
        descreption.length === 0 ||
        linkValue.length === 0
      ) {
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      } else {
        console.log({ res });
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
        clearTimeout();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`${styles.loginPage} relative`}>
      {showPopup && (
        <div
          className={`absolute w-[80vw] h-auto top-24 transition-all duration-700 rounded-md bg-red-700 flex`}
        >
          <p className="py-2 pl-3 font-semibold text-white ">
            {showPopup &&
            (title.length === 0 ||
              descreption.length === 0 ||
              linkValue.length === 0)
              ? "One of the fields is empty , Please fill."
              : "This link is already added by some one please add diffirent link"}
          </p>
        </div>
      )}
      <div className="absolute top-[30px] left-[30px]">
        <Link href="/links">
          <BsArrowLeftCircleFill color="teal" size={40} className="" />
        </Link>
      </div>
      <div className="heading pt-9 pb-6 text-center tracking-widest font-bold text-2xl">
        <p className="text-white">Add Link</p>
      </div>
      <div className="desc text-white text-center px-7 pt-7">
        <p className="font-roboto  font-semibold">
          Add links that you want others to use and help them by making their
          life easier :)
        </p>
      </div>
      <form className="w-full pt-20">
        <div className={`${styles.loginInputField} space-y-6 pt-0`}>
          <input
            className={`rounded-lg h-11 w-4/5 font-roboto font-thin bg-blue-100 placeholder:text-sm placeholder:font-roboto pl-4 outline-none ${styles.loginInput}`}
            type="text"
            name="title"
            id="title"
            required
            value={title}
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            className={`rounded-lg h-11 w-4/5 font-roboto font-thin bg-blue-100 placeholder:text-sm placeholder:font-roboto pl-4 outline-none ${styles.loginInput}`}
            type="text"
            name="descreption"
            id="descreption"
            required
            value={descreption}
            placeholder="Descreption"
            onChange={(e) => {
              setDescreption(e.target.value);
            }}
          />
          <input
            className={`rounded-lg h-11 w-4/5 font-roboto font-thin bg-blue-100 placeholder:text-sm placeholder:font-roboto pl-4 outline-none ${styles.loginInput}`}
            type="text"
            name="linkValue"
            value={linkValue}
            id="linkValue"
            required
            placeholder="Link URL"
            onChange={(e) => {
              setlinkValue(e.target.value);
            }}
          />
          <div onClick={handleSubmit} className="accountPageButton w-4/5 pt-3">
            <div
              className={`h-11 bg-teal-500 hover:bg-teal-600 rounded-md flex justify-center align-baseline ${styles.buttonAccPageDiv}`}
            >
              <button
                type="submit"
                className={`${styles.buttonAccountPage} rounded-md tracking-[.8rem]`}
              >
                Add Link
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddLink;
