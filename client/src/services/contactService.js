import API_URLS from "../config/urls";

export const fetchAbout = async (userData) => {
  try {
    const response = await fetch(API_URLS.getData, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
    });

    const data = await response.json();

    if (!response.status === 200) {
      const error = new Error(response.error);
      throw error;
    }

    return {
      ...userData,
      name: data.name || "",
      email: data.email || "",
      phone: data.phone || "",
    };
  } catch (error) {
    console.log(error);
  }
};

export const postMessage = async (userData) => {
  try {
    const response = await fetch(API_URLS.postContact, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!data) {
      console.log("Message Not Send");
    } else {
      alert("Message Send Successfully");
      console.log(data);

      return { ...userData, message: "" };
    }
  } catch (error) {
    console.log(error);
  }
};
