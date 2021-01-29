import AdminLayout from '../../../layouts/AdminLayout';
import { useEffect, useState } from 'react';
import { apiCall } from '../../../api';
import styles from './Users.module.css'
import Link from 'next/link';
import axios from 'axios';

const Users = (props)=>{

    return(
        <AdminLayout>
           
        <div className={styles.users}>
            <h1 className="heading">users</h1>
             {props.users?.map((user, index)=>{
                 return(
                     <div className={`${styles.user}`} key={user._id}>
                         
                         <p className={styles.listWrapper}>
                            
                            <span className={styles.left}>{index + 1}</span>
                            {/* <span className={styles.show1}><span className={styles.name}>ID:</span><span className={styles.value}>{user._id}</span></span><br /> */}
                            <span className={styles.show1}><span className={styles.name}>Name:</span><span className={styles.value}>{user.name}</span></span>
                            <span className={styles.show2}><span className={styles.name}>Email:</span><span className={styles.value}>{user.email}</span></span>
                           
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

export const getServerSideProps = async context =>{

    const response = await axios({
        method: 'get',
        url: 'http://localhost:8082/api/v1/users',
        headers: { cookie: context.req.headers.cookie }
    })

    return {props:{users: response.data.data.data}}

}

export default Users;