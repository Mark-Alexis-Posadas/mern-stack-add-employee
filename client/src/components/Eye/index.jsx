import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useToggle } from "../../hooks/useToggle";

export default function Eye() {
  const { isToggle, handleToggle } = useToggle();
  return (
    <button className="absolute top-8 right-5" onClick={handleToggle}>
      <FontAwesomeIcon icon={isToggle ? faEye : faEyeSlash} />
    </button>
  );
}
