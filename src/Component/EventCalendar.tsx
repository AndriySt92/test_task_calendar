import React, { FC } from 'react'
import { IEvent } from '../models/IEvent'
import { Calendar } from 'antd'
import { formatDate } from '../utils/formatDate'
import { Moment } from 'moment'

interface EventCalendarProps {
  events: IEvent[]
}

export const EventCalendar: FC<EventCalendarProps> = ({ events }) => {
  function dateCellRender(value: Moment) {
    const formatedDate = formatDate(value)
    const currentDayEvents = events.filter((ev) => ev.date === formatedDate)
    return (
      <ul className="events">
        {currentDayEvents.map((item) => (
          <div key={item.description} style={{wordWrap:"break-word"}}>{item.description}</div>
        ))}
      </ul>
    )
  }
  return (
    <>
      <Calendar style={{ width: '80%' }} dateCellRender={dateCellRender} />
    </>
  )
}
