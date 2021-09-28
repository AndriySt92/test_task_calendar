import React, { FC, useState } from 'react'
import { Form, Input, Button, Row, Alert } from 'antd'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { rules } from '../utils/rules'

export const LoginForm: FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { error, isLoading } = useTypedSelector((state) => state.auth)
  const { login } = useActions()

  const onFinish = (value: { password: string; username: string }) => {
    login(value)
  }

  return (
    <Row justify="center" align="middle" className="h100">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        className="login_form">
        <Form.Item
          label="Username"
          name="username"
          rules={[rules.require('Please input your username!')]}>
          <Input value={username} onChange={(e) => setUsername(e.currentTarget.value)} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[rules.require('Please input your password!')]}>
          <Input.Password value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
        </Form.Item>
        {error && <Alert message={error} type="error" style={{ margin: '0px 0px 24px 10px' }} />}
        <Row justify="start">
          <Form.Item wrapperCol={{ offset: 3, span: 16 }} style={{ marginBottom: 0 }}>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Submit
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </Row>
  )
}
