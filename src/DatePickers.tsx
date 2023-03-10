import React, { useState } from 'react';
import { DatePicker as antdDatePicker } from 'antd';

import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.css';
import './styles.scss';
import subDays from 'date-fns/subDays';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import addDays from 'date-fns/addDays';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import addMonths from 'date-fns/addMonths';

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

  
// const predefinedRanges = [
//   {
//     label: 'Today',
//     value: [new Date(), new Date()],
//     placement: 'left'
//   },
//   {
//     label: 'Yesterday',
//     value: [addDays(new Date(), -1), addDays(new Date(), -1)],
//     placement: 'left'
//   },
//   {
//     label: 'This week',
//     value: [startOfWeek(new Date()), endOfWeek(new Date())],
//     placement: 'left'
//   },
//   {
//     label: 'Last 7 days',
//     value: [subDays(new Date(), 6), new Date()],
//     placement: 'left'
//   },
//   {
//     label: 'Last 30 days',
//     value: [subDays(new Date(), 29), new Date()],
//     placement: 'left'
//   },
//   {
//     label: 'This month',
//     value: [startOfMonth(new Date()), new Date()],
//     placement: 'left'
//   },
//   {
//     label: 'Last month',
//     value: [startOfMonth(addMonths(new Date(), -1)), endOfMonth(addMonths(new Date(), -1))],
//     placement: 'left'
//   },
//   {
//     label: 'This year',
//     value: [new Date(new Date().getFullYear(), 0, 1), new Date()],
//     placement: 'left'
//   },
//   {
//     label: 'Last year',
//     value: [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear(), 0, 0)],
//     placement: 'left'
//   },
//   {
//     label: 'All time',
//     value: [new Date(new Date().getFullYear() - 1, 0, 1), new Date()],
//     placement: 'left'
//   },
//   {
//     label: 'Last week',
//     closeOverlay: false,
//     value: value => {
//       const [start = new Date()] = value || [];
//       return [
//         addDays(startOfWeek(start, { weekStartsOn: 0 }), -7),
//         addDays(endOfWeek(start, { weekStartsOn: 0 }), -7)
//       ];
//     },
//     appearance: 'default'
//   },
//   {
//     label: 'Next week',
//     closeOverlay: false,
//     value: value => {
//       const [start = new Date()] = value || [];
//       return [
//         addDays(startOfWeek(start, { weekStartsOn: 0 }), 7),
//         addDays(endOfWeek(start, { weekStartsOn: 0 }), 7)
//       ];
//     },
//     appearance: 'default'
//   }
// ];


  return (
    <div style={{ position: 'relative' }}>
      <p style={{ margin: '20px' }}>Hello DatePicker</p>

      <div style={{ margin: '20px', color: 'red' }}>
        <p>Hello, I'm your default DatePicker for desktop by antd</p>
        <RangePicker showTime disabled />
      </div>

      <div style={{ margin: '20px', color: 'yellowgreen' }}>
        <p>Hello, I'm DatePicker by rsuite</p>
        {/* https://rsuitejs.com/components/date-range-picker/ */}
        <p>Частичная локализация, 24 часа формат</p>
        <DateRangePicker
          // showMeridian
          format='yyyy-MM-dd HH:mm' // 24 формат отображения
          defaultCalendarValue={[
            new Date('2022-02-01 00:00'),
            new Date('2022-03-01 23:59'),
          ]}
          editable={false}
          locale={local}
          // showOneCalendar //для времени не работает
        />
        <p>12 часов формат</p>
        <DateRangePicker
          // ranges={predefinedRanges} // проблемы с типами
          showMeridian
          format='yyyy-MM-dd hh:mm aa' // 12 формат отображения
          defaultCalendarValue={[
            new Date('2022-02-01 00:00'),
            new Date('2022-03-01 23:59'),
          ]}
          editable={false}
        />
      </div>

      <div style={{ color: 'red' }}>
        <p>Hello, I'm DatePicker, Crafted by HackerOne</p>
        {/* https://reactdatepicker.com/ */}
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
