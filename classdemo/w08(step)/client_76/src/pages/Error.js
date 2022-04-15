import { Link } from "react-router-dom";
import Wrapper from "../assets/images/wrappers/Error_76";
import img from "../assets/images/Error.svg";

const Error_76 = () => {
    return (
        <Wrapper className='full-page'>
            <div>
                <img src={img} alt='not-found' />
                <h3>Ohh!! pages not found</h3>
                <p>we can't seem to find the page you're looking for</p>
                <Link to='/'>back home</Link>
            </div>
        </Wrapper>
    );
};
export default Error_76;
