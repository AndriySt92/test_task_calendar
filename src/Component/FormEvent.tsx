import React, { useState, FC } from 'react'
import { Form, Input, Button, Row, DatePicker, Select } from 'antd'
import { rules } from '../utils/rules'
import { IEvent } from '../models/IEvent'
import { IUser } from '../models/IUser'
import { formatDate } from '../utils/formatDate'
import { Moment } from 'moment'
import { useTypedSelector } from '../hooks/useTypedSelector'

interface FormEventProps {
  submit: (event: IEvent) => void
  guests: IUser[]
}

export const FormEvent: FC<FormEventProps> = ({ submit, guests }) => {
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    guest: '',
    description: '',
  })
  const [description, setDescription] = useState<string>('')
  const { user } = useTypedSelector((state) => state.auth)

  const selectDate = (date: Moment | null) => {
    if (date) {
      const formatedDate = formatDate(date)
      setEvent({ ...event, date: formatedDate })
    }
  }

  const handleChange = (value: string) => {
    setEvent({ ...event, guest: value })
  }

  const onFinish = () => {
    submit({ ...event, author: user.username, description })
  }

  return (
    <Row justify="center" align="middle">
      <Form name="basic" onFinish={onFinish}>
        <Form.Item
          label="Event date"
          name="date"
          rules={[rules.isDateAfter("You can't choose date in the past")]}>
          <DatePicker onChange={selectDate} />
        </Form.Item>

        <Form.Item
          label="Please choose guest"
          name="guest"
          rules={[rules.require('Please choose guest!')]}>
          <Select defaultValue={guests[0].username} onChange={handleChange}>
            {guests.map((guest, index) => (
              <Select.Option value={guest.username} key={`${index}_${guest.username}`}>
                {guest.username}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Event description"
          name="description"
          rules={[rules.require('Please input description of event!')]}>
          <Input value={description} onChange={(e) => setDescription(e.currentTarget.value)} />
        </Form.Item>
        <Row justify="center">
          <Form.Item wrapperCol={{ offset: 3, span: 16 }} style={{ marginBottom: 0 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </Row>
  )
}
