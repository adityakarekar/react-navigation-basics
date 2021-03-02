import {Link} from "react-router-dom";

function Notfound()
{
    return(
       <div>
           <h1>Error 404!! Page Not Found</h1>

           <Link to="/">Click here to home page </Link>
       </div>

    );
}
export default Notfound;