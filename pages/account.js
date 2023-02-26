import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import {BsArrowLeftCircleFill} from "react-icons/bs";

function Account() {
  return (
    <div className={`${styles.accountPage} text-gray-400 font-roboto relative`}>
    <div className="absolute top-[30px] left-[30px]">
        <Link href="/">
          <BsArrowLeftCircleFill color="teal" size={40} className="" />
        </Link>
      </div>
      <div className="accountPage pt-10">
        <Image
          width={500}
          height={500}
          alt="accountPage"
          src="/blackAuth.png"
        />
      </div>
      <div className={styles.descreptionAccountPage}>
        <div className="heading flex justify-center text-3xl px-12 text-center font-extrabold">
          <h1>Get Additional Features</h1>
        </div>
        <div className="descreption px-12 text-center pt-10">
          <p className="font-thin">
            Get All the latest feature available to logged in users and other
            benefits
          </p>
        </div>
      </div>
      <div className="accountPageButton pt-10">
        <div className="buttons flex justify-center w-[70vw] space-x-8">
          <Link href="/auth/login">
            <div
              className={`w-32 h-12 bg-green-400 hover:bg-green-600 rounded-md flex justify-center align-baseline ${styles.buttonAccPageDiv}`}
            >
              <button className={`${styles.buttonAccountPage} rounded-md`}>
                Login
              </button>
            </div>
          </Link>
          <Link href="auth/createAccount">
            <div
              className={`w-32 h-12 bg-green-400 hover:bg-green-600 rounded-md flex justify-center align-middle ${styles.buttonAccPageDiv}`}
            >
              <button className={`${styles.buttonAccountPage} rounded-md`}>
                SignUp
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Account;
