import { ToastContainer, toast } from 'react-toastify';

let getStoredWishGadgets = () =>{
    let storedWishGadgetStr = localStorage.getItem('wish-list');

    if(storedWishGadgetStr){
        let storedGadgets = JSON.parse(storedWishGadgetStr);
        return storedGadgets;
    }
    else{
        return [];
    }
}

let addWishGadgetToLS = (id) =>{
    let storedWishGadget = getStoredWishGadgets();
    if(storedWishGadget.includes(id)){
        toast("Already Added to Wishlist");
    }
    else{
        storedWishGadget.push(id);
        let storedWishGadgetStr = JSON.stringify(storedWishGadget);

        localStorage.setItem('wish-list', storedWishGadgetStr);
        toast('Added to WishList');
    }
}

export {getStoredWishGadgets, addWishGadgetToLS}