import "./pagesCSS/dashboard.css"
import Journal from "../component/Journal"
import Profile from "../component/Profile";
import Active from "../component/Active";

function Dashboard () {

    return(
        <>  <div className="main-dashboard">
            <Profile />
            <Active />
            <Journal />
            </div>
        </>
    )
}

export default Dashboard;