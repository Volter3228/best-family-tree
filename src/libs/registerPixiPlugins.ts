import * as Pixi from "pixi.js";
import { Assets } from "pixi.js";
import gsap from "gsap";
import {
  Container,
  Sprite,
  Graphics,
  Text,
  TilingSprite,
  BitmapText,
} from "pixi.js";
import { Viewport } from "pixi-viewport";
import installPixiFonts from "@/libs/installPixiFonts";
import { extend } from "@pixi/react";
import { useGSAP } from "@gsap/react";
import { PixiPlugin } from "gsap/PixiPlugin";
import { CIRCLE_TEXTURE_SRC, PATTERN_TEXTURE_SRC } from "@/constants/canvas";

export const registerPixiPlugins = async () => {
  extend({
    Container,
    Sprite,
    Graphics,
    Text,
    BitmapText,
    TilingSprite,
    Viewport,
  });

  gsap.registerPlugin(PixiPlugin);
  gsap.registerPlugin(useGSAP);
  PixiPlugin.registerPIXI(Pixi);

  installPixiFonts();

  await Promise.all([
    Assets.load({ src: CIRCLE_TEXTURE_SRC }),
    Assets.load({ src: PATTERN_TEXTURE_SRC }),
  ]);
};

export default registerPixiPlugins;
