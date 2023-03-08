import React, { useState } from 'react';
import { DatePicker as antdDatePicker } from 'antd';

import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.css';
import './styles.scss';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const { RangePicker } = antdDatePicker;

const DatePickers: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <p>Hello DatePicker</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <p>Hello, I'm your default DatePicker for desktop by antd</p>
        <RangePicker showTime />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <p>Hello, I'm DatePicker by rsuite</p>
        {/* https://rsuitejs.com/components/date-range-picker/ */}
        <DateRangePicker
          showMeridian
          format='yyyy-MM-dd HH:mm:ss'
          defaultCalendarValue={[
            new Date('2022-02-01 00:00:00'),
            new Date('2022-03-01 23:59:59'),
          ]}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <p>Hello, I'm DatePicker, Crafted by HackerOne</p>
        {/* https://reactdatepicker.com/ */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            timeInputLabel='Time:'
            dateFormat='MM/dd/yyyy h:mm aa'
            showTimeInput
            startDate={startDate}
            endDate={endDate}
            selectsStart
          />
          <p>to</p>
          <DatePicker
            selected={endDate}
            onChange={date => setEndDate(date)}
            timeInputLabel='Time:'
            dateFormat='MM/dd/yyyy h:mm aa'
            showTimeInput
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </div>
      </div>
    </div>
  );
};

export default DatePickers;
