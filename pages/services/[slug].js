import { useRouter } from "next/router";
import ListTile from "../../components/ListTile/listTile";
import styles from "../../styles/Services.module.css"
const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  return (
    <div className={styles.services}>
        {/* <ListTile />
        <ListTile />
        <ListTile /> */}
    </div>
  );
};

export default Slug;
