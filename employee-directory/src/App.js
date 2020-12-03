import React, { useState, useEffect } from "react";
import API from "./utils/API"
import Card from "./components/card"

function App() {

  const [employee, setEmployee] = useState([]);


  useEffect(() => {
    loadNextUser()
  }, [])

  const loadNextUser = () => {
    API.getRandomUser()
      .then(res => {
        console.log(res)
        setEmployee(res.data.results)

      })
  }


  return (
    <div>

      <div>
        {employee.map((employee, index) => (
          <Card key={index} employee={employee} />
        ))}
      </div>
    </div>
  )
};



export default App;
