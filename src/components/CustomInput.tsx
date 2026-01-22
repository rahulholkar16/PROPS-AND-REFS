import { forwardRef } from "react";

const CustomInput = forwardRef(
    ({ label, placeholder, className }: CustomInputProp, ref: React.Ref<HTMLInputElement>) => {
        return(
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">{label}</label>
                <input type="text" ref={ref} className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`} placeholder={placeholder}/>
            </div>
        );
    },
);

CustomInput.displayName = "CustomInput";

export default CustomInput;