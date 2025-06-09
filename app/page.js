import styles from "./page.module.css";
import Header from "../Components/Header/page";
import MainImage from "../Components/Main_Image/page";
import Blog from "../Components/Blog/page";
import Comments from "../Components/Comments/page";
import Articles from "../Components/Articles/page";

export default function Home() {
  return (
    <>
      <Header />
      <MainImage />
      <Blog />
      <Comments />
      <Articles />
    </>
  );
}
