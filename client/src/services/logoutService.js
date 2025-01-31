import API_URLS from "../config/urls";

const logout = async (setIsLoggedIn) => {
  try {
    const response = await fetch(API_URLS.getLogout, {
      method: "GET",
      credentials: "include",
    });

    if (response.status !== 200) {
      const error = new Error(response.error);
      throw error;
    }

    setIsLoggedIn(false);
    return true;
  } catch (error) {
    console.log(error);
  }
};

export default logout;
