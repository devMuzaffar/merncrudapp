import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/userContext";
import logout from "../../services/logoutService";

const Logout = () => {
  const {setIsLoggedIn} = useContext(UserContext);
  const navigate = useNavigate();

  const logoutAuth = async () => {
    const res = await logout(setIsLoggedIn);
    if(res){
      navigate("/login", { replace: true });
    }
  }

  useEffect(() => {
    logoutAuth();
  }, []);

  return <></>;
};

export default Logout;
