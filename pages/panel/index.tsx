import {useState ,useEffect} from 'react';
import UserPanelLayout from "../../app/components/userPanelLayout";
import { NextPageWithLayout } from "../_app";

const Panel: NextPageWithLayout = () => {
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  

  if(loading) return <div>Loading ...</div>

  return (
    <div>
      <h1>User Dashboard</h1>
    </div>
  );
};

Panel.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;

export default Panel;
