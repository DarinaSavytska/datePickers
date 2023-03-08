import React from 'react';
import { DatePicker as antdDatePicker } from 'antd';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.css';
import './styles.scss';

const { RangePicker } = antdDatePicker;

const DatePickers: React.FC = () => {
  return (
    <div>
      <p>Hello DatePicker</p>
      <div>
        <p>Hello, I'm DatePicker for desktop by antd</p>
        <RangePicker showTime />
      </div>
      <div>
        <p>Hello, I'm DatePicker by rsuite</p>
        <DateRangePicker
          showMeridian
          format='yyyy-MM-dd HH:mm:ss'
          defaultCalendarValue={[
            new Date('2022-02-01 00:00:00'),
            new Date('2022-03-01 23:59:59'),
          ]}
        />
      </div>
    </div>
  );
};

export default DatePickers;
