import { AlignJustify, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import URL from "@/serverURL";
import toast from "react-hot-toast";

function AdminHeader({ setOpen }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${URL}/api/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      if (res.data.error) {
        toast.error(res.data.error);
      } else {
        toast.success(res.data.message);
      }
      window.location.reload();
    } catch (error) {
      toast.error("An error occurred during logout. Please try again.");
    }
  };

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button
          onClick={handleLogout}
          className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow"
        >
          <LogOut />
          Logout
        </Button>
      </div>
    </header>
  );
}

export default AdminHeader;
