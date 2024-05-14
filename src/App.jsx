
import Firstcomponent from "./components/Firstcomponent";
import Display from "./components/Secondcomponent";

function App() {

  let firstcomponents = [
    {
      id: 21,
      name: 'Raj',
      age: 25,
      place: 'Bangalore'
    },
    {
      id: 22,
      name: 'kumar',
      age: 25,
      place: 'Bangalore'
    },
    {
      id: 23,
      name: 'RajKumar',
      age: 27,
      place: 'Bangalore'
    }
  ]

  console.log(firstcomponents)

  return (
    <>
      {
        firstcomponents.map(
          (f) => {
            return <Firstcomponent key={f.id} id={f.id} name={f.name} age={f.age} place={f.place} />
          }
        )

      }
      <Display />
    </>
  );
}

export default App;
