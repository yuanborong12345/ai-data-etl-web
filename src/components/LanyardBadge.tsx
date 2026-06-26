import { useMemo } from 'react'
import Lanyard from './react-bits/Lanyard/Lanyard'
import useUserStore from '../store/userStore'
import { generateLetterAvatar, generateLogoImage } from '../utils/avatar'
import './LanyardBadge.css'

export default function LanyardBadge() {
    const currentUser = useUserStore((s) => s.currentUser)

    const frontImage = useMemo(() => {
        if (!currentUser) return undefined
        return (currentUser as any).userAvatar || generateLetterAvatar(currentUser.userName || 'U')
    }, [currentUser])

    const backImage = useMemo(() => generateLogoImage(), [])

    if (!currentUser) return null

    return (
        <div className="badge-wrapper">
            <Lanyard
                position={[0, 0, 24]}
                gravity={[0, -35, 0]}
                frontImage={frontImage as any}
                backImage={backImage as any}
                imageFit="cover"
                transparent={true}
            />
        </div>
    )
}
