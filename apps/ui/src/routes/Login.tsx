import { withAuthenticationRequired } from "@auth0/auth0-react";

const Login = () => {
  return <div>Login</div>;
};

export default withAuthenticationRequired(Login);
