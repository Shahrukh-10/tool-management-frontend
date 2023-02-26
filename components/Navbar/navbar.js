import { useEffect, useRef, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";
import { RiHome3Line } from "react-icons/ri";
import { SiDependabot } from "react-icons/si";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsLink45Deg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOGIN, SET_USER } from "../../redux/reducer/login";

export const Navbar = () => {
  const login = useSelector((state) => state.login.login);
  const user = useSelector((state) => state.login.user);
  const navMenu = useRef();
  const router = useRouter();
  const { pathname } = router;
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const userData = localStorage.getItem("user");
      if (userData) {
        dispatch(SET_USER(JSON.parse(userData)));
        dispatch(SET_LOGIN(true));
      }
      console.log(login);
    } catch (error) {
      localStorage.clear();
      dispatch(SET_LOGIN(false));
      console.log({ error });
    }
  }, [dispatch]);

  const handleMenu = () => {
    if (navMenu.current.classList.contains("hidden")) {
      navMenu.current.classList.remove("hidden");
    } else if (!navMenu.current.classList.contains("hidden")) {
      navMenu.current.classList.add("hidden");
    }
  };

  return (
    <div
      className={`container min-w-full bg-black text-white relative  ${
        pathname === "/account" ||
        pathname === "/exploreAll" ||
        pathname === "/about" ||
        pathname === "/links" ||
        pathname === "/nandu" ||
        pathname === "/ws" ||
        pathname === "/addLink" ||
        pathname === "/profile" ||
        pathname === "/auth/createAccount" ||
        pathname === "/auth/login"
          ? "hidden"
          : ""
      }`}
    >
      <nav className="navbar pt-5 pb-3 bg-red-500 flex justify-between  px-6 rounded-sm">
        <div className="heading font-bold">One4All</div>
        <div className="menuIcons hidden pr-28 sm:block ">
          <ul className="flex items-start space-x-4">
            <Link href="/" onClick={handleMenu}>
              <ListMenuComponent
                icon={<RiHome3Line size={16} />}
                name={"Home"}
              />
            </Link>
            <Link href="/about" onClick={handleMenu}>
              <ListMenuComponent
                icon={<SiDependabot size={16} />}
                name={"About"}
              />
            </Link>
            <Link href="/contact" onClick={handleMenu}>
              <ListMenuComponent
                icon={<RiContactsLine size={16} />}
                name={"Contact"}
              />
            </Link>
            {login && (
              <Link href="/links" onClick={handleMenu}>
                <ListMenuComponent
                  icon={<BsLink45Deg size={16} />}
                  name={"Links"}
                />
              </Link>
            )}
            <div className="profile absolute right-4">
              <div className="profileIcon flex px-2  space-x-1 hover:bg-slate-700 outline-none rounded-lg justify-center ">
                <FaUserTie size={18} />
                <span className="text-[18px] pl-1">
                  {login ? (
                    <Link href="/profile">{user.username}</Link>
                  ) : (
                    <Link href="/account">Account</Link>
                  )}
                </span>
              </div>
            </div>
          </ul>
        </div>
        <div className="menuBar sm:hidden">
          <div className="menuIcon">
            <RiMenu3Fill onClick={handleMenu} color="white" size={18} />
          </div>

          <div
            ref={navMenu}
            className="hidden z-10 fullScreen h-[100vh] w-52 bg-black absolute top-0 right-0 transform transition-all duration-1000 ease-linear opacity-100 "
          >
            <div className="navMenu pt-5 flex flex-col relative">
              <div className="menuCloseIcon absolute top-5 right-5">
                <AiOutlineClose onClick={handleMenu} size={18} />
              </div>
              <div className="profile">
                <div className="profileIcon flex pl-4 pb-2 space-x-5 ">
                  <FaUserTie size={18} />
                  <span className="text-[18px] pl-1 border-4 border-black">
                    {login ? (
                      <Link href="/profile">{user.username}</Link>
                    ) : (
                      <Link href="/account">Account</Link>
                    )}
                  </span>
                </div>
              </div>
              <hr />
              <div className="menuIcons pt-6 px-2">
                <ul className="space-y-2">
                  <Link href="/" onClick={handleMenu}>
                    <ListMenuComponent
                      icon={<RiHome3Line size={16} />}
                      name={"Home"}
                    />
                  </Link>
                  <Link href="/about" onClick={handleMenu}>
                    <ListMenuComponent
                      icon={<SiDependabot size={16} />}
                      name={"About"}
                    />
                  </Link>
                  <Link href="/contact" onClick={handleMenu}>
                    <ListMenuComponent
                      icon={<RiContactsLine size={16} />}
                      name={"Contact"}
                    />
                  </Link>
                  {login && (
                    <Link href="/links" onClick={handleMenu}>
                      <ListMenuComponent
                        icon={<BsLink45Deg size={16} />}
                        name={"Links"}
                      />
                    </Link>
                  )}
                </ul>
              </div>
            </div>
            <div className="copyRightBottom absolute bottom-5 w-full">
              <p className="text-center">&copy; One4All</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

const ListMenuComponent = ({ name, icon }) => {
  return (
    <li className="flex align-middle justify-between hover:bg-slate-700 outline-none  px-2 py-1 sm:py-0 sm:space-x-3 rounded-[10px]">
      <span className="font-thin text-lg font-roboto">{name} </span>
      <div className="pt-1">{icon}</div>
    </li>
  );
};
