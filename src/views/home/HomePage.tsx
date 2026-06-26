import { Button, Typography, Space } from 'antd'
import {
    ThunderboltOutlined,
    RobotOutlined,
    BarChartOutlined,
    DatabaseOutlined,
} from '@ant-design/icons'
import Orb from '../../components/react-bits/Orb/Orb'
import GooeyNav from '../../components/react-bits/GooeyNav/GooeyNav'
import SpotlightCard from '../../components/react-bits/SpotlightCard/SpotlightCard'
import FadeContent from '../../components/react-bits/FadeContent/FadeContent'
import './HomePage.css'

const { Title, Paragraph, Text } = Typography

const navItems = [
    { href: '#features', label: '产品能力' },
    { href: '#pipeline', label: '数据流程' },
    { href: '#docs', label: '开发文档' },
]

const features = [
    {
        icon: <DatabaseOutlined />,
        title: '数据源接入',
        desc: 'Excel 文件拖拽上传即可开始解析，零代码完成数据入库。',
    },
    {
        icon: <ThunderboltOutlined />,
        title: '智能 ETL 管道',
        desc: '可视化编排数据清洗流程，自动识别字段类型、处理缺失值与异常数据，管道状态实时可观测。',
    },
    {
        icon: <RobotOutlined />,
        title: 'AI 大模型分析',
        desc: '接入多模态大模型，支持自然语言查询、智能分类、情感分析和趋势预测，让数据自己开口说话。',
    },
    {
        icon: <BarChartOutlined />,
        title: '结构化报告输出',
        desc: '一键生成可视化分析报告，支持 PDF、HTML、Markdown 多格式导出，自动适配移动端与打印布局。',
    },
]

const pipelineSteps = [
    { label: '数据上传', sub: 'Excel 文件上传' },
    { label: 'ETL 清洗', sub: '自动解析与校验' },
    { label: 'AI 分析', sub: '大模型智能计算' },
    { label: '报告输出', sub: '可视化结构化交付' },
]

export default function HomePage() {
    return (
        <div className="home-layout">
            {/* GooeyNav - fixed top navigation with particle burst effect */}
            <header className="home-nav">
                <div className="nav-inner">
                    <div className="nav-logo">
                        <div className="logo-mark" />
                        <span className="logo-text">AI DataETL</span>
                    </div>
                    <GooeyNav
                        items={navItems}
                        animationTime={600}
                        particleCount={15}
                        colors={[1, 2, 3, 1, 2, 3, 1, 5]}
                    />
                    <Button type="primary" size="medium" ghost className="nav-cta">
                        sign in
                    </Button>
                </div>
            </header>

            {/* Hero Section - Orb WebGL background with text overlay */}
            <section className="hero-section">
                <div className="orb-bg">
                    <Orb
                        hue={160}
                        hoverIntensity={1.55}
                        rotateOnHover={true}
                        backgroundColor="#0a0a0b"
                    />
                </div>
                <div className="hero-overlay">
                    <div className="hero-eyebrow">AI 驱动的数据中台</div>
                    <Title level={1} className="hero-title">
                        让数据流转
                        <br />
                        像<span className="hero-accent">呼吸</span>一样自然
                    </Title>
                    <Paragraph className="hero-desc">
                        从 Excel 上传到 AI 分析报告，全链路自动化。
                        把你的数据交给智能管道，专注业务决策本身。
                    </Paragraph>
                    <Space size="middle" className="hero-actions">
                        <Button type="primary" size="large" className="cta-ghost-btn">
                            立即开始
                        </Button>
                    </Space>
                </div>
            </section>

            {/* Features - SpotlightCard bento grid */}
            <FadeContent blur={true} duration={800}>
                <section id="features" className="features-section">
                    <div className="section-container">
                        <div className="section-header">
                            <Title level={2} className="section-title">
                                覆盖数据全生命周期的
                                <br />
                                四大核心能力
                            </Title>
                            <Paragraph className="section-desc">
                                从接入到交付，每一个环节都经过工程化打磨，而不是功能堆砌。
                                我们相信好的工具应该安静地完成工作。
                            </Paragraph>
                        </div>
                        <div className="bento-grid">
                            {features.map((item, i) => (
                                <SpotlightCard
                                    key={item.title}
                                    className={`bento-card card-${i + 1}`}
                                    spotlightColor="rgba(16, 185, 129, 0.12)"
                                >
                                    <div className="bento-icon">{item.icon}</div>
                                    <Title level={4} className="bento-title">
                                        {item.title}
                                    </Title>
                                    <Paragraph className="bento-desc">{item.desc}</Paragraph>
                                </SpotlightCard>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeContent>

            {/* Pipeline - data flow visual */}
            <FadeContent duration={800}>
                <section id="pipeline" className="pipeline-section">
                    <div className="section-container">
                        <div className="section-header">
                            <Title level={2} className="section-title">
                                数据流向，一目了然
                            </Title>
                            <Paragraph className="section-desc">
                                四个步骤完成从原始数据到分析报告的完整链路，全程可视化、可追溯。
                            </Paragraph>
                        </div>
                        <div className="pipeline-track">
                            {pipelineSteps.map((step, i) => (
                                <div key={step.label} className="pipeline-step">
                                    <div className="step-index">{i + 1}</div>
                                    <div className="step-label">{step.label}</div>
                                    <div className="step-sub">{step.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeContent>

            {/* CTA */}
            <FadeContent duration={800}>
                <section className="cta-section">
                    <div className="section-container">
                        <div className="cta-card">
                            <Title level={2} className="cta-title">
                                准备好开始了吗？
                            </Title>
                            <Paragraph className="cta-desc">
                                接入你的第一份数据，看到第一份 AI 报告，只需 5 分钟。
                            </Paragraph>
                            <Space size="middle">
                                <Button type="primary" size="large" className="cta-ghost-btn">
                                    立刻开始
                                </Button>
                            </Space>
                        </div>
                    </div>
                </section>
            </FadeContent>

            {/* Footer */}
            <footer className="home-footer">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <div className="logo-mark small" />
                        <Text className="footer-logo-text">AI DataETL Platform</Text>
                    </div>
                    <div className="footer-links">
                        <div className="footer-col">
                            <Text strong className="footer-col-title">产品</Text>
                            <a href="#features">核心能力</a>
                            <a href="#pipeline">数据流程</a>
                            <a href="#pricing">定价方案</a>
                        </div>
                        <div className="footer-col">
                            <Text strong className="footer-col-title">资源</Text>
                            <a href="#docs">开发文档</a>
                            <a href="#api">API 参考</a>
                            <a href="#status">系统状态</a>
                        </div>
                        <div className="footer-col">
                            <Text strong className="footer-col-title">公司</Text>
                            <a href="#about">关于我们</a>
                            <a href="#privacy">隐私协议</a>
                            <a href="#terms">服务条款</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <Text type="secondary">2026 AI DataETL Platform. All rights reserved.</Text>
                </div>
            </footer>
        </div>
    )
}
