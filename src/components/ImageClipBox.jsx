import React from "react";

const ImageClipBox = ({ src, clipClass }) => {
  return (
    <div className={clipClass}>
      <img src={src} alt="contact-1" />
    </div>
  );
};

export default ImageClipBox;
