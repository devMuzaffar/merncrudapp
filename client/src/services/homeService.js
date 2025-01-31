import API_URLS from "../config/urls";

const fetchUserName = async () => {
  try {
    const response = await fetch(API_URLS.getData, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    return data.name;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default fetchUserName;
