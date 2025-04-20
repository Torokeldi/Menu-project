import { FC } from "react";
import scss from "./Search.module.scss";

const Search: FC = () => {
 return (
  <section className={scss.Search}>
   <div className="container">
    <div className={scss.content}>Search</div>
   </div>
  </section>
 );
};

export default Search;
