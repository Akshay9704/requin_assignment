import { Outlet } from "react-router-dom";
import ShopSideBar from "./sidebar";
import ShopHeader from "./header";
import { useState } from "react";

function SellerLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      {/* seller sidebar */}
      <ShopSideBar open={openSidebar} setOpen={setOpenSidebar} />
      <div className="flex flex-1 flex-col">
        {/* seller header */}
        <ShopHeader setOpen={setOpenSidebar} />
        <main className="flex-1 flex-col flex bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default SellerLayout;
