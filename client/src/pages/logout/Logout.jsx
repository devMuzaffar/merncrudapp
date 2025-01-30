import { useContext, useEffect } from "react";
import API_URLS from "../../config/urls";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/userContext";

const Logout = () => {
  const {setIsLoggedIn} = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API_URLS.getLogout, {
      method: "GET",
      credentials: "include",
    }).then((res) => {
      setIsLoggedIn(false);
      navigate("/login", { replace: true });
      if(res.status !== 200){
        const error = new Error(res.error);
        throw error;
      }
    }).catch((error) => console.log(error));
  }, []);

  return <></>;
};

export default Logout;
