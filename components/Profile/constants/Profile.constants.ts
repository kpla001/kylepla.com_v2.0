import { ImageProps } from 'next/image'
import { ProfileProps } from '../../../interfaces/Profile.interface'
import profilePhoto from '../../../public/profile-photo.png'

const imageProps: ImageProps = {
  className: 'photo',
  src: profilePhoto,
  alt: 'a photo of Kyle',
  width: 414.83,
  height: 497.5,
}

const headingProps = {
  profileName: 'Kyle Robert Isiah Pla',
  profileTitle: 'Full-stack Developer | Electronic Music Producer',
}

export const profileProps: ProfileProps = {
  profileImage: imageProps,
  profileHeading: headingProps,
}
