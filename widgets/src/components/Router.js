import { useEffect, useState } from "react";

const Router = ({ compPath, children }) => {
  // Just to listen to URL's path name changed re-render itself, nothing else : 1
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onUrlLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("navigation", onUrlLocationChange);

    return () => window.removeEventListener("navigation", onUrlLocationChange);
  }, []);
  // <--- : 1

  return currentPath === compPath ? children : null;
};
export default Router;
