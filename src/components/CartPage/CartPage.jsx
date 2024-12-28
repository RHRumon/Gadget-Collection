import { MdOutlineCancel } from "react-icons/md";

const CartPage = ({cartGadget,handleDelete}) => {

    let {product_id, name, description, price, image} = cartGadget;
    // console.log("this id will be deleted",product_id);
    // console.log(cartGadget);
    console.log("cart gadgets = ", cartGadget);
    
    return (
        <div className="mt-9 rounded-2xl text-black border-green-500 bg-white">
            <div className="flex justify-between p-3 items-center px-4">
                <div className="flex gap-5">
                    <img className="h-32 w-45" src={image} alt="" />
                    <div className="text-start space-y-3 content-center">
                        <p className="font-semibold text-2xl">{name}</p>
                        <p className="text-lg text-gray-500">{description}</p>
                        <p className="text-xl font-semibold">Price: ${price}</p>
                    </div>
                </div>
                <div>
                  <button onClick={() => handleDelete(product_id)}> <MdOutlineCancel className="h-9 w-9 text-red-500"></MdOutlineCancel></button>
                </div>
            </div>


        </div>
    );
};

export default CartPage;