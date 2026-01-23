import useTheme from "../hook/useTheme";

const Navbar = () => {
    const {isDark} = useTheme();
    const sections = [
        { id: "basic", label: "Basic Props", icon: "📦" },
        { id: "ref", label: "Ref Props", icon: "🔗" },
        { id: "children", label: "Children Props", icon: "👶" },
        { id: "complex", label: "Complex Props", icon: "🧩" },
        { id: "theme", label: "Theme Props", icon: "🎨" },
    ];
    return (
        <nav
            className={`sticky top-0 shadow-md transition-all duration-200 ${
                isDark ? "bg-gray-800" : "backdrop-blur-lg"
            }`}
        >
            <div className="mx-auto px-4 py-4 container flex justify-between items-center">
                <h2 className="font-bold text-amber-200 text-3xl">
                    PROPS&REFS
                </h2>
                <div className="flex flex-wrap gap-4 justify-center">
                    {sections.map((section) => (
                        <button
                            className={`px-4 py-2 cursor-pointer rounded-lg font-medium transition-all bg-blue-600 text-white hover:bg-blue-800`}
                            key={section.id}
                        >
                            <span className="mr-2">{section.icon}</span>
                            {section.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
