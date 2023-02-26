import styles from "../../styles/Home.module.css";
import Link from "next/link";

function LinkBlock(props) {
    const {linkName , link , icon} = props
  return (
    <>
         <div className={`${styles.full} w-[16rem] h-10  bg-white relative`}>
          <div
            className={`${styles.linkBlock} z-20 left-0 h-10 w-11 transition-all duration-500 bg-red-500 relative flex justify-center ease-in-out items-center `}
          >
            <div className="block icon">
            {icon}
            </div>
          </div>
          <div
            className={`${styles.linkedin} transition-all duration-500 text-blue-500 absolute top-2 left-20 tracking-[10px] font-bold`}
          >
            <p>{linkName}</p>
          </div>
          <Link href={link} className={`${styles.nextLink} opacity-0 transition-all duration-500`} target="_blank">
            <div
              className={`${styles.linkedinLink} transition-all duration-500 text-blue-500 absolute top-2 left-4 right-10 font-bold`}
            >
              <p className={`overflow ${styles.linkValue}`}>{link.length > 22 ? link.slice(0,22)+"..." : link}</p>
            </div>
          </Link>
        </div>
    </>
  )
}

export default LinkBlock