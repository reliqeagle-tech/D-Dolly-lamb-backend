// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

// export default ScrollToTop;


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, search } = useLocation(); // ✅ search ADD

  useEffect(() => {
    window.scrollTo({
      top: 400,
      left: 0,
      behavior: "smooth", // ya "auto"
    });
  }, [pathname, search]); // ✅ BOTH

  return null;
};

export default ScrollToTop;
