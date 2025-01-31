import { useEffect, useState } from "react";
import Details from "./components/Details";
import Profile from "./components/Profile";
import { useNavigate } from "react-router";
import API_URLS from '../../config/urls';

const About = () => {

  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  const callAboutPage = async () => {
    try {
      const response = await fetch(API_URLS.getAbout, {
        method: "GET",
        headers: {
          'Content-Type': "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();

      // Object first filters and removes certain keys from object by entries().filter()
      // Then Object is converted to array by fromEntries()
      // const filteredData = Object.fromEntries(
      //   Object.entries(data).filter(([key]) => !['password', 'cpassword', 'tokens', '__v'].includes(key))
      // );

      const convertedArray = Object.entries(data).map(([key, value]) => ({
        title: key,
        text: value,
      }));
      const filteredData = convertedArray.filter((item) => ['_id', 'name', 'email', 'phone', 'work'].includes(item.title));
      setUserData(filteredData);

      if(!response.status === 200){
        const error = new Error(response.error);
        throw error;
      }

    } catch (error) {
      console.log(error);
      navigate('/login');
    }
  }

  useEffect(() => {
    callAboutPage();
  }, [])
  


  return (
    <div className="flex justify-center items-center section-padding h-auto md:h-full">
      
      {/* Profile Window */}
      <div className="bg-white rounded-xl shadow-lg flex flex-col gap-10 h-full w-full p-4 md:h-auto md:flex-row md:!py-8 md:!px-12">
        {/* Profile Column */}
        <Profile />

        {/* Detail Column */}
        {userData && <Details data={userData}/>}
      </div>


    </div>
  );
};

export default About;
