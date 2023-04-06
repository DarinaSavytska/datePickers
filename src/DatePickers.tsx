import React, { useState } from 'react';
import { DatePicker as antdDatePicker } from 'antd';

import { CustomProvider, DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.css';
import './styles.scss';
import './custom-theme.less';

// import subDays from 'date-fns/subDays';
// import startOfWeek from 'date-fns/startOfWeek';
// import endOfWeek from 'date-fns/endOfWeek';
// import addDays from 'date-fns/addDays';
// import startOfMonth from 'date-fns/startOfMonth';
// import endOfMonth from 'date-fns/endOfMonth';
// import addMonths from 'date-fns/addMonths';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import ua from 'date-fns/locale/uk';
import { registerLocale } from 'react-datepicker';
registerLocale('ua', ua);

const { RangePicker } = antdDatePicker;

type CalendarLocaleType = {
  sunday?: string;
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  ok?: string;
  today?: string;
  yesterday?: string;
  hours?: string;
  minutes?: string;
  seconds?: string;
  formattedMonthPattern?: string;
  formattedDayPattern?: string;

  // for DateRangePicker
  last7Days?: string;
};

const DatePickers: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const local: CalendarLocaleType = {
    sunday: 'неділя',
    last7Days: 'останні 7 днів',
    minutes: 'хвилини',
    hours: 'години',
    ok: 'Окі-докі',
  };

  const [is12Value, setIs12Value] = useState<boolean>(true);

  return (
    <div style={{ position: 'relative' }}>
      <p style={{ margin: '20px' }}>Hello DatePicker</p>

      <div style={{ margin: '20px', color: 'red' }}>
        <p>Hello, I'm your default DatePicker for desktop by antd</p>
        <RangePicker showTime />
      </div>

      <p style={{ textAlign: 'center' }}>Select time format</p>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => setIs12Value(true)}>12</button>
        <button onClick={() => setIs12Value(false)}>24</button>
      </div>

      <div style={{ margin: '20px', color: 'yellowgreen' }}>
        <p>Hello, I'm DatePicker by rsuite</p>
        {/* https://rsuitejs.com/components/date-range-picker/ */}
        {/* <p>Частичная локализация, 24 часа формат</p> */}
        <CustomProvider theme='light'>
          <DateRangePicker
            showMeridian={is12Value}
            format={is12Value ? 'yyyy-MM-dd hh:mm aa' : 'yyyy-MM-dd HH:mm'} // 24 формат отображения
            defaultCalendarValue={[
              new Date('2022-02-01 00:00'),
              new Date('2022-03-01 23:59'),
            ]}
            editable={false}
            locale={local}
            // renderExtraFooter={() => {
            //   return <button>ololo</button>
            // }}
            // renderTitle={date => {
            //   console.log('date', date);
            //   return <p>Травень</p>;
            // }}
            // showOneCalendar //для времени не работает
          />
        </CustomProvider>
        {/* <p>12 часов формат</p>
        <DateRangePicker
          // ranges={predefinedRanges} // проблемы с типами
          showMeridian
          format='yyyy-MM-dd hh:mm aa' // 12 формат отображения
          defaultCalendarValue={[
            new Date('2022-02-01 00:00'),
            new Date('2022-03-01 23:59'),
          ]}
          editable={false}
        /> */}
      </div>

      <div style={{ color: 'red' }}>
        <p>Hello, I'm DatePicker, Crafted by HackerOne</p>
        https://reactdatepicker.com/
        <DatePicker
          style={{ dislay: 'flex', width: 'auto' }}
          selected={startDate}
          onChange={date => setStartDate(date)}
          timeInputLabel='Time:'
          dateFormat='MM/dd/yyyy H:mm'
          showTimeInput
          startDate={startDate}
          endDate={endDate}
          selectsStart
          disabledKeyboardNavigation
          locale='ua'
        />
        <DatePicker
          style={{ dislay: 'flex', width: 'auto' }}
          selected={endDate}
          onChange={date => setEndDate(date)}
          timeInputLabel='Time:'
          dateFormat='MM/dd/yyyy h:mm aa'
          showTimeInput
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          locale='ua'
          disabledKeyboardNavigation
        />
      </div>
    </div>
  );
};

export default DatePickers;
