import '../styles/SignIn.css';
import appleIcon from '../assets/apple.png';
import googleIcon from '../assets/google.png';
import xIcon from '../assets/X.png';

function SignIn() {
  return (
    <div className="signin-page">
      <div className="signin-logo">
        <span>Spotify</span>
      </div>

      <h1 className="signin-title">LIFE IS WASTED ON THE LIVING</h1>

      <p className="signin-subtitle">
        Sign in
        <br />
        with
      </p>

      <div className="signin-buttons">
        <button className="signin-btn">
          <img src={appleIcon} alt="Apple" className="signin-btn-icon" />
        </button>

        <button className="signin-btn">
          <img src={googleIcon} alt="Google" className="signin-btn-icon" />
        </button>

        <button className="signin-btn signin-btn--x">
          <img src={xIcon} alt="X" className="signin-btn-icon" />
        </button>
      </div>
    </div>
  );
}

export default SignIn;