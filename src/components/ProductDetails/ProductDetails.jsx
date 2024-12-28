import { useLoaderData, useParams } from "react-router-dom";
import { ImStarHalf } from "react-icons/im";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { addGadgetToLS } from "../../Utilities/CartLS";
import { addWishGadgetToLS } from "../../Utilities/WishLS";

const ProductDetails = () => {
  const { product_id } = useParams();
  let id = parseInt(product_id);

  const data = useLoaderData();

  let gadget = data.find((gadget) => gadget.product_id === id);
  // console.log(gadget);

  let {name,image,price,availability,description,specifications,rating,
  } = gadget;

  let handleAddToCart = (id) =>{
     addGadgetToLS(id);
  }

  let handleAddToWishLS = (id) =>{
     addWishGadgetToLS(id);
  }


  return (
    <div className="">
      <div className="bg-[#9538E2] text-white text-center space-y-4 h-[500px] rounded-b-3xl  md:pt-12 pt-6">
        <h1 className="md:text-5xl text-2xl font-bold">Product Details</h1>
        <p className="text-base">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>

        <div className="mx-auto p-3 max-w-5xl rounded-3xl mt-[22px] z-10 md:h-[500px] h-80 grid md:grid-cols-2 grid-cols-1 bg-white text-black">
          <div className="flex justify-center items-center">
            <img
              className="md:h-[475px] max-w-[414px] h-80  rounded-3xl"
              src={image}
              alt=""
            />
          </div>
          <div className=" text-start p-2 space-y-1">
            <h1 className="font-semibold text-[28px]">{name}</h1>
            <p className="font-semibold text-xl">Price: ${price}</p>
            <button className={`btn btn-sm  border  rounded-[32px]  ${availability === 'In Stock' ? 'bg-green-100 text-[#309C08]  border-[#309C08]':'border-red-500 text-red-500 bg-red-200'}`}>
              {availability}
            </button>
            <p className="text-lg text-gray-500">{description}</p>

            <p className="font-bold text-lg">Specifications: </p>
            {specifications.map((item, idx) => (
              <li className="text-gray-500" key={idx}>
                {item}
              </li>
            ))}

            <p className="flex items-center gap-2 text-lg font-bold">
              Rating: <ImStarHalf className="-rotate-90 text-yellow-400" />
            </p>
            <div className="flex gap-2 items-center">
              <FaStar className="text-yellow-400 h-6 w-6"></FaStar>
              <FaStar className="text-yellow-400 h-6 w-6"></FaStar>
              <FaStar className="text-yellow-400 h-6 w-6"></FaStar>
              <FaStar className="text-yellow-400 h-6 w-6"></FaStar>
              <CiStar className="h-6 w-6"></CiStar>
              <p className="text-lg">{rating}</p>
            </div>
            <div className="flex gap-2 items-center mt-3">
              <button onClick={() => handleAddToCart(id)} className="text-white border rounded-[32px] bg-[#9538E2] px-8 py-3 text-lg font-bold flex gap-2 items-center">
                Add to Cart <MdOutlineShoppingCart></MdOutlineShoppingCart>
              </button>
              <div onClick={() => handleAddToWishLS(id)} className="bg-white px-4 py-4 rounded-full text-black border">
                <CiHeart className="text-2xl"></CiHeart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
