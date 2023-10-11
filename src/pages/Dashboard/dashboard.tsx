import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
// import {CustomerService} from '@/services/customer/customer-service'
import { useState, useEffect } from 'react';
import { Table } from 'antd';
import messages from './messages';

// const customerService = new CustomerService();

function Dashboard() {
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

  const columns = [
    {
      title: t(messages.title),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />;
}
export default Dashboard;
