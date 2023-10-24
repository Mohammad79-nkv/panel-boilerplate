import React, { useEffect, useState } from 'react';
import { FilterSearchContainer } from './styles';
import { Button, Input, message } from 'antd';
import messages from './messages';
import { useTranslation } from 'react-i18next';
import { toEnglishNumbers } from '@utils/utils';
import { FilterBySearchProps } from './types';
import WhiteSpace from '@components/WhiteSpace';

const FilterBySearch = (props: FilterBySearchProps) => {
  const [inputValue, setInputValue] = useState<string | undefined>(
    props.defaultValue || '',
  );
  const { handleSearch, handleReset, onChangeInput, placeholder } = props;
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
      <Input
        data-testid={'search-input'}
        ref={inputRef}
        autoFocus
        placeholder={placeholder}
        value={inputValue}
        onChange={e => {
          setInputValue(toEnglishNumbers(e.target.value));
          onChangeInput(e);
        }}
        onPressEnter={handleSearch}
      />
      <WhiteSpace size={'sm'} />
      <Button
        type="primary"
        data-testid={'confirm-btn'}
        onClick={() => {
          if (
            props.type === 'mobile' &&
            inputValue &&
            isNaN(Number(inputValue))
          ) {
            return message.error(t(messages.phoneNumberError));
          }
          handleSearch();
        }}
        size="small"
      >
        {t(messages.confirm)}
      </Button>
      <Button
        data-testid={'dismiss-btn'}
        onClick={e => {
          setInputValue('');
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

export default FilterBySearch;
