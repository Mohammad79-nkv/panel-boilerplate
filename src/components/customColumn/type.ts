import { Moment } from 'moment';
import React from 'react';
import { CustomColItem } from 'types';

export interface FilterByDateProps {
  onChangeFromDate: (value: Moment | null, value2: Moment | null) => void;
  onChangeToDate: (value: Moment | null, value2: Moment | null) => void;
  handleSearch: () => void;
  handleReset: () => void;
}

export interface FilterBySearchProps {
  handleSearch: () => void;
  handleReset: () => void;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  placeholder?: string;
  isFilterDropdownVisible: boolean;
  type?: 'mobile';
}

export interface FilterBySliderProps {
  handleSearch: () => void;
  handleReset: () => void;
  setSelectedKeys: any;
  min: number;
  max: number;
}

export interface CustomColumnProps {
  args: any;
  setArgs: React.Dispatch<React.SetStateAction<any>>;
  Col: Array<CustomColItem>;
}

export interface FilterByDropDownProps {
  handleSearch: () => void;
  handleReset: () => void;
  onChangeInput: (event: string) => void;
  onFocusInput: (event: string) => void;
  defaultValue?: string;
  placeholder?: string;
  isFilterDropdownVisible: boolean;
  optionData: { value: string; id: string | number }[];
  onSearch: (event: string) => void;
  loading?: boolean;
}
