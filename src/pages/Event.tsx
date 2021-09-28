import React, { FC, useState, useEffect } from 'react'
import { Row, Modal, Button } from 'antd'
import { FormEvent } from '../Component/FormEvent'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IEvent } from '../models/IEvent'
import { useActions } from '../hooks/useActions'
import { EventCalendar } from '../Component/EventCalendar'

export const Event: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { guests, events } = useTypedSelector((state) => state.event)
  const { user } = useTypedSelector((state) => state.auth)
  const { getGuests, createEvent, getEvents } = useActions()

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
    createEvent(event, user.username)
  }
  return (
    <div style={{ height: 'fit-content' }} className="h100">
      <Row justify="center" align="middle" style={{ height: '90vh' }}>
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
        <Button type="primary" onClick={showModal} style={{}}>
          Open Modal
        </Button>
      </Row>
    </div>
  )
}
