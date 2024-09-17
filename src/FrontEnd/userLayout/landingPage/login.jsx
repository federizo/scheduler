import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";

const supabaseUrl = import.meta.env.VITE_APP_URL;
const supabaseKey = import.meta.env.VITE_APP_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function School() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if ((await event) !== "SIGNED_IN") {
      navigate("/");
    } else {
      navigate("/src/FrontEnd/userLayout/homePage/homePage");
    }
  });
  return (
    <div className="login-wrapper">
      {/* <img src={polylogo} alt="" className="polylogo" /> */}
      <div className="login">
        <Auth
          className="auth"
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["google", "facebook"]}
        />
      </div>{" "}
    </div>
  );
}

export default School;
