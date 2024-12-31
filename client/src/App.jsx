import { Route, Routes } from "react-router-dom";
import CheckAuth from "./components/common/check-auth";
import { checkAuth } from "./store/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AuthRegister from "./pages/auth/register";
import AuthLogin from "./pages/auth/login";
import { Skeleton } from "./components/ui/skeleton";
import AuthLayout from "./components/auth/layout";
import SellerLayout from "./components/seller-view/layout";
import SellerProducts from "./pages/seller-view/products";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import ShopLayout from "./components/shop/layout";
import ShopProducts from "./pages/shop/shop-products";
import UnauthPage from "./pages/unauth-page";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="w-[800] bg-black h-full" />;

  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        <Routes>
          <Route
            path="/"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user} />
            }
          />
          <Route
            path="/auth"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AuthLayout />
              </CheckAuth>
            }
          >
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
          </Route>
          <Route
            path="/seller"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <SellerLayout />
              </CheckAuth>
            }
          >
            <Route path="products" element={<SellerProducts />} />
          </Route>
          <Route
            path="/admin"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AdminLayout />
              </CheckAuth>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
          </Route>
          <Route
            path="/shop"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <ShopLayout />
              </CheckAuth>
            }
          >
            <Route path="home" element={<ShopProducts />} />
          </Route>
          <Route path="/unauth-page" element={<UnauthPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
