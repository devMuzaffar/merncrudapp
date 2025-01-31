import { useEffect, useState } from "react";
import Details from "./components/Details";
import Profile from "./components/Profile";
import { useNavigate } from "react-router";
import dummyData from "../../list/dummyData.js";
import fetchAbout from "../../services/aboutService.js";

const About = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  const callAbout = async () => {
    const aboutData = await fetchAbout();
    if (aboutData) {
      setUserData(aboutData);
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    callAbout();
  }, []);

  return (
    <div className="flex justify-center items-center section-padding h-auto md:h-full">
      {/* Profile Window */}
      <div className="bg-white rounded-xl shadow-lg flex flex-col gap-10 h-full w-full p-4 md:h-auto md:flex-row md:!py-8 md:!px-12">
        {/* Profile Column */}
        <Profile />

        {/* Detail Column */}
        <Details data={userData.length > 1 ? userData : dummyData} />
      </div>
    </div>
  );
};

export default About;
