import { useLocation } from "react-router-dom";

function ProfilePage() {
  const location = useLocation();
  const { userId } = location.state || {};
  return (
    <div>
      <h1>Profile Page</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}
export default ProfilePage;
