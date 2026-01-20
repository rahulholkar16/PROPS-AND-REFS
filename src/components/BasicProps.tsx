import { useState } from "react"
import Button from "./Button"

const BasicProps = () => {
  const [count, setCount] = useState(0);
  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h2>Basic Props Example</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia eaque ad pariatur odio aut voluptas doloremque incidunt labore sequi!</p>
      <div className="space-y-4">
        <h3>Different colors</h3>
        <div className="flex flex-wrap gap-3">
          <Button text="Click me!" size="large" disabled={false} color="primary"/>
        </div>
      </div>
    </section>
  )
}

export default BasicProps