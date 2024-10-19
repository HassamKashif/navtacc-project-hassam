import axios from "axios"

export const register = (info) => {
    axios.post("http://localhost:4000/api/habit_tracking/register", info)
      .then( (response) => {
        alert("Successfully registered")
        console.log(response.data);
      })
      .catch( (err) => {
        alert(err.response.data.message)
        console.log(err.response.data);
    })
}

export const login = (info) => {
    axios.post("http://localhost:4000/api/habit_tracking/login", info)
      .then( (response) => {
        alert(response.data.message)
        console.log(response.data);
        const { loginUser } = response.data
        const { token } = response.data
        window.localStorage.setItem("username", loginUser.username)
        window.localStorage.setItem("email", loginUser.email)
        window.localStorage.setItem("token", token)
      })
      .catch( (err) => {
        alert(err.response.data.message)
        console.log(err.response.data);
    })
}

