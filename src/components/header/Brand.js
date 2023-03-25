import brand from "../../img/brand.svg";
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/">
            <img className="logotipo" src={brand} alt="Tienda Hard" title="Tienda Hard"></img>
        </Link>
    )
}

export default Brand;