import CommonForm from "@/components/common/form";
import toast from "react-hot-toast";
import { loginFormControls } from "@/config";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import URL from "@/serverURL";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      const res = await axios.post(`${URL}/api/auth/login`, formData, {
        withCredentials: true,
      });

      if (res.data.error) {
        toast.error(res.data.error);
      } else {
        toast.success(res.data.message);
        window.location.reload();
      }
    } catch (err) {
      toast.error("An error occurred during login.");
    }
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;
