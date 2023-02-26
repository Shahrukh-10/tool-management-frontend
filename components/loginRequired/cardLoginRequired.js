import styles from "../../styles/Home.module.css";
import Link from "next/link";

function CardLoginRequired() {
  return (
    <>
      <div
        className={`${styles.cardLoginFirst} flex justify-center items-center flex-col p-10 rounded-3xl`}
      >
        <div className="heading">
          <p className="font-roboto text-2xl tracking-widest">Login !</p>
        </div>
        <div className="descreptionLoginRequired pt-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            suscipit fugiat incidunt
          </p>
        </div>
        <div className="accountPageButton pt-10">
          <div className="buttons flex justify-center w-[70vw] space-x-8">
            <Link href="/auth/login">
              <div
                className={`w-28 h-12 bg-green-400 hover:bg-green-600 rounded-md flex justify-center align-baseline ${styles.buttonAccPageDiv}`}
              >
                <button className={`${styles.buttonAccountPage} rounded-md`}>
                  Login
                </button>
              </div>
            </Link>
            <Link href="auth/createAccount">
              <div
                className={`w-28 h-12 bg-green-400 hover:bg-green-600 rounded-md flex justify-center align-middle ${styles.buttonAccPageDiv}`}
              >
                <button className={`${styles.buttonAccountPage} rounded-md`}>
                  SignUp
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardLoginRequired;
