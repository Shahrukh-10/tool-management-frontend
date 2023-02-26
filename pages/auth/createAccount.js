import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { createAccount } from "../../api/users/userService";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { SET_LOGIN, SET_USER } from "../../redux/reducer/login";

const CreateAccount = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const userData = { username, email, password };
      const res = await createAccount(userData);
      console.log(res);
      if (res.message === "Account already exists") {
        dispatch(SET_LOGIN(false));
        dispatch(SET_USER(null));
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
        clearTimeout();
        localStorage.setItem("user", null);
      } else {
        dispatch(SET_LOGIN(true));
        dispatch(SET_USER(res.user));
        router.push("/");
        localStorage.setItem("user", JSON.stringify(res.user));
      }
      setEmail("");
      setUsername("");
      setPassword("");
    } catch (error) {
      alert(error);
    }
  };

  const validate = (username,email,password) =>{
    if (username === undefined || email === undefined || password === undefined || username === null || email === null || password === null ) {
      setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
        clearTimeout();
        return false;
    }
    return true;
  }

  return (
    <div className={`${styles.loginPage} relative flex `}>
      {showPopup && (
        <div
          className={`absolute w-[80vw] h-10 top-24 transition-all duration-700 rounded-md bg-red-700 flex`}
        >
          <p className="pt-2 pl-3 font-semibold text-white ">
            User already exists .. !! , Try again ! || There is some error in username email or password
          </p>
        </div>
      )}
      <div className="absolute top-[30px] left-[30px]">
        <Link href="/account">
          <BsArrowLeftCircleFill color="teal" size={40} className="" />
        </Link>
      </div>
      <div className="accountPage">
        <Image width={350} height={350} alt="accountPage" src="/cacc.jpeg" />
      </div>
      <form className="w-full sm:w-2/3 lg:w-1/3">

      <div className={`${styles.loginInputField} space-y-6 pt-0`}>
        <input
          className={`rounded-lg h-11 w-4/5 font-roboto font-thin bg-blue-100 placeholder:text-sm placeholder:font-roboto pl-4 outline-none ${styles.loginInput}`}
          type="text"
          name="username"
          id="username"
          value={username}
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          className={`rounded-lg h-11 w-4/5 font-roboto font-thin bg-blue-100 placeholder:text-sm placeholder:font-roboto pl-4 outline-none ${styles.loginInput}`}
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className={`rounded-lg h-11 w-4/5 font-roboto font-thin bg-blue-100 placeholder:text-sm placeholder:font-roboto pl-4 outline-none ${styles.loginInput}`}
          type="password"
          name="pasword"
          value={password}
          id="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div onClick={handleSubmit} className="accountPageButton w-4/5 pt-3">
          <div
            className={`h-11 bg-teal-500 hover:bg-teal-600 rounded-md flex justify-center align-baseline ${styles.buttonAccPageDiv}`}
          >
            <button
              className={`${styles.buttonAccountPage} rounded-md tracking-[.8rem]`}
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};

export default CreateAccount;
