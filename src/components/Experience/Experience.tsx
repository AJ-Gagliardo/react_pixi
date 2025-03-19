import { Stage } from "@pixi/react";
import { calculateCanvasSize } from "../../helpers/common";
import { useCallback, useEffect, useState } from "react";

const Experience = () => {
  const [canvasSize, setCanvasSize] = useState(calculateCanvasSize);

  const updateCanvasSize = useCallback(() => {
    setCanvasSize(calculateCanvasSize());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, [updateCanvasSize]);

  //this is also in common.ts
  // export const calculateCanvasSize = () => {
  //   const width = window.innerWidth;
  //   const height = window.innerHeight;
  //   return { width, height };
  // };

  return <Stage width={canvasSize.width} height={canvasSize.height}></Stage>;
};

export default Experience;
