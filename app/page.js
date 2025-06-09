import styles from "./page.module.css";
import MainImage from "./Component/Main_Image/page";
import Blog from "./Component/Blog/page";
import Comments from "./Component/Comments/page";
import Articles from "./Component/Articles/page";

export default function Home() {
  return (
    <>
      <MainImage />
      <Blog />
      <Comments />
      <Articles />
    </>
  );
}
