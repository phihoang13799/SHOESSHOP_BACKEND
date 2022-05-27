import { margin } from "@mui/system";
import React from "react";

export default function SlideImage() {
  const styleimg = {
    width: "100%",
    margin: "0px 0px",
  };
  var index = 0;
  function changeImg() {
    var imgs = [
      "https://theme.hstatic.net/200000289033/1000684389/14/slideshow_2.jpg?v=121",
      "https://theme.hstatic.net/200000289033/1000684389/14/slideshow_4.jpg?v=121",
    ];

    if (index == 2) {
      index = 0;
    } else {
      document.getElementById("img").src = imgs[index];
      index++;
    }
  }
  // setInterval(changeImg, 20000);
  return (
    <img
      id="img"
      src="https://theme.hstatic.net/200000289033/1000684389/14/slideshow_2.jpg?v=121"
      style={styleimg}
      onClick={changeImg}
    ></img>
  );
}
