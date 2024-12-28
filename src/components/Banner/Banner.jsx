import bannerImg from '../../assets/banner.jpg'
import "../../global/Global.css"

const Banner = () => {
    return (
        <div className="bg-[#9538E2] text-white text-center space-y-4 h-[500px] rounded-b-3xl  md:pt-12 pt-6">
            <h1 className="heading-responsive">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
            <p className="text-base">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>

            <button className="btn rounded-3xl px-6 text-xl font-bold text-[#9538E2]">Shop Now</button>

            <div className="mx-auto border p-3 max-w-5xl rounded-3xl mt-[22px] z-10">
                <img className="md:h-[500px] h-80 w-full rounded-3xl" src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;