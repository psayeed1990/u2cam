import React, { useEffect, useState } from "react";
import { apiCall } from "../../../../api";
import AdminLayout from "../../../../layouts/AdminLayout";
import { useRouter } from "next/router";

const SingleUser = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const getUser = async () => {
        const data = await apiCall("get", `users/${id}`, "get user");

        setUser(data.data.data);
      };

      getUser();
    }
  }, [id]);

  return (
    <AdminLayout>
      <div className="content">
        {user?.name}
        {user?.email}
        {user?.phone}
        {user?.role}
      </div>
    </AdminLayout>
  );
};

export default SingleUser;
