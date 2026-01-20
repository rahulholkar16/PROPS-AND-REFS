import { useState } from "react"
import Button from "./Button"

const BasicProps = () => {
  const [count, setCount] = useState(0);
  return (
      <section className="p-8 bg-white rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Basic Props Example
          </h2>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              officia eaque ad pariatur odio aut voluptas doloremque incidunt
              labore sequi!
          </p>
          {/* Different colors Button */}
          <div className="space-y-4 mt-2">
              <h3>Different colors</h3>
              <div className="flex flex-wrap gap-3">
                  <Button
                      text="Primary button!"
                      size="large"
                      disabled={false}
                      color="primary"
                      onClick={() => setCount((prev) => prev + 1)}
                  />
                  <Button
                      text="Secondary button!"
                      size="large"
                      disabled={false}
                      color="secondary"
                      onClick={() => setCount((prev) => prev + 1)}
                  />
                  <Button
                      text="Danger button!"
                      size="large"
                      disabled={false}
                      color="danger"
                      onClick={() => setCount((prev) => prev + 1)}
                  />
                  <Button
                      text="Success button!"
                      size="large"
                      disabled={false}
                      color="success"
                      onClick={() => setCount((prev) => prev + 1)}
                  />
              </div>
          </div>
          {/* Different size Button */}
          <div className="space-y-4 mt-2">
              <h3>Different sizes</h3>
              <div className="flex flex-wrap gap-3">
                  <Button
                      text="Small button!"
                      size="small"
                      disabled={false}
                      color="primary"
                      onClick={() => setCount((prev) => prev + 1)}
                  />
                  <Button
                      text="Large button!"
                      size="large"
                      disabled={false}
                      color="secondary"
                      onClick={() => setCount((prev) => prev + 1)}
                  />
              </div>
          </div>
          {/* Other Types */}
          <div className="space-y-4 mt-2">
              <h3>Other types</h3>
              <div className="flex flex-wrap gap-3">
                  <Button
                      text="Disabled button!"
                      size="small"
                      disabled={true}
                      color="primary"
                      onClick={() => setCount((prev) => prev + 1)}
                  />
                  <Button
                      text="Enable button!"
                      size="large"
                      disabled={false}
                      color="secondary"
                      onClick={() => setCount((prev) => prev + 1)}
                  />
              </div>
          </div>
          {/* Counter Element */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-lg font-medium text-gray-700">
                  Click Count:{" "}
                  <span className="text-blue-600 font-bold">{count}</span>
              </p>
          </div>
      </section>
  );
}

export default BasicProps