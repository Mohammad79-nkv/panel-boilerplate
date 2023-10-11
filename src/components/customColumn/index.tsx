import { FilterConfirmProps } from 'antd/es/table/interface';
import { useState } from 'react';
import moment from 'moment';
import { CustomColumnProps } from './type';

const CustomColumn = (props: CustomColumnProps) => {
  const [isFilterDropdownVisible, setIsFilterDropdownVisible] =
    useState<boolean>(false);
  const handleSearch = (
    confirm: (param?: FilterConfirmProps) => void,
    selectedKeys: any,
    args: any[],
    type: 'date' | 'dropdown' | '' = '',
  ) => {
    confirm();
    const argsObj = {};
    args.forEach((key, index) => {
      if (type === 'date') {
        if (index === 0) {
          if (selectedKeys[index]) {
            argsObj[key] = new Date(
              selectedKeys[index].set({
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0,
              }),
            ).getTime();
          } else {
            argsObj[key] = undefined;
          }
        } else if (index === 1) {
          const d = moment(
            selectedKeys[index]?.set({
              hour: 0,
              minute: 0,
              second: 0,
              millisecond: 0,
            }),
          ).add(1, 'days');
          if (selectedKeys[index]) {
            argsObj[key] = new Date(d.toISOString()).getTime();
          } else {
            argsObj[key] = undefined;
          }
        }
      } else {
        argsObj[key] = selectedKeys[index];
      }
    });
    props.setArgs({ ...props.args, page: 0, ...argsObj });
  };
};

export default CustomColumn;
