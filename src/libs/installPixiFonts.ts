import { BitmapFont } from "pixi.js";

const CHARS = [
  ["а", "я"],
  ["А", "Я"],
  "іІїЇґҐєЄ'",
  ["0", "9"],
  ' .,·-–—:!?()[]"№',
];

const installPixiFonts = () => {
  const resolution = Math.min(Math.max(window.devicePixelRatio, 1), 2);

  BitmapFont.install({
    name: "Nunito-600",
    style: {
      fontFamily: "Nunito",
      fontWeight: "600",
      fontSize: 64,
    },
    chars: CHARS,
    resolution,
  });

  BitmapFont.install({
    name: "Nunito-500",
    style: {
      fontFamily: "Nunito",
      fontWeight: "500",
      fontSize: 64,
    },
    chars: CHARS,
    resolution,
  });

  BitmapFont.install({
    name: "Nunito-300",
    style: {
      fontFamily: "Nunito",
      fontWeight: "300",
      fontSize: 64,
    },
    chars: CHARS,
    resolution,
  });
};

export default installPixiFonts;
