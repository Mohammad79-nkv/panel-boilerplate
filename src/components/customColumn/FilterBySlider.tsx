import React, { useEffect, useState } from 'react';
import { FilterAmountContainer } from './styles';
import { Button, Col, InputNumber, Row, Slider } from 'antd';
import messages from './messages';
import { useTranslation } from 'react-i18next';
import { FilterBySliderProps } from './types';

const FilterBySlider = (props: FilterBySliderProps) => {
  const { handleSearch, handleReset, setSelectedKeys, min, max } = props;
  const [minAmount, setMinAmount] = useState<number>(min);
  const [maxAmount, setMaxAmount] = useState<number>(max);

  useEffect(() => {
    setSelectedKeys([minAmount, maxAmount]);
  }, [minAmount, maxAmount, setSelectedKeys]);

  const { t } = useTranslation();

  return (
    <FilterAmountContainer>
      <Row justify={'space-between'}>
        <Col>
          <InputNumber
            data-testid={'minInput'}
            min={min}
            max={max}
            step={1}
            value={minAmount}
            onChange={value => {
              setMinAmount(
                value && typeof value === 'number' ? value : minAmount,
              );
            }}
          />
        </Col>
        <Col>
          <InputNumber
            data-testid={'maxInput'}
            min={min}
            max={max}
            step={1}
            value={maxAmount}
            onChange={value => {
              setMaxAmount(
                value && typeof value === 'number' ? value : maxAmount,
              );
            }}
          />
        </Col>
      </Row>
      <Slider
        range
        tooltipVisible={false}
        min={min}
        max={max}
        step={1}
        value={[minAmount, maxAmount]}
        onChange={range => {
          setSelectedKeys([minAmount, maxAmount]);
          setMinAmount(range[0]);
          setMaxAmount(range[1]);
        }}
      />
      <Button
        type="primary"
        onClick={handleSearch}
        size="small"
        data-testid={'confirmBtn'}
      >
        {t(messages.confirm)}
      </Button>
      <Button
        data-testid={'dismissBtn'}
        onClick={() => {
          setMaxAmount(max);
          setMinAmount(min);
          handleReset();
        }}
        size="small"
        style={{ border: 'none', marginRight: 5 }}
      >
        {t(messages.dismiss)}
      </Button>
    </FilterAmountContainer>
  );
};

export default FilterBySlider;
