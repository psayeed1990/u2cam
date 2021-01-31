import React, { useEffect, useState } from 'react';
import { apiCall } from '../../../api';
import AdminLayout from '../../../layouts/AdminLayout';
import { useRouter } from 'next/router';

const SingleUser = ()=>{
    const [user, setUser] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(()=>{
        const getUser = async()=>{
            const data = await apiCall('GET', `users/${id}`, 'get user');

            setUser(data);

        }

        getUser();
    },[])

    return(
        <AdminLayout>
            <div className="content">
            {user?.name}
            {user?.email}
            {user?.phone}
            {user?.role}
            </div>
        </AdminLayout>
    )
}

export default SingleUser;