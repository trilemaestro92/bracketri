import axios from "axios";

//methods for interacting with API Auth routes
export default {
   login: userData =>
      axios.post("/auth/login", userData),
   signUp: userData =>
      axios.post('/auth/signup', userData),
   dashboard: token =>
      axios.get('/api/dashboard', { headers: { Authorization: `bearer ${token}` } }),
   createBracket: userData =>
      axios.post('/my-api/submit', userData),
   getPopulatedBracket: userData =>
      axios.get('/my-api/populated', userData),
   deleteBracket: userData =>
      axios.delete(`/my-api/delete/${userData.userData}`),
   editRound: userData =>
      axios.put(`/my-api/edit-round/${userData.userData}`, userData.data),
   editBracket: userData =>
      axios.put(`/my-api/edit-brackets/${userData.userData}`, userData.data),
   editBracket2: userData =>
      axios.put(`/my-api/edit-brackets-round2/${userData.userData}`, userData.data),
   editBracket3: userData =>
      axios.put(`/my-api/edit-brackets-round3/${userData.userData}`, userData.data)
};
