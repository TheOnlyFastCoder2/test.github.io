import { useState } from "react";
import Arrow from "shared/icons/Arrow";
import "./styles.css";

interface Props<T extends string[]> {
  list: T;
  defaultValue: T[number];
  callback?: (value: T[number]) => void;
}

export default function <T extends string[]>({
  defaultValue,
  list,
  callback,
}: Props<T>) {
  const [selectedValue, setSelectedValue] = useState<T[number]>(defaultValue);

  const handleSelect = (value: T[number]) => {
    setSelectedValue(value);
    callback && callback(value);
  };

  return (
    <details className="Select">
      <summary>
        {selectedValue}
        <Arrow />
      </summary>
      <ul>
        {list.map((item, index) => (
          <li key={index} onClick={() => handleSelect(item)}>
            {item}
          </li>
        ))}
      </ul>
    </details>
  );
}
