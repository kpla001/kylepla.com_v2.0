import type { NextPage } from 'next'
import HeadTag from '../components/HeadTag/HeadTag'
import homeConstants from './constants/index.constants'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <HeadTag
      {...homeConstants.headTagProps}
      />
    </>
  )
}

export default Home
