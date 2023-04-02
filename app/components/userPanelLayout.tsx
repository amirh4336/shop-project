import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const UserPanelLayout = ({ children }: Props) => {
  return <div className="w-full text-2xl">{children}</div>;
};

export default UserPanelLayout;
