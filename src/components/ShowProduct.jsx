import { useDispatch, useSelector } from "react-redux";
import { addToSelector } from "../redux/cartSlice";
import '../components/card.css';

const ShowProduct = ({ p }) => {
    const dispatch = useDispatch();
    const current = useSelector(state => state.current);
    const count = useSelector(state => state.count);

    return (
        <div id="card">
            <div className="col-md-3 mb-4">
                <div className="card bg-light shadow-sm h-100">
                    <div className="card-body">
                        <img src={p.images[0]} className="card-img-top" alt={p.title} />
                        <h5 className="card-title">{p.title}</h5>

                        <p className="card-text">
                            <strong>Price:</strong> {p.price}
                        </p>
                        <div className="card-text">
                            <strong>Description:</strong>
                            <br />
                            <span id="des">{p.description}</span>
                        </div>
                    </div>
                </div>
            </div>
            <br />

            <button onClick={() => dispatch(addToSelector({
                image: p.images[0],
                title: p.title,
                price: p.price,
                description: p.description
            }))}>
                Add To Cart
            </button>
        </div>
    );
}

export default ShowProduct;