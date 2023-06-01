import React, { useState } from 'react'
import "./css/Form.css"
import { useNavigate } from 'react-router-dom';

function Form() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        MovieName: ""
    })
    const Navigate = useNavigate(); 
    
    const info = JSON.parse(localStorage.getItem("detail"))
    console.log(info);
    const handleChange = () => {
        const {name, value} = event.target;
        setUserData((prevVal) => {
            return {
                ...prevVal,
                [name]: value,
                MovieName: info.name
            }
        })
    }
    const submitUser = () => {
        localStorage.clear();
        localStorage.setItem("orders", JSON.stringify(userData));
        alert("Movie booked sucessfully");
        Navigate("/");
    }
  return (
    <div>
    <div class="form">
      <div class="title">Welcome</div>
      <div class="subtitle">Let's create your account!</div>
      <form action="">

      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder=" " value={info.name}/>
        <div class="cut"></div>
        <label for="firstname" class="placeholder">Movie Name</label>
      </div>
      <div class="input-container ic2">
        <input onChange={handleChange} id="lastname" name='name' class="input" type="text" placeholder=" " value={userData.name} />
        <div class="cut"></div>
        <label for="lastname" class="placeholder">Your name</label>
      </div>
      <div class="input-container ic2">
        <input onChange={handleChange} id="email" name='email' class="input" type="text" placeholder=" " value={userData.email} />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Email</label>
      </div>
      <button type="text" class="submit" onClick={submitUser}>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Form