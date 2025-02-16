import Search from "shared/icons/Search"
import "./styles.css";

export default function (props: React.HTMLAttributes<HTMLInputElement>) {
	return (
		<div className="Searcher" >
			<Search />
			<input className="Searcher_input" type="text" {...props} placeholder="Название поиска" />
		</div>
	)
};