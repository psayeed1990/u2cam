import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import UserLayout from "../../../layouts/UserLayout";

const Dashboard = ()=>{
    const [user, setUser] = useContext(UserContext);
    return(
        <UserLayout>
        <h1 className="heading">Dashboard</h1>
        <p>{user?.name}</p>

        </UserLayout>
    )
}

export default Dashboard;