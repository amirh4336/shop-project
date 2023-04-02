import AdminLayout from "../../app/components/adminLayout";
import { NextPageWithLayout } from "../_app";

const Admin: NextPageWithLayout = () => {
  return (
    <div>
      <h1>admin Panel</h1>
    </div>
  );
};

Admin.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;


export default Admin;
