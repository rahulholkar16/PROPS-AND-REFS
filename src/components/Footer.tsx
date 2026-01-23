import useTheme from "../hook/useTheme"

const Footer = () => {
  const {isDark} = useTheme();
  return (
    <footer className={`mt-12 text-center pb-8 transition-colors ${isDark ? "text-gray-400" : "text-gray-600"}`}>
        <p className="text-sm">
            Made with ❤️ using Bun, Vite, React, and Tailwind CSS.
        </p>
    </footer>
  )
}

export default Footer