import Image from 'next/image'
import styles from '../Profile/Profile.module.scss'
import { ProfileProps } from '../../interfaces/Profile.interface'

const { container, heading, name } = styles

export default function Profile( props: ProfileProps) {
    const { profileImage, profileHeading } = props

    return (
    <div className={container}>
        <Image {...profileImage} alt={profileImage.alt} />
        <section className={heading}>
            <h1 className={name}>
                {profileHeading.profileName}
            </h1>
            <h4>
                {profileHeading.profileTitle}
            </h4>
        </section>
    </div>
    )
}

