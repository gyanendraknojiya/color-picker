import React, { useEffect, useState } from "react";
import Header from "./Header.component";

import { CopyToClipboard } from "react-copy-to-clipboard";

const Homepage = () => {
  let hexNums = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  const [allColors, setAllColors] = useState([]);
  let [copiedColor, setCopiedColor] = useState(null);

  const generateRandomColor = () => {
    let result = [];
    for (let n = 0; n < 6; n++) {
      result.push(hexNums[Math.floor(Math.random() * 16)]);
    }
    return result.join("");
  };
  const generateColorArray = () => {
    let colors = [];
    for (let n = 0; n < 100; n++) {
      colors.push(generateRandomColor());
    }
    console.log(colors);

    setAllColors([...allColors, ...colors]);
  };
  useEffect(() => {
    generateColorArray();
  }, []);

  useEffect(() => {
    if (copiedColor) {
      setTimeout(() => {
        setCopiedColor(null);
      }, 2000);
    }
  }, [copiedColor]);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mx-0 my-4">
          {allColors.length &&
            allColors.map((color) => (
              <div className="col-md-2 col-sm-3 col-4 p-2 text-center">
                <CopyToClipboard
                  text={`#${color}`}
                  onCopy={() => setCopiedColor(color)}
                >
                  <div
                    className="mx-auto rounded-lg shadow border"
                    style={{
                      backgroundColor: `#${color}`,
                      height: 115,
                      width: 115,
                      position: "relative",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="bg-black  px-1 text-white font-13 rounded"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        letterSpacing: 0.5,
                      }}
                    >
                      {copiedColor && copiedColor === color
                        ? "Copied"
                        : `#${color}`}
                    </div>
                  </div>
                </CopyToClipboard>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
