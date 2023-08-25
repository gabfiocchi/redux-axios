import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { fetchUsers } from '../store/user.slice'
import Block from './layout/block'

const Content = ({ isLoggedIn, darkMode }) => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.user)

  const handleLogin = () => {
    dispatch(fetchUsers())
  }

  const handleClick = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users/1/posts',
    )

    console.log('response', response)
  }

  return (
    <Block darkMode={darkMode} gridArea='content'>
      <p>user: {selector.data.name}</p>
      <button onClick={handleLogin} style={{ marginRight: '30px' }}>
        Login
      </button>

      <button onClick={handleClick}>click me!</button>
    </Block>
  )
}

Content.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  darkMode: PropTypes.bool.isRequired,
}

export default Content
