import { withAuthenticationRequired } from "@auth0/auth0-react";

const Profile = () => {
  return <div>Profile</div>;
};

export default withAuthenticationRequired(Profile);
