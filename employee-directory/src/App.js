import React, { useState, useEffect } from "react";
import API from "./utils/API"
import Card from "./components/card"

function App() {

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [image, setImage] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
   API.loadNextUser()
  }, [])

  loadNextUser = () => {
    API.getRandomUser()
      .then(res => {
        console.log(res)
        setPhone(res.data.results[0].cell)
        setImage(res.data.results[0].picture.large)
        setEmail(res.data.results[0].email)
        setName(`${res.data.results[0].first} ${res.data.results[0].last}`)
      })
  }


  return (
    <div>
      <Card
        image={image}
        name={name}
        email={email}
        phone={phone}
      />
    </div>
  );
}

export default App;
