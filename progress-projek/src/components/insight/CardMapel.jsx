
import { Link } from "react-router-dom";

const CardMapel = (props) => {
    return (
        <div class="col-lg-3 ms-3 p-2 mt-3 cardBiru position-relative">
            <h6 class="pelajaran">{props.namaMapel}</h6>
            <Link to={
                {
                pathname : `/course/${props.id}`
            }
            }>
                <button class="btn buttonKuning d-flex justify-content-center position-absolute">
                    <i class="bx bxs-chevron-right"></i>
                </button>
            </Link>
        </div>
    )
}
export default CardMapel;