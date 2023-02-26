import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getUserLinks } from "../api/links/linkService";
import ListTile from "../components/ListTile/listTile";
import CardLoginRequired from "../components/loginRequired/cardLoginRequired";
import Search from "../components/search/search";
import Spinner from "../components/spinner/spinner";
import styles from "../styles/Home.module.css";

const Links = () => {
  const [userLinks, setUserLinks] = useState([]);
  const user = useSelector((state) => state.login.user);
  const login = useSelector((state) => state.login.login);
  const router = useRouter();
  useEffect(() => {
    const data = { id: user.id };
    const userLinks = async () => {
      const links = await getUserLinks(data);
      console.log(links);
      if (links.msg === "invalid_user") {
        router.push("/auth/login");
      } else {
        setUserLinks(links.link);
      }
    };
    userLinks();
  }, []);

  return (
    <div className="bg-black w-[100vw] h-[100vh] flex justify-center items-center">
      {!login && <CardLoginRequired />}
      {userLinks.length === 0 && (
        <div className="absolute  text-white z-10 ">
        <Spinner />
          <p>You have not added any links yet !!</p>
          <Link href="addLink" className="text-center">add Link</Link>
        </div>
      )}
      {login && (
        <div
          className={`${styles.userLinks} overflow-scroll absolute flex flex-col align-middle`}
        >
          <div className="absolute top-[30px] left-[30px]">
            <Link href="/">
              <BsArrowLeftCircleFill color="teal" size={40} className="" />
            </Link>
          </div>
          <div className="heading pt-9 pb-6 text-center tracking-widest font-bold text-2xl">
            <p className="text-white">Links</p>
          </div>
          <Link href="/addLink" className="absolute top-[30px] right-[26px]">
            <button className="text-white px-3 py-2 bg-teal-700 rounded-lg">Add Link</button>
          </Link>
          <Search />
          <div className="userAddedLinks px-5 pt-3 flex flex-col justify-center">
            {userLinks.map((link) => {
              return <ListTile key={link.id} link={link} id={link.id} username={link.username} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default Links;
