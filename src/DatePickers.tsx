import React from 'react';
import { DatePicker as antdDatePicker } from 'antd';

const { RangePicker } = antdDatePicker;

const DatePickers: React.FC = () => {
  return (
    <div>
      <p>Hello DatePicker</p>
      <div>
        <p>Hello, I'm DatePicker for desktop by antd</p>
        <RangePicker showTime />
      </div>
    </div>
  );
};

export default DatePickers;
