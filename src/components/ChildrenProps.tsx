import type { ContainerProp } from "../types/Cointainer";

const Cointainer: React.FC<ContainerProp> = ({ children, layout='vertical' }) => {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4"
  };
  
  return (
    <div className={layoutClasses[layout]}>{children}</div>
  )
}

const ChildrenProps = () => {
  return (
    <section className="p-8 bg-white rounded-xl shadow-lg"></section>
  )
}

export default ChildrenProps;