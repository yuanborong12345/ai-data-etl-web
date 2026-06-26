import { ConfigProvider } from 'antd'
import HomePage from './views/home/HomePage'

function App() {
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
            <HomePage />
        </ConfigProvider>
    )
}

export default App
