import React, { useState } from 'react';
import { FilterDatePickerContainer } from './styles';
// import JalaliDatePicker from '../JalaliDatePicker';
import messages from './messages';
import { Button } from 'antd';
import { Moment } from 'moment';
import { useTranslation } from 'react-i18next';
import { FilterByDateProps } from './type';
import WhiteSpace from '../WhiteSpace';
// import WhiteSpace from '@components/WhiteSpace';

const FilterByDate = (props: FilterByDateProps) => {
  const { t } = useTranslation();
  const { handleSearch, handleReset, onChangeFromDate, onChangeToDate } = props;
  const [fromDate, setFromDate] = useState<Moment | null>(null);
  const [toDate, setToDate] = useState<Moment | null>(null);

  return (
    <FilterDatePickerContainer>
      {/* <JalaliDatePicker
        disabled={false}
        fieldValue={fromDate}
        onChange={value => {
          onChangeFromDate(value, toDate);
          setFromDate(value);
        }}
        placeholder={t(messages.fromDate)}
      /> */}
      <WhiteSpace size={'sm'} />
      <JalaliDatePicker
        disabled={false}
        fieldValue={toDate}
        onChange={value => {
          onChangeToDate(value, fromDate);
          setToDate(value);
        }}
        placeholder={t(messages.toDate)}
      />
      <WhiteSpace size={'sm'} />

      <Button
        data-testid={'confirm-btn'}
        type="primary"
        onClick={handleSearch}
        size="small"
      >
        {t(messages.confirm)}
      </Button>
      <Button
        data-testid={'dismiss-btn'}
        onClick={() => {
          setFromDate(null);
          setToDate(null);
          handleReset();
        }}
        size="small"
        type={'link'}
        style={{ border: 'none', marginRight: 5 }}
        disabled={!fromDate && !toDate}
      >
        {t(messages.dismiss)}
      </Button>
    </FilterDatePickerContainer>
  );
};

export default FilterByDate;
