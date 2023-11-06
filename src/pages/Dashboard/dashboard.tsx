import { useTranslation } from 'react-i18next';
import { Table } from 'antd';
import messages from './messages';
import useTableColumns from './TableColumns';
import { useState } from 'react';

// const customerService = new CustomerService();

function Dashboard() {
  const [args, setArgs] = useState<any>({
    page: 0,
    size: 10,
  });
  const { t } = useTranslation();

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = useTableColumns({ args, setArgs });

  return <Table dataSource={dataSource} columns={columns} />;
}
export default Dashboard;
