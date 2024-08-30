import { useState } from "react";

export const useShowEye = () => {
  const [isShowEye, setIsShowEye] = useState(false);

  return { isShowEye, setIsShowEye };
};
