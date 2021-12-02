import Logo from "../commons/Logo";
import Slogan from "../commons/Slogan";
import "./style.css";

const LoginSidebar = () => {
  return (
    <div className="w-full h-full p-16 login-bg">
      <Logo />
      <Slogan color={"#fafafa"} />
    </div>
  );
};

export default LoginSidebar;
