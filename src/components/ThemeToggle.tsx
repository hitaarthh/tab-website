import { useTheme, type Theme } from "../theme";

const CHOICES: Theme[] = ["light", "dark"];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="theme-toggle" role="group" aria-label="Choose color theme">
      {CHOICES.map((choice) => (
        <button
          key={choice}
          type="button"
          aria-pressed={theme === choice}
          onClick={() => setTheme(choice)}
        >
          {choice === "light" ? "Light" : "Dark"}
        </button>
      ))}
    </div>
  );
}
