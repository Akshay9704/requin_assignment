import CommonForm from "@/components/common/form";
import toast, { Toaster } from "react-hot-toast";
import { registerFormControls } from "@/config";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import URL from "../../serverURL";

const initialState = {
  userName: "",
  email: "",
  password: "",
  role: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const { userName, email, password, role } = formData;
    if (!userName || !email || !password || !role) {
      toast.error("Please fill all the fields");
      return;
    }
    const response = await axios.post(`${URL}/api/auth/register`, formData, {
      withCredentials: true,
    });
    if (response.data.error) {
      toast.error(response.data.error);
    } else {
      toast.success(response.data.message);
      navigate("/auth/login");
    }
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">
          Already have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthRegister;
