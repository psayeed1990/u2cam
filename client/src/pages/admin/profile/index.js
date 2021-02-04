import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import AdminLayout from "../../../layouts/AdminLayout";
import styles from "./Profile.module.css";

const Profile = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <AdminLayout>
      <div className="content">
        <div className={styles.profile}>
          <h1 className="heading">Profile</h1>
          <h5 className={styles.boldText}>{user?.name}</h5>
          <h5 className={styles.boldText}>{user?.email}</h5>
          <h5 className={styles.boldText}>{user?.phone}</h5>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Profile;
