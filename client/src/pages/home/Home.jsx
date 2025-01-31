import { useEffect, useState } from "react";
import fetchUserName from '../../services/homeService';

const Home = () => {
  const [name, setName] = useState('');

  const getUserName = async () => {
    const userName = await fetchUserName();
    setName(userName ? userName : '');
  }

  useEffect(() => {
    getUserName();
  }, []);

  const SubText = () => (
    <h3 className="text-base md:text-xl">Happy, to see you back</h3>
  );

  return (
    <div className="h-full flex items-center justify-center relative">
      {/* Background */}
      <div className="w-1/2 h-full bg-blue-200 absolute left-0 top-0" />

      {/* Title */}
      <div className="w-full flex flex-col items-center justify-center relative z-10 gap-4">
        <p className="text-blue-400 font-bold text-sm md:text-base">Welcome</p>
        <h2 className="text-2xl font-bold md:text-6xl">
          {name ? name : "We are MERN Developer"}
        </h2>
        {name && <SubText />}
      </div>
    </div>
  );
};

export default Home;
