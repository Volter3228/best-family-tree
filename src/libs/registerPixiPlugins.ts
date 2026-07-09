import * as Pixi from "pixi.js";
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

export const registerPixiPlugins = () => {
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
};

export default registerPixiPlugins;
