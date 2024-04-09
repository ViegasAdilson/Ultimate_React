import { useDarkMode } from "../context/DarkModeContext";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
function DarkModeToggle() {
  const { isDrakMode, toggleDarkMode } = useDarkMode();
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDrakMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
