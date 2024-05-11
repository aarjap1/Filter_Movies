const Login = ({ toggle }) => {
  return (
    <div className="login-body">
      <div className="login-title">
        <div className="title-1">MovieMania</div>
        <div className="title-2">Discover, Watch, Repeat</div>
      </div>
      <div className="google">
        <button
          type="button"
          className="google-sign-in-button"
          onClick={toggle}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
