import DisplayCar from "./DisplayCar"

function App() {

  const cars = [
    { name: "vantage", model: 2019 },
    { name: "civic", model: 2020 },
    { name: "corolla", model: 2021 },
    { name: "mustang", model: 2022 },
  ];


  return (
    <>

      <h1>Car List</h1>
      {
        cars.map((item ,index ) => 
        <DisplayCar key={index} name={item.name} model={item.model} />)
      }

    </>


  )

}

export default App