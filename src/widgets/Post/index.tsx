import "./styles.css";

import Car from "shared/icons/Car";
import Close from "shared/icons/Close";
import Calendar from "shared/icons/Calendar";
import InfoCell from "./InfoCell";
import PostGallery from "./Gallery";
import Button from "shared/components/Button";
import Pencil from "shared/icons/Pencil";
import Link from "shared/components/Link";

interface Props {
  title: string;
  found: number | string;
  date: string;
  id: string | number;
}

export default function ({ title, found, date, id }: Props) {
  const toOpenImgs = (src: string) => {};

  return (
    <div className="Post">
      <div className="Post_header">
        <h3>{title}</h3>
        <span className="Post_delete">
          <Close />
        </span>
      </div>
      <div className="Post_info">
        <InfoCell Icon={Car} title={"Найдено:"} value={found + " машин"} />
        <InfoCell Icon={Calendar} title={"Старт поиска:"} value={date} />
      </div>
      <PostGallery callback={toOpenImgs} list={listCars} />
      <div className="Post_footer">
        <Link to={`/view/${id}`}>
          <Button>Посмотреть</Button>
        </Link>
        <Link to={`/edit/${id}`}>
          <span className="Post_footer_edit">
            <Pencil />
          </span>
        </Link>
      </div>
    </div>
  );
}

const listCars = [
  "/cars/1.png",
  "/cars/2.png",
  "/cars/3.png",
  "/cars/4.png",
  "/cars/5.png",
  "/cars/5.png",
  "/cars/5.png",
  "/cars/5.png",
];
