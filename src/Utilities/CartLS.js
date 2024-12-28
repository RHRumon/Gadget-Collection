import { ToastContainer, toast } from 'react-toastify';

let getStoredGadgets = () =>{
    let storedGadgetStr = localStorage.getItem('gadget-list');

    if(storedGadgetStr){
        let storedGadgets = JSON.parse(storedGadgetStr);
        return storedGadgets;
    }
    else{
        return [];
    }
}

let addGadgetToLS = (id) =>{
    let storedGadget = getStoredGadgets();
    if(storedGadget.includes(id)){
        toast("Already Added to Cart");
    }
    else{
        storedGadget.push(id);
        let storedGadgetStr = JSON.stringify(storedGadget);

        localStorage.setItem('gadget-list', storedGadgetStr);
        toast('Added to Cart');
    }
}

export {getStoredGadgets, addGadgetToLS}