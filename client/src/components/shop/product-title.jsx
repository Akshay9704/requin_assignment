import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import toast from "react-hot-toast";

function ShopProductTitle({ product }) {
  const handlePurchase = () => {
    toast.success("Product purchased successfully!");
  };
  return (
    <Card className="w-full max-w-sm mx-auto">
      <div key={product?._id}>
        <CardContent>
          <h2 className="text-xl font-bold mb-2 mt-2">{product?.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary`}
            >
              ${product?.price}
            </span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center items-center">
          <Button onClick={handlePurchase}>Buy Now!</Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default ShopProductTitle;
