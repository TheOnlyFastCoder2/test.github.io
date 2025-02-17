import Search from "shared/icons/Search";
import "./styles.css";

export default function (props: React.HTMLAttributes<HTMLInputElement>) {
  return (
    <div className="Searcher">
      <Search />
      <input
        {...props}
        type="text"
        className="Searcher_input"
        placeholder="Название поиска"
      />
    </div>
  );
}
