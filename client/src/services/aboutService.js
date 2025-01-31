import API_URLS from "../config/urls";

const fetchAbout = async () => {
  try {
    const response = await fetch(API_URLS.getAbout, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
    });

    const data = await response.json();

    const convertedArray = Object.entries(data).map(([key, value]) => ({
      title: key,
      text: value,
    }));

    const filteredData = convertedArray.filter((item) =>
      ["_id", "name", "email", "phone", "work"].includes(item.title)
    );

    if (!response.status === 200 || response.status === 401) {
      const error = new Error(response.error);
      throw error;
    }

    return filteredData;
  } catch (error) {
    console.log(error);
  }
};

export default fetchAbout;
