import { Fragment, useEffect, useState } from "react";
import Button from "../Component/Element/Button";
import CardProducts from "../Component/Fragment/CardProduct";
import Counter from "../Component/Fragment/Counter";
import { use } from "react";
import { getProducts } from "../services/products.service";
import { data } from "autoprefixer";

const products = [
        { 
            id: 1, 
            nama: "Velg HSR",
            price: 1000000,
            image: "/images/velg-1.jpg",
            Descrip: 'HSR Wheel juga hadir dengan variasi desain dan model yang hingga saat ini terus mengikuti perkembangan zaman. Tersedia juga varian ukuran velg ring 14 sampai ring 20.',
            
        },
        { 
            id: 2, 
            nama: "Velg lama",
            price: 500000,
            image: "/images/velg-1.jpg",
            Descrip: 'HSR Wheel juga hadir dengan variasi  mengikuti perkembangan zaman. Tersedia juga varian ukuran velg ring 14 sampai ring 20.',
            
        },
        { 
            id: 3, 
            nama: "Velg baru",
            price: 8000000,
            image: "/images/velg-1.jpg",
            Descrip: 'HSR Wheel juga hadir dengan variasi desain dan model yang hingga saat ini terus mengikuti perkembangan zaman. ',
            
        },
    ];

const email = localStorage.getItem("email");

const ProductsPage = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, [])

    useEffect(() => {
        getProducts((data) => {
            console.log(data);
        });
    }, [])
    useEffect(() => {
        if (cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + (product.price * item.qty);
            } ,0);
            setTotalPrice(sum);
            localStorage.setItem("cart", JSON.stringify(cart));
        }

    } , [cart])
    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    }

    const handleAddToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(
                cart.map((item) => item.id === id ? {   ...item, qty: item.qty + 1 } : item)
            )
        } else {
            setCart([...cart, { id, qty: 1 }])
        }
    } 
    return (
        <Fragment>
        <div className="fex justify-end h-20 bg-red-600 text-white items-center px-10">
            {email ? <h1 className="text-2xl font-bold">Selamat Datang 🚀 {email}</h1> : null}
            <Button className="ml-5 bg-gray-800"onClick={handleLogout}>
                Logout
            </Button>
        </div>
        <div className="flex justify-center  py-5">
           <div className="w-4/6 flex flex-wrap">
           {products.map((product) => (
            <CardProducts key={product.id}>
            <CardProducts.Header image= {product.image} />
            <CardProducts.Body nama = {product.nama}>
                <p>{product.Descrip}</p>
            </CardProducts.Body> 
            <CardProducts.Footer 
            price= {product.price}
            id={product.id}
            handleAddToCart={handleAddToCart}/>
            </CardProducts> 
            ))}
            </div>  
            <div className="w-2/6">
            <h1 className="text-3xl font-bold text-red-600 mb-2 ml-5">Cart</h1>
           
            <table className="text-left table-auto border-separate border border-spacing-x-5">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                        const product = products.find((product) => product.id === item.id);
                        if (!product) {
                            return null; // Jika produk tidak ditemukan, jangan render baris
                        }
                        return (
                            <tr key={item.id}>
                                <td>{product.nama}</td>
                                <td>{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                                <td>{item.qty}</td>
                                <td>{(item.qty * product.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                            </tr>
                        );
                    })}
                    <tr>
                        <td colSpan={3}> <b>Total Price</b></td>
                        <td><b>{totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</b></td>
                    </tr>
                </tbody>
            </table>
            </div>  
        </div>
        {/* <div className="mt-5 flex justify-center mb-5">
            <Counter></Counter>
        </div> */}
        </Fragment>
    );
};

export default ProductsPage;