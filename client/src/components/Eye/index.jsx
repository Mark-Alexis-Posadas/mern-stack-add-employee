import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Eye({ isToggle, handleToggle }) {
  return (
    <button className="absolute top-8 right-5" onClick={handleToggle}>
      <FontAwesomeIcon icon={isToggle ? faEye : faEyeSlash} />
    </button>
  );
}
