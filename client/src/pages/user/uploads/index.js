import CommonUploads from '../../../components/commonDashboard/commonUploads';
import UserLayout from '../../../layouts/UserLayout';

const Uploads = () => {
  return (
    <UserLayout>
      <CommonUploads user="user" />
    </UserLayout>
  );
};

export default Uploads;
