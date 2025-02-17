import "./styles.css";

import Home from "shared/icons/Home";
import Heart from "shared/icons/Heart";
import Message from "shared/icons/Message";
import Car from "shared/icons/Car";
import Link from "shared/components/Link";

export default function () {
  return (
    <nav className="Navigator">
      <Linker link="/" text="Главная" Icon={Home} />
      <Linker link="/cars" text="Мои машины" Icon={Car} />
      <Linker link="/favorites" text="Избранное" Icon={Heart} />
      <Linker link="/support" text="Поддержка" Icon={Message} />
    </nav>
  );
}

interface PropsLinker {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  link: string;
}

function Linker({ Icon, text, link }: PropsLinker) {
  return (
    <Link to={link}>
      <li>
        <Icon />
        <span>{text}</span>
      </li>
    </Link>
  );
}
