const Login = ({ toggle }) => {
  return (
    <div className="login-body">
      <div className="login-title">
        <div className="title-1">MovieMania</div>
        <div className="title-2">Discover, Watch, Repeat</div>
      </div>
      <div className="google" onClick={toggle}>
        <div className="google-word">Login With Google</div>
        <img className="google-icon-image" src="images\googleIcon.png" />
      </div>
    </div>
  );
};

export default Login;
