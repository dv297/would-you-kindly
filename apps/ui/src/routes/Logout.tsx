import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    logout().then(() => {
      navigate("/", { replace: true });
    });
  }, [logout]);

  return null;
};

export default Logout;
