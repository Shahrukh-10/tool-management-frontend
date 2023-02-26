import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { login, loginUser } from "../../api/users/userService";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOGIN, SET_USER } from "../../redux/reducer/login";
import { useRouter } from "next/router";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setshowPopup] = useState(false)
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSubmit = async () => {
    try {
      const userData = { username, password };
        const res = await loginUser(userData);
        if (res.message === "Logged In") {
          dispatch(SET_LOGIN(true))
          dispatch(SET_USER(res.user));
          localStorage.setItem("user",JSON.stringify(res.user))
          router.push("/")
        }else{
          dispatch(SET_LOGIN(false))
          dispatch(SET_USER(null))
          localStorage.setItem("user",null)
          setshowPopup(true);
          setTimeout(() => {
            setshowPopup(false)
          }, 3000);
        }
        
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className={`${styles.loginPage} relative`}>
     {showPopup && (
        <div
          className={`absolute w-[80vw] h-auto pb-2 top-24 transition-all duration-700 rounded-md bg-red-700 flex`}
        >
          <p className="pt-2 pl-3 font-semibold text-white ">
            Invalid credentials .. !! , Try again ! <Link className="text-blue-200 underline italic" href="/auth/createAccount">
            Create Account -{">"}
            </Link>
          </p>
        </div>
      )}
      <div className="absolute top-[30px] left-[30px]">
        <Link href="/account">
          <BsArrowLeftCircleFill color="teal" size={40} className="" />
        </Link>
      </div>
      <div className="accountPage">
        <Image width={400} height={400} alt="accountPage" src="/login.jpg" />
      </div>
      <div className={`${styles.loginInputField} space-y-6 pt-5`}>
        <input
          className={`rounded-lg h-11 w-4/5 font-roboto font-thin bg-blue-100 placeholder:text-sm placeholder:font-roboto pl-4 outline-none ${styles.loginInput}`}
          type="text"
          name="username"
          id="username"
          value={username}
          placeholder="username or email"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          className={`rounded-lg h-11 w-4/5 font-roboto font-thin bg-blue-100 placeholder:text-sm placeholder:font-roboto pl-4 outline-none ${styles.loginInput}`}
          type="password"
          name="pasword"
          id="password"
          value={password}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="accountPageButton w-4/5 pt-3 relative">
          <Link
            href="/auth/forgotPassword"
            className="absolute -bottom-6 right-0"
          >
            <p className="text-blue-500 ">Forgot Password ?</p>
          </Link>
          <div
            onClick={handleSubmit}
            className={`h-11 bg-teal-500 hover:bg-teal-600 rounded-md flex justify-center align-baseline ${styles.buttonAccPageDiv}`}
          >
            <button
              className={`${styles.buttonAccountPage} tracking-[.8rem] rounded-md`}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
