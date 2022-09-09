import { FastAverageColor } from "fast-average-color";
import { Ref, useEffect } from "react";

const fac = new FastAverageColor();

export function useAverageColor(dom: Ref<HTMLImageElement>) {
  useEffect(() => {
    console.log("img");
    fac
      .getColorAsync(dom)
      .then((color) => {
        console.log("color", color);

        return color;
      })
      .catch((e) => {
        console.log(e);
      });
  });
}
