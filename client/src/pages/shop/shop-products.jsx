import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ShopProductTitle from "@/components/shop/product-title";
import { fetchAllProducts } from "@/store/seller-slice";

function ShopProducts() {
  const { productList } = useSelector((state) => state.sellerProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {productList.map((product) => (
          <ShopProductTitle
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default ShopProducts;
