// import Display from "./components/Secondcomponent";
import { lazy, Suspense, useState } from "react";

const Form = lazy(() => import("./forms"))

function App() {

      const [show, setShow] = useState(false)


      return (
            <>
                  <div className="text-center">
                        <h1>Lazy loading</h1>
                        <button className="btn btn-primary" onClick={() => {
                              setShow(true)
                        }}>open</button>
                  </div>
                  {
                        show == true && (
                              <Suspense>
                                    <Form />
                              </Suspense>
                        )
                  }

            </>
      );
}

export default App;
