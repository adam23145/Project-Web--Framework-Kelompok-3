import { Link } from "react-router-dom";
import "../css/LandingPage.css";

const ListMateri = (props) => {
    return (

        <div class="borderclass2 mt-2 ms-2 ">
            <button className="custombutton" onClick={() => props.Materi(props.id_materi)}>
            <p class="text-white pt-1 fw-bold" >{props.nama}</p>
            </button>
        </div>)
}
export default ListMateri;