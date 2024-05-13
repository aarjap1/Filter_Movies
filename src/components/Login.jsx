import { useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = ({ toggle }) => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
  return (
    <div className="login-body">
      <div className="login-title">
        <img src="icon.gif" className="icon" />
        <div className="title-1">MovieMania</div>
        <div className="title-2">Discover, Watch, Repeat</div>
      </div>
      <div className="google">
        <button
          type="button"
          className="google-sign-in-button"
          onClick={() => {
            login();
            toggle();
          }}
          onSuccess={(credentialResponse) => {
            const credentialResponseDecoded = jwtDecode(
              credentialResponse.credential
            );
            console.log(credentialResponse.credential);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
