import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";

import gv from "../../../assets/gv.png";


const supabaseUrl = import.meta.env.VITE_APP_URL;
const supabaseKey = import.meta.env.VITE_APP_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function Login() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if ((await event) !== "SIGNED_IN") {
      navigate("/");
    } else {
      navigate("/home");
    }
  });
  return (
    <div className=" w-screen h-screen bg-white flex items-center justify-center">
      <div className="p-2  flex items-center gap-2 w-1/2">
        <div className="flex-1 flex items-center justify-center">
          <img src={gv} alt="" className="h-[35rem]" />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="min-w-[400px]">
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="dark"
              providers={["google", "facebook"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
