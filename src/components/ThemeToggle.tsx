import { useTheme, type ThemePreference } from "../theme";

const CHOICES: { id: ThemePreference; label: string; title: string }[] = [
  { id: "auto", label: "Auto", title: "Follow time of day (light 6 AM – 6 PM, dark otherwise)" },
  { id: "light", label: "Light", title: "Always light" },
  { id: "dark", label: "Dark", title: "Always dark" },
];

export default function ThemeToggle() {
  const { preference, setPreference } = useTheme();
  return (
    <div className="theme-toggle" role="group" aria-label="Choose color theme">
      {CHOICES.map((choice) => (
        <button
          key={choice.id}
          type="button"
          title={choice.title}
          aria-pressed={preference === choice.id}
          onClick={() => setPreference(choice.id)}
        >
          {choice.label}
        </button>
      ))}
    </div>
  );
}
