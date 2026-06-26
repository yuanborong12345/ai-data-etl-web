import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Typography, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import Orb from '../../components/react-bits/Orb/Orb'
import useUserStore from '../../store/userStore'
import type { UserLoginRequest } from '../../types/user'
import './LoginPage.css'

const { Title, Paragraph, Text } = Typography

export default function LoginPage() {
    const [loading, setLoading] = useState(false)
    const login = useUserStore((s) => s.login)
    const navigate = useNavigate()

    const handleSubmit = async (values: UserLoginRequest) => {
        setLoading(true)
        try {
            await login(values)
            message.success('登录成功')
            navigate('/', { replace: true })
        } catch {
            message.error('账号或密码错误，请重试')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="login-layout">
            {/* Left: Brand + Orb */}
            <div className="login-brand">
                <div className="login-orb">
                    <Orb hue={160} hoverIntensity={0.15} rotateOnHover={true} backgroundColor="#0a0a0b" />
                </div>
                <div className="login-brand-text">
                    <div className="logo-mark" />
                    <Title level={2} className="brand-name">
                        AI DataETL
                    </Title>
                    <Paragraph className="brand-tagline">
                        AI 驱动的数据中台
                        <br />
                        让数据流转像呼吸一样自然
                    </Paragraph>
                </div>
            </div>

            {/* Right: Login Form */}
            <div className="login-form-side">
                <div className="login-form-wrap">
                    <div className="login-form-header">
                        <Title level={3} className="login-title">
                            欢迎回来
                        </Title>
                        <Paragraph className="login-sub">
                            登录你的账号以继续使用 AI DataETL 平台
                        </Paragraph>
                    </div>

                    <Form<UserLoginRequest>
                        onFinish={handleSubmit}
                        layout="vertical"
                        size="large"
                        autoComplete="off"
                    >
                        <Form.Item
                            name="userAccount"
                            label="账号"
                            rules={[{ required: true, message: '请输入账号' }]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="请输入账号"
                                className="login-input"
                            />
                        </Form.Item>

                        <Form.Item
                            name="userPassword"
                            label="密码"
                            rules={[{ required: true, message: '请输入密码' }]}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                placeholder="请输入密码"
                                className="login-input"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                                block
                                className="login-btn"
                            >
                                登录
                            </Button>
                        </Form.Item>
                    </Form>

                    <div className="login-footer-text">
                        <Text type="secondary">
                            还没有账号？<a href="/register">立即注册</a>
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    )
}
