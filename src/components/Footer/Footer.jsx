const Footer = () => {
  return (
    <div className="md:!mt-72 !mt-[44rem] border border-red-800 bg-white">
      <div className="text-center">
        <h1 className="text-[32px] font-bold text-black mt-10">Golden Heaven</h1>
        <p className="text-base font-medium">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>

      <footer className="footer text-center p-10 flex justify-center md:space-x-44 text-black">
        <nav>
          <h6 className="footer-title text-lg font-bold text-black">
            Services
          </h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg font-bold text-black">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Career</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg font-bold text-black">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
