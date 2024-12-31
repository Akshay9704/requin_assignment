import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AdminProductTitle from "@/components/admin-view/product-title";
import { deleteProduct, fetchAllProducts } from "@/store/seller-slice";

const initialFormData = {
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
};

function AdminDashboard() {
  const [formData, setFormData] = useState(initialFormData);
  const { productList } = useSelector((state) => state.sellerProducts);
  const dispatch = useDispatch();
  function handleDelete(getCurrentProductId) {
    dispatch(deleteProduct(getCurrentProductId)).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllProducts());
      }
    });
  }

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {productList.map((product) => (
          <AdminProductTitle
            key={product._id}
            setFormData={setFormData}
            product={product}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
