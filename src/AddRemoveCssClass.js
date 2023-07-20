import { useState } from "react";
export default function AddRemoveCssClass() {
  const [isActive, setIsActive] = useState(false);
  let backgroundClassName = "bg-primary";
  let pictureClassName = "m-4";
  if (isActive) {
    backgroundClassName = "border";
    pictureClassName += " border";
  }

  return (
    <div className={backgroundClassName} onClick={() => setIsActive(false)}>
      <img
        className={pictureClassName}
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(true);
        }}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
