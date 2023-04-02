import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({children } : Props) => {
  return <div className="w-full text-2xl text-red-600">{children}</div>
}

export default AdminLayout