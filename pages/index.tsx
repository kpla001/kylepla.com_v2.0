import styles from '../styles/Home.module.scss'
import type { NextPage } from 'next'
import HeadTag from '../components/HeadTag/HeadTag'
import Profile from '../components/Profile/Profile'
import homeConstants from './constants/index.constants'

const { headTagProps, profileProps } = homeConstants

const Home: NextPage = () => {
  return (
    <div id='linkTree-page'>
      <HeadTag {...headTagProps} />
      <Profile {...profileProps} />
    </div>
  )
}

export default Home
