import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { getAllLinks, searchLink } from "../api/links/linkService";
import ListTile from "../components/ListTile/listTile";
import Spinner from "../components/spinner/spinner";
import styles from "../styles/Home.module.css";

const ExploreAll = () => {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    try {
      console.log(links);
      fetchAllLinks();
    } catch (error) {
      console.log("comm lost :" + error);
    }
  }, []);

  const [search, setSearch] = useState();
  const fetchAllLinks = async () => {
    const allLinks = await getAllLinks();
    setLinks(allLinks);
  };
  const searchResult = async () => {
    if (search !== undefined && search !== "" && search !== null) {
      setLinks([]);
      const res = await searchLink(search);
      if (res.links !== null) {
        setLinks(res.links);
      }
    } else {
      fetchAllLinks();
    }
  };

  return (
    <div className={`${styles.exploreAll} bg-black relative overflow-scroll`}>
      <div className="absolute top-[30px] left-[30px]">
        <Link href="/">
          <BsArrowLeftCircleFill color="teal" size={40} className="" />
        </Link>
      </div>
      {links.length === 0 && <div><Spinner /></div>}
      <div className="heading pt-9 pb-6 text-center tracking-widest font-bold text-2xl">
        <p className="text-white">All Tools</p>
      </div>
      {/* <SearchBar /> */}
      <div className="searchField flex justify-center space-x-3">
        <input
          className="w-4/5 rounded-md h-10 outline-none pl-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2"
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch color="white" size={28} onClick={searchResult} />
      </div>
      <div className={`${styles.heart} pt-3`}></div>
      <div className="allLinks px-5">
        {links.map((link) => {
          return (
            <ListTile
              key={link.id}
              link={link}
              id={link.id}
              username={link.username}
            />
          );
        })}

        {/* <ListTile />
      <ListTile />
      <ListTile />
      <ListTile />
      <ListTile />
      <ListTile />
      <ListTile /> */}
      </div>
    </div>
  );
};

export default ExploreAll;

function SearchBar() {
  return (
    <>
      <div className="searchField flex justify-center space-x-3">
        <input
          className="w-4/5 rounded-md h-10 outline-none pl-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2"
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(e) => {
            serSe;
          }}
        />
        <FaSearch color="white" size={28} onClick={search} />
      </div>
    </>
  );
}
