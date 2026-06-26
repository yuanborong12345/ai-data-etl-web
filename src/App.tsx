import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import HomePage from './views/home/HomePage'
import LoginPage from './views/login/LoginPage'
import useUserStore from './store/userStore'

function App() {
    const initAuth = useUserStore((s) => s.initAuth)

    useEffect(() => {
        initAuth()
    }, [initAuth])

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#10b981',
                    colorBgBase: '#0a0a0b',
                    colorTextBase: '#fafafa',
                    fontFamily:
                        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
                    borderRadius: 12,
                },
                components: {
                    Button: {
                        borderRadius: 999,
                        controlHeight: 44,
                        paddingContentHorizontal: 28,
                    },
                },
            }}
        >
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </ConfigProvider>
    )
}

export default App
