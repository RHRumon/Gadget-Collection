import { ImCancelCircle } from "react-icons/im";
import { MdOutlineCancel } from "react-icons/md";

const CartPage = ({ wishGadget, handleDeleteWishGadget,addToCartFromWish}) => {
  let { product_id, name, description, price, image } = wishGadget;
//   console.log(wishGadget);

  return (
    <div className="mt-9 rounded-2xl text-black border-green-500 bg-white">
      <div className="flex justify-between p-3 items-center px-4">
        <div className="flex gap-5">
          <div className="flex justify-center items-center">
            <img className="h-32 w-45" src={image} alt="" />
          </div>
          <div className="text-start space-y-1 content-center">
            <p className="font-semibold text-2xl">{name}</p>
            <p className="text-lg text-gray-500">{description}</p>
            <p className="text-xl font-semibold">Price: ${price}</p>
            <button onClick={() => addToCartFromWish(product_id)} className="px-4 py-2 text-[##9538E2] border-2 border-purple-600 hover:bg-[#9538E2] hover:text-white rounded-3xl flex gap-2 items-center text-lg font-semibold text-purple-600">
              Add to cart
            </button>
          </div>
        </div>
        <div>
          <button onClick={() => handleDeleteWishGadget(product_id)}>
            <MdOutlineCancel className="h-9 w-9 text-red-500"></MdOutlineCancel>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
