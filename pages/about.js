import Link from "next/link";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaUser } from "react-icons/fa";
import LinkBlock from "../components/linkBlock/linkBlock";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <div className="aboutPage w-[100vw] py-16 bg-black h-[100vh] relative flex flex-col justify-start items-center">
      <div className="absolute top-[30px] left-[30px]">
        <Link href="/">
          <BsArrowLeftCircleFill color="teal" size={40} />
        </Link>
      </div>
      <div className="userIcon">
        <FaUser color="white" size={200} />
      </div>
      <div className="adminName pt-4">
        <p className="tex-2xl text-white font-thin font-roboto tracking-widest pt-4 hover:scale-125 transition-all duration-700 text-3xl">
          Shahrukh
        </p>
      </div>
      <div className="adminDescreption text-white w-2/3 text-center font-thin pt-6 ">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
          doloribus, quaerat a illum nostrum blandi inventore?
        </p>
      </div>
      <div className="py-6 w-full flex justify-center">

      <hr className="w-1/2"/>
      </div>
      <div className="connect">
        <p className="text-white text-2xl">Connect Using</p>
      </div>
      <div className="links pt-4 flex flex-col space-y-3">
        <LinkBlock
          linkName="linkedin"
          link="https://in.linkedin.com/in/shahrukh-khan-0344391a2?original_referer=https%3A%2F%2Fwww.google.com%2F"
          icon=<FaLinkedinIn color="white" className="z-20" size={20} />
        />
        <LinkBlock
          linkName="Github"
          link="https://github.com/Shahrukh-10"
          icon=<FaGithub color="white" className="z-20" size={20} left />
        />
      </div>
    </div>
  );
};

export default About;
