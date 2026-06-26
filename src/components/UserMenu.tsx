import { Button, Popover, Avatar, Typography } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import useUserStore from '../store/userStore'
import './UserMenu.css'

const { Text } = Typography

export default function UserMenu() {
    const currentUser = useUserStore((s) => s.currentUser)
    const logout = useUserStore((s) => s.logout)

    if (!currentUser) return null

    const userName = currentUser.userName || currentUser.userAccount || 'User'
    const isAdmin = (currentUser as any).userRole === 'admin'

    const handleLogout = async () => {
        await logout()
        window.location.href = '/'
    }

    const content = (
        <div className="user-dropdown">
            <div className="dropdown-header">
                <Avatar
                    size={36}
                    src={(currentUser as any).userAvatar}
                    icon={<UserOutlined />}
                    style={{ backgroundColor: '#10b981', flexShrink: 0 }}
                >
                    {userName.charAt(0).toUpperCase()}
                </Avatar>
                <div className="dropdown-user-info">
                    <Text strong className="dropdown-name">{userName}</Text>
                    <Text className="dropdown-role">{isAdmin ? '管理员' : '用户'}</Text>
                </div>
            </div>
            <div className="dropdown-divider" />
            <Button
                type="text"
                icon={<LogoutOutlined />}
                onClick={handleLogout}
                block
                className="dropdown-logout"
            >
                退出登录
            </Button>
        </div>
    )

    return (
        <Popover
            content={content}
            trigger="hover"
            placement="bottomRight"
            overlayClassName="user-dropdown-overlay"
            mouseEnterDelay={0.1}
        >
            <div className="user-trigger">
                <Avatar
                    size={32}
                    src={(currentUser as any).userAvatar}
                    icon={<UserOutlined />}
                    style={{ backgroundColor: '#10b981', flexShrink: 0 }}
                >
                    {userName.charAt(0).toUpperCase()}
                </Avatar>
                <span className="user-trigger-name">{userName}</span>
            </div>
        </Popover>
    )
}
