interface Props {
  callback: (src: string) => void;
  list: string[];
}

export default function PostGallery({ callback, list }: Props) {
  const handleSelect = (src: string) => {
    callback(src);
  };

  return (
    <ul className="Post_gallery scrollable">
      {list.map((src) => (
        <li draggable="false" key={src} className="Post_gallery-item">
          <img
            src={src}
            draggable="false"
            onClick={handleSelect.bind(null, src)}
            alt=""
          />
        </li>
      ))}
    </ul>
  );
}
