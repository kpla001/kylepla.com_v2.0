import type { NextPage } from 'next'
import HeadTag from '../components/HeadTag/HeadTag'
import homeConstants from './constants/index.constants'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div id='linkTree-page'>
      <HeadTag {...homeConstants.headTagProps} />
    </div>
  )
}

export default Home
