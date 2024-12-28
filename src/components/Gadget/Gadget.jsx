import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  let { product_id ,name, image, price } = gadget;
  // console.log(name, price);

  return (
    <div className="card card-compact bg-base-100 shadow-xl w-70">
      <figure className="flex justify-center p-2">
        <img className="max-w-[282px] h-[181px] "
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-semibold">{name}</h2>
        <p className="font-semibold text-gray-500 text-xl ">Price: {price}K</p>
        <div className="card-actions justify-start">
          <Link to={`/productdetails/${product_id}`}><button className="btn btn-primary rounded-[32px] text-[#9538E2] text-base font-semibold bg-white border-2 border-[#9538E2] hover:bg-[#9538E2] hover:text-white">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
