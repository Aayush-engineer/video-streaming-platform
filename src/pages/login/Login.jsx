
import "./login.scss";

export default function Login() { 
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign IN</h1>
          <input type="email" placeholder="Email or phone number"/>
          <input type="password" placeholder="Password"/>
          <button className="loginButton">sign In</button>
          <span>New to Netflix? <b> sign up now.</b></span>
          <small>
            this page is  protected by Google recaptcha to ensure you're not a bot. <b> Lern more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
