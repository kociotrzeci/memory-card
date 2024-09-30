import React, { useState, useEffect } from "react";
async function getImage(_inputString) {
  const response = await fetch(
    `https://g.tenor.com/v1/search?q=${_inputString}&key=LIVDSRZULELA&limit=1`
  );
  const json = await response.json();
  console.log(json);
  return json.results[0].media[0].gif.preview;
}

export default function CardImage({ _inputString }) {
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    const fetchImage = async () => {
      const url = await getImage(_inputString);
      setImageUrl(url);
    };
    fetchImage();
  }, []);

  return <>{imageUrl && <img src={imageUrl} alt={_inputString} />}</>;
}
