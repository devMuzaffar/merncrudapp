import API_URLS from "../config/urls";

const postRegister = async (user) => {
  try {
    const response = await fetch(API_URLS.postRegister, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (response.status === 422 || !data) {
      window.alert("Invalid Registration");
    } else {
      window.alert("Registration Successfull");
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

export default postRegister;
