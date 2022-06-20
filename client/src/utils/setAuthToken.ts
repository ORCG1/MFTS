export const handleLogin = async ({ email, password }) => {

  const loginUser = { email, password };
  const loginResponse = await Axios.post("http://localhost:5000/api/users/login", loginUser);
  if (loginResponse) {
    await localStorage.setItem("auth-token", loginResponse.data.token);

    let token = await localStorage.getItem("auth-token");
    if (token === null) {
      await  localStorage.setItem("auth-token", "");
      token = "";
    }
    const tokenResponse = await Axios.post('http://localhost:5000/api/users/tokenIsValid', null, { headers: { "x-auth-token": token } });
    if (tokenResponse.data) {
      const userRes = await Axios.get("http://localhost:5000/api/users/", {
        headers: { "x-auth-token": token },
      });
      
      return setUser({
        username: userRes.data.displayName
      })
    }
  }

  return false
}