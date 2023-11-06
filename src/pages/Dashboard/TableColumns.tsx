import { CustomColItem } from '@/types';
import { TableColumnTypes } from './types';
import CustomColumn from '@/components/customColumn';

const useTableColumns = (props: TableColumnTypes) => {
  const myCol: CustomColItem[] = [
    {
      title: '',
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

  return CustomColumn({
    args: props.args,
    setArgs: props.setArgs,
    Col: myCol,
  });
};

export default useTableColumns;
