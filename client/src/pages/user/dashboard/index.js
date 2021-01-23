import withAuth from "../../../hooks/withAuth";
import WebLayout from "../../../layouts/WebLayout";

const Dashboard = ()=>{
    return(
        <WebLayout>
        <h1 className="heading">Dashboard</h1>

        </WebLayout>
    )
}

export default withAuth(Dashboard);