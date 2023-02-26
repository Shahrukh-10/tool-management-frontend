import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const BlockInside = ({ img, heading, descreption }) => {
  return (
    <div className={`${styles.block} w-full text-white relative my-3 sm:mx-3`}>
      <div className="absolute bottom-5 left-4 bg-purple-500 rounded-sm px-2 transition-all duration-500 hover:scale-105">
        <Link href={`/services/${heading}`}>
          <button className="font-thin">Explore Now</button>
        </Link>
      </div>
      <div
        className={`${styles.main} flex w-full h-60 bg-fuchsia-900 rounded-lg `}
      >
        <div className={`${styles.blockImage} h-3/4`}>
          <Image
            className="h-full rounded-lg"
            height={159}
            width={150}
            src={img}
          ></Image>
        </div>
        <div
          className={`${styles.descreptionBlock} w-1/2 overflow-scroll pl-3 h-full py-2 `}
        >
          <h1 className="text-2xl font-roboto">{heading}</h1>
          <p className="font-thin pb-2">{descreption}</p>
        </div>
      </div>
    </div>
  );
};

export default BlockInside;
