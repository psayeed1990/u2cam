import AdminLayout from '../../../layouts/AdminLayout';
import { useEffect, useState } from 'react';
import { apiCall } from '../../../api';
import styles from './Users.module.css'
import Link from 'next/link';

const Users = ()=>{
    const [users, setUsers] = useState(null);

    useEffect(()=>{
        const getUsers = async()=>{
            const userList =  await apiCall('GET', 'users', 'get users');
            setUsers(userList)
        }

        getUsers();
    },[])
    return(
        <AdminLayout>
        <div className={styles.users}>
            <h1 className="heading">users</h1>
             {users?.map((user, index)=>{
                 return(
                     <div className={`${styles.user}`} key={user._id}>
                         
                         <p className={styles.listWrapper}>
                            
                            <span className={styles.left}>{index + 1}</span>
                            <span className={styles.show1}><span classname={styles.name}>Name:</span> <span classname={styles.value}>{user.name}</span></span>
                            <span className={styles.show2}><span classname={styles.name}>Email:</span> <span classname={styles.value}>{user.email}</span></span>
                           
                            <span className={styles.right}>
                                <span className="edit-btn cursor-pointer">Edit</span>
                                <span className="delete-btn cursor-pointer">Delete</span>
                            </span>
                         </p>
                         
                     </div>
                 )
             })}
        </div>
        
        </AdminLayout>
    )
}



export default Users;