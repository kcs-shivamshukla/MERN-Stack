import axios from "axios";

const baseUrl = 'http://localhost:8080/users';

class AuthenticationService {
  signin = (username, password) => {
    return axios.post(`${baseUrl}/api/auth/signin`, { username, password })
      .then(response => {
        console.log(response)
        console.log(response.data)
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }

  signOut() {
    localStorage.removeItem("user");
  }

  register = async (firstname, lastname, username, email, password) => {
    return axios.post(`${baseUrl}/api/auth/signup`, { firstname, lastname, username, email, password });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthenticationService();