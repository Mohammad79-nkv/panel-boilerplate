import React, { useState } from 'react';
import FilterBySearch from './FilterBySearch';
import { FilterFilled, SearchOutlined } from '@ant-design/icons';
import FilterByDate from './FilterByDate';
import FilterBySlider from './FilterBySlider';
import moment from 'moment';
import _filter from 'lodash/filter';
import _map from 'lodash/map';
import { ColumnsType } from 'antd/lib/table';
import { CustomColumnProps } from './type';
import FilterByDropDown from './FilterByDropDown';
// import FilterByDropDown from '@components/CustomColumn/FilterByDropDown';

const CustomColumn = (props: CustomColumnProps) => {
  const [isFilterDropdownVisible, setIsFilterDropdownVisible] =
    useState<boolean>(false);

  const handleSearch = (
    confirm,
    selectedKeys,
    args,
    type: 'date' | 'dropdown' | '' = '',
  ) => {
    confirm();
    const argsObj = {};
    args.forEach((key, index) => {
      if (type === 'date') {
        if (index === 0) {
          // fromDate
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
          // toDate
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
      }

      // else if (type === 'dropdown') {
      //   argsObj[key] = selectedKeys[index]?.join(',') || undefined;
      // }
      else {
        argsObj[key] = selectedKeys[index];
      }
    });
    props.setArgs({
      ...props.args,
      page: 0,
      ...argsObj,
    });
  };

  const handleReset = (clearFilters, args) => {
    clearFilters();
    const argsObj = {};
    args.forEach(key => {
      argsObj[key] = undefined;
    });
    props.setArgs({
      ...props.args,
      page: 0,
      ...argsObj,
    });
  };

  const handleFilterDropDown = (item, isFilterDropdownVisible) => {
    if (item.search) {
      return {
        filterDropdown: ({
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters,
        }) => (
          <FilterBySearch
            type={item.search.type}
            isFilterDropdownVisible={isFilterDropdownVisible}
            placeholder={item.search.placeholder}
            defaultValue={item.search.defaultValue}
            onChangeInput={e => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
            }}
            handleSearch={() =>
              handleSearch(confirm, selectedKeys, [item.search.name])
            }
            handleReset={() => handleReset(clearFilters, [item.search.name])}
          />
        ),
        filterIcon: () => (
          <SearchOutlined
            style={{
              color: props.args[item.search.name] ? '#1890ff' : '#bfbfbf',
            }}
          />
        ),
      };
    } else if (item.dropdown) {
      return {
        filterDropdown: ({
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters,
        }) => (
          <FilterByDropDown
            isFilterDropdownVisible={isFilterDropdownVisible}
            placeholder={item.dropdown.placeholder}
            defaultValue={item.dropdown.defaultValue}
            optionData={item.dropdown.optionData}
            onSearch={item.dropdown.handleSearch}
            loading={item.dropdown.loading}
            onChangeInput={value => {
              item.dropdown.handleChange(value);
              setSelectedKeys(value ? [value] : []);
            }}
            onFocusInput={value => item.dropdown.handleFocus(value)}
            handleSearch={() =>
              handleSearch(
                confirm,
                selectedKeys,
                [item.dropdown.name],
                'dropdown',
              )
            }
            handleReset={() => handleReset(clearFilters, [item.dropdown.name])}
          />
        ),
        filterIcon: () => (
          <SearchOutlined
            style={{
              color: props.args[item.dropdown.name] ? '#1890ff' : '#bfbfbf',
            }}
          />
        ),
      };
    } else if (item.date) {
      return {
        filterDropdown: ({
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters,
        }) => (
          <FilterByDate
            onChangeFromDate={(val, fromDate) => {
              setSelectedKeys([val, fromDate]);
            }}
            onChangeToDate={(val, toDate) => {
              setSelectedKeys([toDate, val]);
            }}
            handleSearch={() =>
              handleSearch(
                confirm,
                selectedKeys,
                [item.date.fromDate, item.date.toDate],
                'date',
              )
            }
            handleReset={() =>
              handleReset(clearFilters, [item.date.fromDate, item.date.toDate])
            }
          />
        ),
        filterIcon: () => (
          <FilterFilled
            style={{
              color: props.args[item.date.fromDate] ? '#1890ff' : '#bfbfbf',
            }}
          />
        ),
      };
    } else if (item.slider) {
      return {
        filterDropdown: ({
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters,
        }) => (
          <FilterBySlider
            min={item.slider.min.value}
            max={item.slider.max.value}
            setSelectedKeys={setSelectedKeys}
            handleSearch={() =>
              handleSearch(confirm, selectedKeys, [
                item.slider.min.name,
                item.slider.max.name,
              ])
            }
            handleReset={() => {
              handleReset(clearFilters, [
                item.slider.min.name,
                item.slider.max.name,
              ]);
            }}
          />
        ),
        filterIcon: () => {
          return (
            <FilterFilled
              style={{
                color: props.args[item.slider.min.name || item.slider.max.name]
                  ? '#1890ff'
                  : '#bfbfbf',
              }}
            />
          );
        },
      };
    } else {
    }
  };

  const cols = _map(
    _filter(props.Col, item => {
      if (item.hasAccess === true || item.hasAccess === undefined) {
        return item;
      }
    }),
    function (item: ColumnsType) {
      return {
        ...item,
        onFilterDropdownVisibleChange: visible =>
          setIsFilterDropdownVisible(visible),
        ...handleFilterDropDown(item, isFilterDropdownVisible),
      };
    },
  );

  return cols as ColumnsType<object>;
};

export default CustomColumn;

