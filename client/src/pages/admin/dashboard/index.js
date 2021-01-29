import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import AdminLayout from "../../../layouts/AdminLayout";
import styles from './AdminDashboard.module.css';

const AdminDashboard = ()=>{
    const [user, setUser] = useContext(UserContext);
    return(
        <AdminLayout>
       
        <div className={styles.dashboard}>
             <h1 className="heading">Dashboard</h1>
            <h5 className={styles.boldText}>{user?.name}</h5>
            <h5 className={styles.boldText}>{user?.email}</h5>
            <h5 className={styles.boldText}>{user?.phone}</h5>
        </div>

        

        </AdminLayout>
    )
}

export default AdminDashboard;