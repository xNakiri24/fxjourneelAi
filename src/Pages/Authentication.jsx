import Disclaimer from "../component/Disclaimer";
import Login from "../component/Login";
import './pagesCSS/authentication.css';



function Authentication(){

return(
<>
<div className="authentication">
    
        <Disclaimer />
        <Login />
 
</div>
</> 
)
}
export  default Authentication;