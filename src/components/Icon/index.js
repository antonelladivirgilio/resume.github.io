import React from "react";
import { paths } from "../../paths";

function Icon({
  width = "18",
  heigth = "18",
  type,
  viewBox = "0 0 500 500",
  fill = "#000",
  className = "icon-svg",
}) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={width}
        heigth={heigth}
        viewBox={viewBox}
        focusable="false"
        aria-hidden="true"
      >
        <path className={className} fill={fill} d={paths[type]} />
      </svg>
    </>
  );
}

export default Icon;
