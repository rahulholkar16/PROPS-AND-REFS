import BasicProps from "./BasicProps";
import ChildrenProps from "./ChildrenProps";
import ComplexProps from "./ComplexProps";
import Footer from "./Footer";
import Navbar from "./Navbar";
import RefProps from "./RefProps";
import ThemeToggler from "./ThemeToggler";

const Layout = () => {
    return (
        <div className={`min-h-screen bg-gray-800`}>
            <Navbar />
            <div className="mx-auto container px-4 py-8">
                <header
                    className={`text-center transition-colors mb-12 text-white`}
                >
                    <h1 className="text-5xl font-bold mb-4">
                        React props explained
                    </h1>
                    <p className={`text-xl text-gray-300`}>
                        A comprehensive guide to understanding props in React
                    </p>
                    <div
                        className={`mt-4 inline-block px-6 py-2 rounded-full bg-gray-800 shadow-md`}
                    >
                        <span className="font-semibold">
                            Built with Bun + Vite + React + Tailwind CSS
                        </span>
                    </div>
                </header>
                <div className="space-y-8">
                    <div id="basic-props" className="scroll-mt-200">
                        <BasicProps />
                    </div>
                </div>
                <div className="space-y-8">
                    <div id="basic-props" className="scroll-mt-200">
                        <ChildrenProps />
                    </div>
                </div>
                <div className="space-y-8">
                    <div id="basic-props" className="scroll-mt-200">
                        <ComplexProps />
                    </div>
                </div>
                <div className="space-y-8">
                    <div id="basic-props" className="scroll-mt-200">
                        <RefProps />
                    </div>
                </div>
                <div className="space-y-8">
                    <div id="basic-props" className="scroll-mt-200">
                        <ThemeToggler />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;