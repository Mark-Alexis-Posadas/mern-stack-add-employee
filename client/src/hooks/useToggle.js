import { useState } from "react";

export const useToggle = () => {
  const [isToggle, setIstoggle] = useState(false);

  const handleToggle = () => {
    setIstoggle(!isToggle);
  };
  return { isToggle, handleToggle };
};
