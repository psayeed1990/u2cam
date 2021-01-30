import AdminLayout from '../../../layouts/AdminLayout';
import { Fragment, useEffect, useState } from 'react';
import { apiCall } from '../../../api';
import styles from './Users.module.css'
import Link from 'next/link';
import axios from 'axios';
import DeletePopups from '../../../components/popups/deletePopups';

const Users = (props)=>{
    const [deleteDetails, setDeleteDetails] = useState({});
    const [showDelPopup, setShowDelPopup] = useState(null);

    const deleteData = async (id, b, c)=>{
        setDeleteDetails({id, b, c})
        setShowDelPopup(true);

    }

    return(
        <Fragment>
            {showDelPopup?<DeletePopups id={deleteDetails.id} b={deleteDetails.b} c={deleteDetails.c} /> : ''}
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
                                <span className="delete-btn cursor-pointer" onClick={()=>deleteData(user._id, user.name, user.email)} >Delete</span>
                            </span>
                         </p>
                         
                     </div>
                 )
             })}

             

        </div>


        
        </AdminLayout>
        </Fragment>
        
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