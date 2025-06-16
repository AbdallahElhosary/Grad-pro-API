import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const notify = (text, type) => {
    if (type === "error") {
        toast.error(text, { position: "top-center" })
    } else if (type === "success") {
        toast.success(text, { position: "top-center" })
    }
    else {
        toast.warn(text, { position: "top-center" })
    }

};

export default notify