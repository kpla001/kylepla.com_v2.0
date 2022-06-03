import { ImageProps } from 'next/image'

export interface ProfileProps {
  profileImage: ImageProps
  profileHeading: {
    profileName: string
    profileTitle: string
  }
}
