import type { ContainerProp } from "../types/Cointainer";
import Card from "./Card";

const Cointainer: React.FC<ContainerProp> = ({
    children,
    layout = "vertical",
}) => {
    const layoutClasses = {
        vertical: "flex flex-col space-y-4",
        horizontal: "flex flex-row flex-wrap gap-4",
        grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
    };

    return <div className={layoutClasses[layout]}>{children}</div>;
};

const childrenProps = () => {
  return (
      <section className="p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Children Props Example
          </h2>
          <p className="text-gray-600 mb-6">
              The{" "}
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  children
              </code>{" "}
              prop allows you to pass JSX elements or components as children to
              other components, enabling component composition.
          </p>
          <div className="space-y-6">
              <div>
                  <h3>Card Component with children</h3>
                  <Cointainer layout="grid">
                      <Card title="User profile" color="blue">
                          <p className="mb-2">
                              <strong>Name:</strong> Rahul Pal
                          </p>
                          <p className="mb-2">
                              <strong>Email:</strong> rp1450991@gmail.com
                          </p>
                      </Card>
                      <Card title="Statistics" color="green">
                          <div className="space-y-2">
                              <div className="flex justify-between">
                                  <span>Total Users:</span>
                                  <span className="font-bold">1,234</span>
                              </div>
                              <div className="flex justify-between">
                                  <span>Active Sessions:</span>
                                  <span className="font-bold">567</span>
                              </div>
                              <div className="flex justify-between">
                                  <span>Revenue:</span>
                                  <span className="font-bold">$89,000</span>
                              </div>
                          </div>
                      </Card>

                      <Card title="Quick Actions" color="purple">
                          <div className="flex flex-col gap-2">
                              <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
                                  Create New
                              </button>
                              <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
                                  View All
                              </button>
                          </div>
                      </Card>

                      <Card title="Warning" color="red">
                          <p>
                              Your trial period ends in 5 days. Please upgrade
                              your account to continue using all features.
                          </p>
                      </Card>
                  </Cointainer>
              </div>
          </div>
      </section>
  );
}

export default childrenProps;