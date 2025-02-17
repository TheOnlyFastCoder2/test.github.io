import "./styles.css";

import Searcher from "widgets/Searcher";
import Select from "widgets/Select";
import Post from "widgets/Post";

export default function () {
  return (
    <div className="PageHome">
      <Searcher />
      <div className="PageHome-feed">
        <Select defaultValue="1" list={["1", "2", "3"]} />
        <h2 className="PageHome-title">Истории поиска (4)</h2>
        <div className="PageHome-list scrollable">
          {Array.from({ length: 6 }).map((_, index) => (
            <Post
              key={index}
              id={index}
              title="бмв 2014 - 2020 для клиента такого-то"
              found="8"
              date="20.12.2024"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
