import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { updateProfile } from "../api/users/userService";
import { SET_USER,SET_LOGIN } from "../redux/reducer/login";
import { FaDoorOpen } from "react-icons/fa";
const Profile = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const user = useSelector((state) => state.login.user);
  const [message, setmessage] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (firstName.length !== 0 || lastName.length !== 0) {
        const id = user.id;
        const data = { firstName, lastName, id };
        const userdata = await updateProfile(data);
        localStorage.setItem("user", JSON.stringify(userdata));
        dispatch(SET_USER(userdata));
        setFirstname("");
        setLastname("");
        setmessage("Profile updated Successfully .. !");
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const viewprofile = () => {
    const { id, firstName, lastName, username } = user;
    localStorage.clear();
    dispatch(SET_USER({}));
    dispatch(SET_LOGIN(false))
    router.push("/")
  };

  return (
    <div className={`${styles.loginPage} relative`}>
      {showPopup && (
        <div
          className={`absolute w-[80vw] h-auto top-24 transition-all duration-700 rounded-md bg-green-700 flex`}
        >
          <p className="py-2 pl-3 font-semibold text-white ">{message}</p>
        </div>
      )}
      <div className="absolute top-[30px] left-[30px]">
        <Link href="/">
          <BsArrowLeftCircleFill color="teal" size={40} className="" />
        </Link>
      </div>
      <div className="heading pt-9 pb-6 text-center tracking-widest font-bold text-2xl">
        <p className="text-white">Update Profile</p>
      </div>
      <div className="accountPage pt-5 pb-14">
        <Image
          className="rounded-lg"
          width={350}
          height={350}
          src="/updateprofile.png"
          alt="updateprofile"
        />
      </div>
      <form className="w-full sm:w-2/3 lg:w-1/3 ">
        <div className={`${styles.loginInputField} space-y-6 pt-0`}>
          <input
            className={`rounded-lg h-11 w-4/5 font-roboto font-thin bg-blue-100 placeholder:text-sm placeholder:font-roboto pl-4 outline-none ${styles.loginInput}`}
            type="text"
            name="firstname"
            id="firstname"
            required
            value={firstName}
            placeholder="First name"
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
          <input
            className={`rounded-lg h-11 w-4/5 font-roboto font-thin bg-blue-100 placeholder:text-sm placeholder:font-roboto pl-4 outline-none ${styles.loginInput}`}
            type="text"
            name="lastname"
            id="lastname"
            required
            value={lastName}
            placeholder="Last name"
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
          <div onClick={handleSubmit} className="accountPageButton w-4/5 pt-3">
            <div
              className={`h-11 bg-teal-500 hover:bg-red-600 rounded-md flex justify-center align-baseline ${styles.buttonAccPageDiv}`}
            >
              <button
                className={`${styles.buttonAccountPage} rounded-md tracking-[.8rem]`}
              >
                Update
              </button>
            </div>
          </div>
      <div onClick={viewprofile} className="accountPageButton w-4/5 pt-12 ">
        <div
          className={`h-11 bg-orange-700 hover:bg-red-600 rounded-md flex justify-center align-baseline ${styles.buttonAccPageDiv}`}
        >
          <button
            className={`${styles.buttonAccountPage} rounded-md tracking-[.8rem]`}
          >
            Logout
          </button>
        </div>
      </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
