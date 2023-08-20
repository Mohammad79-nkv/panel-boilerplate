import { useTranslation } from "react-i18next"
import {  useQuery } from '@tanstack/react-query';
import {CustomerService} from '@/services/customer/customer-service'
import {useState , useEffect} from 'react'

const customerService = new CustomerService();

function Dashboard() {
    const {t} = useTranslation();
    const [usersList , setUsersList] = useState<any>([]);

    const query = useQuery(['usersList'], async () => await customerService.getListWithOutToken());

      useEffect(() => {
            console.log('usersList' , usersList , query)
            if(query?.data?.data?.length !== 0){
                setUsersList(query?.data?.data!) 
            }
      }, [query])
      

      if(query.isLoading) {
        return <>
        ...loading</>
      }
    return (
        <>
            dashboard
            <div>
                {t('app_title')}
            </div>
            {usersList?.length !== 0 &&   usersList?.map((item : any) => {
                return (
                    <>
                    {item.name}
                    </>
                )
            })}
        </>
    )
}
export default Dashboard


