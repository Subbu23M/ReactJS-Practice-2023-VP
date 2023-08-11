import { Counter } from "./Components/Counter"
import { FetchData } from "./Components/FetchData"

export const App = () => {
  return (
    <>
      <h1 className="text-center my-2">
        About Browser Fetch API
      </h1>
      <Counter/>
      <FetchData/>
    </>
  )
}