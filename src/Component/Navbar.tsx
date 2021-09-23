import React from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import { RouteNames } from '../router'

export const Navbar = () => {
  const { isAuth, user } = useTypedSelector((state) => state.auth)
  const history = useHistory()
  const { logout } = useActions()

  return (
    <div>
      <Layout.Header>
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          style={{ display: 'flex', justifyContent: 'end' }}>
          {isAuth ? (
            <>
              <Menu.Item key={1} onClick={logout} style={{ color: 'white', fontWeight: 600 }}>
                Logout
              </Menu.Item>
              <div style={{ margin: '0px 40px', fontSize: '20px', fontWeight: 500, color: 'aqua' }}>
                {user.username}
              </div>
            </>
          ) : (
            <Menu.Item
              key={1}
              onClick={() => history.push(RouteNames.LOGIN)}
              style={{ color: 'white', fontWeight: 600 }}>
              Login
            </Menu.Item>
          )}
        </Menu>
      </Layout.Header>
    </div>
  )
}
