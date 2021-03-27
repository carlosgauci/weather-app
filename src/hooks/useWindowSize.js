import { useEffect, useState } from "react";

let windowWidth;
if (typeof window !== `undefined`) {
  windowWidth = window.innerWidth;
}

export default function useWindowSize() {
  const [size, setSize] = useState(windowWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}
