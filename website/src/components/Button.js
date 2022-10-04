
import { useTheme } from "../context/ThemeContext";

function Button() {
	const { theme, setTheme } = useTheme();

	return (
		<div>
			Aktif Tema: {theme}
			<br />
			<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
				Tema Değiştir
			</button>
		</div>
	);
}

export default Button;