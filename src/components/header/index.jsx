import logo from '../../logo.svg'
import styles from './App.module.scss';
import React from 'react'

const {AppHeader, AppLogo, AppLink } = styles

function header() {
  return (
    <header className={AppHeader}>
      <img height="50" width="50" src={logo} className={AppLogo} alt='logo' />
      <p>
        Boilerplate
      </p>
      <a
        className={AppLink}
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
    </header>
  )
}

export default header
