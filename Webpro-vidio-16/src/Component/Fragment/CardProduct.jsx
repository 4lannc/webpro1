import Button from "../Element/Button";

const CardProducts = (props) => {
  const { children } = props; // Menggunakan huruf kecil untuk children
  return (
    <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

// Komponen Header
const Header = (props) => {
    const{image} = props
  return (
    <a href="#">
      <img src={image}
        alt="product"  className="p-8 rounded-t-lg"
      />
    </a>
  );
};

// Komponen Body
const Body = (props) => {
    const { nama } = props;
  return (
    <div className="px-5 pb-5 h-full" >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {nama}
        </h5>
        <p className="text-m text-white">
          HSR Wheel hadir dengan variasi desain dan model hingga saat ini terus
          mengikuti perkembangan zaman. 
        </p>
      </a>
    </div>
  );
};

// Komponen Footer
const Footer = (props) => {
    const { price, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-3xs font-bold text-white"> {price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
      <Button className="bg-red-600" onClick={handleAddToCart ? () => handleAddToCart(id) : null}>Add to Cart</Button>
    </div>
  );
};

// Assign Header, Body, dan Footer ke CardProducts
CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
