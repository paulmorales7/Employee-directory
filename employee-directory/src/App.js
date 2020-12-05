import React, { useState, useEffect } from "react";
import API from "./utils/API"
import Card from "./components/card"

function App() {

  const [employee, setEmployee] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterEmployees, setFilterEmployees] = useState([]);

  useEffect(() => {
    loadNextUser()
  }, [])

  const loadNextUser = () => {
    API.getRandomUser()
      .then(res => {
        console.log(res)
        setEmployee(res.data.results)
        setFilterEmployees(res.data.results)
      })
  }

  function handleSearch() {
    const data = employee.filter((el) => el.name.first.toLowerCase().startsWith(searchTerm.toLowerCase()) || el.name.last.toLowerCase().startsWith(searchTerm.toLowerCase()))
    setFilterEmployees(data)
  }

  function clearFilter() {
    setFilterEmployees(employee)
  }

  function Sort() {
    const sorted = [...filterEmployees];
    sorted.sort(function (a, b) {
      var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    setFilterEmployees(sorted)
  }

  return (
    <div>
      <input onChange={(e) => { setSearchTerm(e.target.value) }} value={searchTerm} />
      <button onClick={handleSearch}>Search</button>
      <button onClick={clearFilter}>Clear Search</button>
      <button onClick={Sort}>Sort Alphabetically</button>
      <div>
        {filterEmployees.map((employee, index) => (
          <Card key={index} employee={employee} />
        ))}
        {filterEmployees.length > 0 ? null : "No results found"}
      </div>

    </div>
  )
};



export default App;
