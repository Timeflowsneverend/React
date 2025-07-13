import { useNavigate } from "react-router-dom";

function MyComponent() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile", {
      state: { userId: 123 },
      replace: false,
    });
  };
  return <button onClick={goToProfile}>Go to Profile</button>;
}
export default MyComponent;
