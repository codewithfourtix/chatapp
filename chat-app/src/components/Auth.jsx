import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Auth = (props) => {
  const [setIsAuth] = props;

  const SignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err, "Error bruh");
    }
  };
  return (
    <div className="auth">
      <p>Sign in with google to continue</p>
      <button onClick={SignInWithGoogle}>Sign in with google</button>
    </div>
  );
};
