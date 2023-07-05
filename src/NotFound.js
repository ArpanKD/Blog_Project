import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page that you are looking for does not exist on this website. You may have accidentally mistype the page address, or followed an expired link. Anyway, we will help you get back on track. Please click the link to <Link to='/'>redirct hompage...</Link></p>
            
        </div>
    );
}
 
export default NotFound;