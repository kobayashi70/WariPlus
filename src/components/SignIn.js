// SignIn.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const SignIn = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      setLoading(true);
      await auth.signInWithEmailAndPassword(email, password);
      // ログイン成功時の処理
      console.log("Emailログイン成功");

      setUser({ email });

      navigate("/dashboard");
    } catch (error) {
      console.error("ログインエラー:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // ログイン成功時の処理
      console.log(result);
      console.log("Googleログイン成功:", user.displayName);
      setUser({ email });
      navigate("/dashboard");
    } catch (error) {
      // エラー発生時の処理
      console.error("Googleログインエラー:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sign-wrap">
      <h2>ログイン</h2>
      <label>
        メールアドレス:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        パスワード:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleSignIn} disabled={loading}>
        {loading ? "ログイン中..." : "ログイン"}
      </button>
      <button type="button" onClick={handleGoogleSignIn}>
        Googleでログイン
      </button>
    </div>
  );
};

export default SignIn;
