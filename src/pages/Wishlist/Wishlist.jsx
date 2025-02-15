import React, { useContext } from 'react'
import { useWishlist } from 'react-use-wishlist';
import emptyGif from '../../../src/assets/images/empty-wishlist.gif'
import { Link } from 'react-router-dom';
import { environment } from '../../environments/environment';
import Swal from 'sweetalert2';
import { FaMoon, FaShoppingCart, FaTrash } from 'react-icons/fa';
import { useCart } from 'react-use-cart';
import { useTranslation } from 'react-i18next';
import { MdSunny } from 'react-icons/md';
import { ThemeContext } from '../../context/ThemeContext';

const Wishlist = () => {
    const { isWishlistEmpty, items, removeWishlistItem } = useWishlist();
    const { addItem, getItem } = useCart();
    const { t } = useTranslation();
    const [theme, setTheme] = useContext(ThemeContext);

    const handleAddToCart = (product) => {
        const cartItem = getItem(product.id);
        const quantity = cartItem ? cartItem.quantity : 0;

        if (cartItem && quantity >= 5) {
            Swal.fire({
                title: "Limit Exceeded",
                text: "You can't add more than 5 of the same movie to the cart!",
                icon: "warning",
                confirmButtonColor: "#3085d6",
            });
        } else {
            addItem({
                ...product,
                id: product._id,
                price: product.discountedPrice || product.price,
                originalPrice: product.price,
                isProductNew: product.isProductNew
            });
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Movie added to basket!",
                showConfirmButton: false,
                timer: 850
            });
        }
    };

    const topPage = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className='wishlist basket-page'>
            <div className="container-fluid">
                <p className='basket-title'>{t("shops.wishlist.wishBigTit")}</p>
                {isWishlistEmpty ? <div className='empty'>
                    <img src={emptyGif} alt="" />
                    <p className='h1'>{t("shops.wishlist.emptyWish")}</p>
                    <Link to="/movies-shop" onClick={topPage} className='btn btn-basket'>{t("shops.returnBtn")}</Link>
                </div> :
                    <div className="row">
                        <h2 className='basket-body_title border-bottom '>{t("shops.wishlist.wishTit")}</h2>
                        {items.map((item) => (
                            <div key={item.id} className="col-md-6">
                                <div className="basket-prod-sect">
                                    <div className="basket-body ">
                                        <div className="card py-3">
                                            <div className="row g-0">
                                                <div className="col-md-2">
                                                    <div className="card-img" style={{ borderRadius: '0' }}>
                                                        <img src={`${environment.baseUrl}${item.image.url}`} className="img-fluid" alt={item.title} />
                                                    </div>
                                                </div>
                                                <div className="col-md-10">
                                                    <div className="card-body">
                                                        <div className="card-body-frst">
                                                            <h5 className="card-title">{item.title}</h5>
                                                        </div>
                                                        {item.price == item.originalPrice ?
                                                            item.isProductNew == true ?
                                                                <p className="card-text">${item.discountedPrice}<span className='new-text'>{t("new")}</span></p>
                                                                : <p className="card-text">${item.discountedPrice}</p>
                                                            :
                                                            <p className="card-text"><del className='sale'>${item.originalPrice}</del> ${item.discountedPrice} <span className='sale-text'>{t("shops.basket.basketCard.onsale")}</span></p>
                                                        }
                                                        <p className="card-text">{item.category.name}</p>
                                                        <p className="card-text">{item.description.slice(0, 50)}...</p>
                                                        <div className="card-body-bottom">
                                                            <div className="card-remove-fav">
                                                                <button onClick={() => {
                                                                    handleAddToCart(item);
                                                                }} className='btn fav-btn'><FaShoppingCart /> {t("movieBlog.details.addBtn")}</button>
                                                                <button onClick={() => {
                                                                    Swal.fire({
                                                                        title: "Are you sure?",
                                                                        icon: "warning",
                                                                        showCancelButton: true,
                                                                        confirmButtonColor: "#3085d6",
                                                                        cancelButtonColor: "#d33",
                                                                        confirmButtonText: "Yes, delete it!"
                                                                    }).then((result) => {
                                                                        if (result.isConfirmed) {
                                                                            removeWishlistItem(item.id)
                                                                            Swal.fire({
                                                                                title: "Deleted!",
                                                                                text: "Your product has been deleted.",
                                                                                icon: "success"
                                                                            });
                                                                        }
                                                                    });
                                                                }} className='btn del-btn'><FaTrash /> {t("shops.basket.basketCard.del")}</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
            <div className="right-mini-sect">
                <button className='theme-btn' onClick={() => {
                    theme === "light" ? setTheme('dark') : setTheme('light');
                    theme === "light" ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
                }}>{theme === "light" ? <><FaMoon /> <span>Dark Mode</span> </> : <> <MdSunny /> <span>Light Mode</span></>}</button>
            </div>
        </div>
    )
}

export default Wishlist