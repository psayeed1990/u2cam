import CommonUploads from '../../../components/commonDashboard/commonUploads';
import AdminLayout from '../../../layouts/AdminLayout';

const Uploads = () => {
  return (
    <AdminLayout>
      <CommonUploads user="admin" />
    </AdminLayout>
  );
};

export default Uploads;
