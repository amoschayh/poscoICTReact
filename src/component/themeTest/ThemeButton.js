import {useContext} from "react";
import {ThemeContext} from "./ThemeContext";

const ThemeButton = () => {
    const ThemeContext = useContext(ThemeContext);
    const onClickHandler = () => {
        ThemeContext.changeMode();
    };

    return (
        <button style={{background: ThemeContext.themes.background, color: ThemeContext.themes.foreground}} onClick={() => onClickHandler()}>
            버튼 컬러보기
        </button>
    );
};

export default ThemeButton;