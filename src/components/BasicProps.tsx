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
          <div className="space-y-4">
              <h3>Different colors {count}</h3>
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
      </section>
  );
}

export default BasicProps