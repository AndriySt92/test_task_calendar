import React, { FC, useState, useEffect } from 'react'
import { Calendar, Row, Modal, Button } from 'antd'
import { Moment } from 'moment'
import { FormEvent } from '../Component/FormEvent'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IEvent } from '../models/IEvent'
import { useActions } from '../hooks/useActions'
import { EventCalendar } from '../Component/EventCalendar'

function onPanelChange(value: Moment) {
  console.log(value.format('YYYY-MM-DD'))
}

export const Event: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { guests, events } = useTypedSelector((state) => state.event)
  const { user } = useTypedSelector((state) => state.auth)
  const { getGuests, createEvent, getEvents} = useActions()

  useEffect(() => {
    getGuests()
    getEvents(user.username)
  }, [])

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const addNewEvent = (event: IEvent) => {
    setIsModalVisible(false)
    createEvent(event)
    console.log(event)
  }
  return (
    <div style={{ height: 'fit-content' }}>
      <Row justify="center" align="middle" className="h100">
        <EventCalendar events={events} />
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          footer={null}
          onCancel={() => setIsModalVisible(false)}>
          <FormEvent guests={guests} submit={addNewEvent} />
        </Modal>
      </Row>
      <Row justify="center" align="middle">
        <Button type="primary" onClick={showModal} style={{marginBottom: '100px'}}>
          Open Modal
        </Button>
      </Row>
    </div>
  )
}
