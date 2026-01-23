import useTheme from "../hook/useTheme";

const ThemeToggler = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  return (
      <button
          onClick={toggleTheme}
          className={`
        relative w-16 h-8 rounded-full transition-colors duration-300 mt-3
        ${isDark ? "bg-blue-600" : "bg-gray-300"}
      `}
      >
          <div
              className={`
          absolute top-1 left-1 w-6 h-6 rounded-full bg-white
          transition-transform duration-300 flex items-center justify-center
          ${isDark ? "transform translate-x-8" : ""}
        `}
          >
              {isDark ? "🌙" : "☀️"}
          </div>
      </button>
  );
}

export default ThemeToggler;
