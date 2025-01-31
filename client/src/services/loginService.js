import API_URLS from "../config/urls";

const postLogin = async ({setIsLoggedIn, email, password}) => {
    try {
        const response = await fetch(API_URLS.postLogin, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
  
        const data = response.json();
  
        if (response.status === 400 || !data) {
          window.alert("Invalid Credentials");
        } else {
            window.alert("Login Successfully");
            setIsLoggedIn(true);
            return true;
        }
      } catch (error) {
        console.log(error);
      }
}

export default postLogin;