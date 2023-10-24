import React, { useEffect, useState } from 'react';
import { FilterSearchContainer } from './styles';
import { Button, Select } from 'antd';
import messages from './messages';
import { useTranslation } from 'react-i18next';
import { FilterByDropDownProps } from './types';
import WhiteSpace from '@components/WhiteSpace';

const { Option } = Select;
const FilterByDropDown = (props: FilterByDropDownProps) => {
  const [inputValue, setInputValue] = useState<undefined>(undefined);
  const {
    handleSearch,
    handleReset,
    onChangeInput,
    placeholder,
    onSearch,
    onFocusInput,
  } = props;
  const inputRef = React.useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (props.isFilterDropdownVisible) {
      setTimeout(() => {
        if (inputRef.current) {
          const input = inputRef.current as HTMLInputElement;
          input?.focus();
        }
      }, 10);
    }
  }, [props.isFilterDropdownVisible]);

  return (
    <FilterSearchContainer>
      <Select
        style={{ width: '100%' }}
        loading={props.loading}
        placement={'topLeft'}
        showSearch
        autoFocus
        allowClear
        // mode="multiple"
        value={inputValue}
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={(value: any) => {
          setInputValue(value);
          onChangeInput(value);
        }}
        onFocus={(value: any) => {
          onFocusInput(value);
        }}
        onSearch={value => onSearch(value)}
        ref={inputRef}
      >
        {(props.optionData || []).map(item => (
          <Option key={item.id} value={item.id}>
            {item.value}
          </Option>
        ))}
      </Select>
      <WhiteSpace size={'sm'} />
      <Button
        type="primary"
        data-testid={'confirm-btn'}
        onClick={() => {
          handleSearch();
        }}
        size="small"
      >
        {t(messages.confirm)}
      </Button>
      <Button
        data-testid={'dismiss-btn'}
        onClick={e => {
          setInputValue(undefined);
          handleReset();
        }}
        size="small"
        style={{ border: 'none', marginRight: 5 }}
      >
        {t(messages.dismiss)}
      </Button>
    </FilterSearchContainer>
  );
};

export default FilterByDropDown;
