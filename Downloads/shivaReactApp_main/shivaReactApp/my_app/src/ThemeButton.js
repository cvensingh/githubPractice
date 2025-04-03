
import { useContext } from "react";
import ThemeContext from './ThemeContext';

function ThemeButton() {
    const theme = useContext(ThemeContext);
    return (
        <button style ={{ backgroundColor: theme === "light" ?
            "gray" : "yellow", color: theme === "light" ?
            "white" : "black" }} >
                Switch Theme
            </button>
    );
}

export default ThemeButton;