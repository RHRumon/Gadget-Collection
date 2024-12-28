import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {

    let [gadgets, setGadgets] = useState([]);
    let [filteredGadgets, setFilteredGadgets] = useState([]);
    let [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => {
            setGadgets(data);
            setFilteredGadgets(data); //initially showing all gadgets
        })
    },[])

    const handleFilter = (category) => {
        setSelectedCategory(category);

        if(category === "All"){
            setFilteredGadgets(gadgets);
        }
        else{
            let filterd = gadgets.filter((gadget) => gadget.category === category);
            setFilteredGadgets(filterd);
        }
    }

    return (
        <div className="max-w-6xl mx-auto md:mt-96 mt-[25rem] text-black">
            <h1 className="text-center font-bold md:text-4xl text-2xl mb-12 ">Explore Cutting-Edge Gadgets</h1>

            
            <div className="grid md:grid-cols-4 grid-cols-1 p-3 gap-1">
                <div className="col-span-1  w-56 bg-white rounded-2xl mx-auto">
                <div className="flex flex-col items-center mt-5 space-y-4">

                    <button onClick={() => handleFilter("All")} 
                    className={`btn w-[191px] rounded-3xl ${selectedCategory === "All"? "bg-[#9538E2] text-white":"bg-gray-100 "}`}>All Product</button>
                    
                    <button onClick={() => handleFilter("Laptop")} 
                    className={`btn  w-[191px] rounded-3xl ${selectedCategory === "Laptop" ? "bg-[#9538E2] text-white":"bg-gray-100"}`}>Laptops</button>


                    <button onClick={() => handleFilter("Accessories")} className={`btn w-[191px] rounded-3xl ${selectedCategory === "Accessories" ? "bg-[#9538E2] text-white":"bg-gray-100"}`}>Accessories</button>

                    <button onClick={() => handleFilter("Smart Watch")} className={`btn w-[191px] rounded-3xl ${selectedCategory === "Smart Watch" ? "bg-[#9538E2] text-white":"bg-gray-100"}`}>Smart Watch</button>

                    <button onClick={() => handleFilter("Phone")} className={`btn w-[191px] rounded-3xl ${selectedCategory === "Phone" ? "bg-[#9538E2] text-white":"bg-gray-100"}`}>Iphone</button>
                </div>
                </div>
                <div className="col-span-3">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
                {
                    filteredGadgets.map((gadget, idx) => <Gadget 
                    key={idx} 
                    gadget={gadget}></Gadget>)
                }
            </div> 
                </div>
            </div>
        </div>
    );
};

export default Gadgets;