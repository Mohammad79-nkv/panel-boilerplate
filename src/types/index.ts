export interface CustomColItem extends ColumnType<any> {
  search?: {
    name: string;
    defaultValue?: string;
    placeholder?: string;
    type?: 'mobile';
  };
  dropdown?: {
    id?: string;
    name: string;
    defaultValue?: string;
    placeholder?: string;
    optionData?: { value: string; id: string | number }[];
    handleSearch: (value: any) => void;
    handleChange: (value: any) => void;
    handleFocus?: (value: any) => void;
    loading?: boolean;
  };
  date?: {
    name?: string;
    fromDate: string;
    toDate: string;
  };
  slider?: {
    min: {
      name: string;
      value: number;
    };
    max: {
      name: string;
      value: number;
    };
  };
  hasAccess?: boolean;
}
