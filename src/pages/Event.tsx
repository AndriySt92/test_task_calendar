import React, { FC } from 'react'
import { Calendar, Row } from 'antd'
import { Moment } from 'moment'

function onPanelChange(value: Moment) {
  console.log(value.format('YYYY-MM-DD'))
}

export const Event: FC = () => {
  return (
    <div className="h100">
      <Row justify='center' align='middle' className='h100'>
        <Calendar onPanelChange={onPanelChange} style={{width: '80%'}} />
      </Row>
    </div>
  )
}
