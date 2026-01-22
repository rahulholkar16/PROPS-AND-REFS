import { useRef } from "react";
import CustomInput from "./CustomInput";

const RefProps = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const secoundInputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const getInputValue = () => {
      if (inputRef.current) alert(`Input value: ${inputRef.current.value}`);
  };

  const clearInputValue = () => {
      if (inputRef.current) {
        inputRef.current.value = "";
        inputRef.current.focus();
      }
  };

   const focusSecoundInput = () => {
       secoundInputRef.current?.focus();
   };

  return (
      <section className="p-8 bg-white rounded-xl shadow-lg mt-3">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ref Props</h2>
          <p className="text-gray-600 mb-6">
              Refs provide a way to access DOM nodes or React elements directly.
              Use{" "}
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  forwardRef
              </code>{" "}
              to pass refs to child components.
          </p>

          <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">
                      Try it out:
                  </h3>

                  <CustomInput
                      ref={inputRef}
                      label="First Input (with ref)"
                      placeholder="Type something..."
                  />

                  <CustomInput
                      ref={secoundInputRef}
                      label="Second Input (with ref)"
                      placeholder="Type something else..."
                  />

                  <div className="flex flex-wrap gap-3 mt-4">
                      <button
                          onClick={focusInput}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                      >
                          Focus First Input
                      </button>
                      <button
                          onClick={focusSecoundInput}
                          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
                      >
                          Focus Second Input
                      </button>
                      <button
                          onClick={getInputValue}
                          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                      >
                          Get First Input Value
                      </button>
                      <button
                          onClick={clearInputValue}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                      >
                          Clear First Input
                      </button>
                  </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-gray-800 mb-2">
                      When to use refs:
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Managing focus, text selection, or media playback</li>
                      <li>Triggering imperative animations</li>
                      <li>Integrating with third-party DOM libraries</li>
                      <li>
                          Accessing DOM measurements (scroll position, element
                          size)
                      </li>
                  </ul>
              </div>
          </div>
      </section>
  );
}

export default RefProps;