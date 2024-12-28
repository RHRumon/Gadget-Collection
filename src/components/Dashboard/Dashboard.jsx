import { useEffect, useState } from "react";
import { getStoredGadgets } from "../../Utilities/CartLS";
import { useLoaderData } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import CartPage from "../CartPage/CartPage";
import { PiSliders } from "react-icons/pi";
import { getStoredWishGadgets } from "../../Utilities/WishLS";
import WishPage from "../WishPage/WishPage";
import { toast } from "react-toastify";

const Dashboard = () => {
  let allGadget = useLoaderData();

  let [activeTab, setActiveTab] = useState("Cart"); //for button
  let [filteredGadgetsCart, setFilteredGadgetsCart] = useState([]);
  let [filteredWishGadgetsCart, setFilteredWishGadgetsCart] = useState([]);

  useEffect(() => {
    // cart
    let storedGadgetList = getStoredGadgets();

    let storedGadgetListInt = storedGadgetList.map((id) => parseInt(id));
    let filteredGadget = allGadget.filter((gadget) =>
      storedGadgetListInt.includes(gadget.product_id)
    );
    setFilteredGadgetsCart(filteredGadget);

    // wishlist
    let storedWishGadgetList = getStoredWishGadgets();
    let storedWishGadgetListInt = storedWishGadgetList.map((id) =>
      parseInt(id)
    );
    let filterWishList = allGadget.filter((gadget) =>
      storedWishGadgetListInt.includes(gadget.product_id)
    );
    setFilteredWishGadgetsCart(filterWishList);
  }, []);

  let handleDelete = (id) => {
    let newArray = filteredGadgetsCart.filter(
      (gadget) => gadget.product_id !== id
    );
    setFilteredGadgetsCart(newArray);
  };

  let handleDeleteWishGadget = (id) => {
    let newArray = filteredWishGadgetsCart.filter(
      (gadget) => gadget.product_id !== id
    );
    setFilteredWishGadgetsCart(newArray);
  };

  let addToCartFromWish = (id) => {
    console.log("cart is clicked");

    let foundGadget = filteredWishGadgetsCart.find((gadget) => gadget.product_id === id
    );

    if (foundGadget) {
      let isAlreadyInCart = filteredGadgetsCart.some((gadget => gadget.product_id === id));

      if(!isAlreadyInCart){
        setFilteredGadgetsCart((prevState) => [...prevState, foundGadget]);
        toast("Added To Cart");
      }
      else{
         toast("Already added to cart");
      }
    } 
    else {
      console.log("Not found in WishList");
      toast("Not found in WishList");
    }
  };

  // sorting
  let sorting = () =>{
     let sortedArray = [...filteredGadgetsCart].sort((b,a) => a.price - b.price);
     setFilteredGadgetsCart(sortedArray);
  }
  
  // total price calculating (sum)
  let total_price = filteredGadgetsCart.reduce((sum, gadget) => sum + gadget.price, 0);

  console.log("New Cart items = ", filteredGadgetsCart);

  return (
    <div>
      <div className="bg-[#9538E2] text-white text-center space-y-4 h-[250px] rounded-b-3xl md:pt-12 pt-6">
        <h1 className="md:text-5xl text-2xl font-bold">Dashboard</h1>
        <p className="text-base">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>

        {/* button tab */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setActiveTab("Cart")}
            className={`px-12 py-2 rounded-3xl border border-white hover:bg-white hover:text-[#9538E2] text-lg font-semibold ${
              activeTab === "Cart" ? "bg-white text-[#9538E2]" : ""
            }`}
          >
            Cart
          </button>

          <button
            onClick={() => setActiveTab("Wishlist")}
            className={`px-12 py-2 rounded-3xl border border-white hover:bg-white hover:text-[#9538E2] text-lg font-semibold ${
              activeTab === "Wishlist" ? "bg-white text-[#9538E2]" : ""
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      {/* Tab content */}
      <div>
        {activeTab === "Cart" && (
          <div>
            <div className="flex justify-between px-5 text-black mt-12">
              <p className="text-2xl font-bold">Cart</p>
              <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold mr-6">Total Cost: ${total_price}</h1>
                <button onClick={sorting} className="px-4 py-3 text-[##9538E2] border-2 border-purple-600 hover:bg-[#9538E2] hover:text-white rounded-3xl flex gap-2 items-center text-lg font-semibold text-purple-600">
                  Sort by Price <PiSliders />
                </button>
                <button className="px-4 py-3 text-[##9538E2] border-2 border-purple-600 hover:bg-[#9538E2] hover:text-white rounded-3xl flex gap-2 items-center text-lg font-semibold text-purple-600">
                  Purchase
                </button>
              </div>
            </div>
            <div className=" mt-8">
              {filteredGadgetsCart.map((cartGadget, idx) => (
                <CartPage
                  handleDelete={handleDelete}
                  cartGadget={cartGadget}
                  key={idx}
                ></CartPage>
              ))}
            </div>
          </div>
        )}
        {activeTab === "Wishlist" && (
          <div>
            {filteredWishGadgetsCart.map((wishGadget, idx) => (
              <WishPage
                addToCartFromWish={addToCartFromWish}
                handleDeleteWishGadget={handleDeleteWishGadget}
                wishGadget={wishGadget}
                key={idx}
              ></WishPage>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
