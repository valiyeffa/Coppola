import React from 'react'
import { useCart } from 'react-use-cart';
import { environment } from '../environments/environment';
import { FaHeart, FaTrash } from 'react-icons/fa';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';

const BasketCard = ({ item }) => {
    const { updateItemQuantity, removeItem } = useCart();

    return (
        <div className="card py-3">
            <ToastContainer
                position="top-center"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            <div className="row g-0">
                <div className="col-md-2">
                    <div className="card-img">
                        <img src={`${environment.baseUrl}${item.image.url}`} className="img-fluid" alt={item.title} />
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <div className="card-body-frst">
                            <h5 className="card-title">{item.title}</h5>
                            <p className='card-price'>${item.discountedPrice * item.quantity}</p>
                        </div>
                        {item.price == item.originalPrice ?
                            item.isProductNew == true ?
                                <p className="card-text">${item.discountedPrice}<span className='new-text'>New</span></p>
                                : <p className="card-text">${item.discountedPrice}</p>
                            :
                            <p className="card-text"><del className='sale'>${item.originalPrice}</del> ${item.discountedPrice} <span className='sale-text'>On Sale</span></p>
                        }
                        <div className="card-body-bottom">
                            <div className="card-quantity">
                                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn btn-dark'>-</button>
                                <span className='count'>{item.quantity}</span>
                                <button onClick={() => {
                                    if (item.quantity < 5) {
                                        updateItemQuantity(item.id, item.quantity + 1);
                                    } else {
                                        toast.error('Məhsul sayı max 5 ola bilər!', {
                                            position: "top-center",
                                            autoClose: 3500,
                                            hideProgressBar: false,
                                            closeOnClick: false,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: "light",
                                            transition: Bounce,
                                        });
                                    }
                                }} className='btn btn-dark'>+</button>
                            </div>
                            <div className="card-remove-fav">
                                <button className='btn fav-btn'><FaHeart /> Save</button>
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
                                            removeItem(item.id)
                                            Swal.fire({
                                                title: "Deleted!",
                                                text: "Your product has been deleted.",
                                                icon: "success"
                                            });
                                        }
                                    });
                                }} className='btn del-btn'><FaTrash /> Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketCard