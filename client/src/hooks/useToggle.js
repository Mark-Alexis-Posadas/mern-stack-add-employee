import { useState } from "react";

export const useToggle = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle((prev) => !prev);
  };

  return { isToggle, handleToggle };
};
