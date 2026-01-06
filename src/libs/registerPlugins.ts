import * as Pixi from "pixi.js";
import gsap from "gsap";
import { Container, Sprite, Graphics, Text } from "pixi.js";
import { Viewport } from "pixi-viewport";
import { extend } from "@pixi/react";
import { useGSAP } from "@gsap/react";
import { PixiPlugin } from "gsap/PixiPlugin";

export const registerPlugins = () => {
  extend({
    Container,
    Sprite,
    Graphics,
    Text,
    Viewport,
  });

  gsap.registerPlugin(PixiPlugin);
  gsap.registerPlugin(useGSAP);
  PixiPlugin.registerPIXI(Pixi);
};

export default registerPlugins;
