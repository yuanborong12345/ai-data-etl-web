src/
├── assets/          # 静态资源：图片、图标、全局公共样式
├── components/      # 全局公共基础组件（不包含业务逻辑，如自定义的封装按钮、面包屑）
├── config/          # 全局配置（系统常量、环境配置、菜单路由配置）
├── hooks/           # 自定义自定义 Hook（对标后端的 Utils/Helper，封装公共逻辑）
├── layouts/         # 页面整体布局（左侧菜单栏 + 顶部面包屑 + 右侧主体内容容器）
├── router/          # 路由配置（控制页面跳转）
├── services/        # 网络请求模块
│   ├── api/         # 具体的业务接口（如 user.ts, etlTask.ts）
│   └── request.ts   # Axios 实例封装（拦截器、Token 统一挂载）
├── store/           # 全局状态管理（Zustand，全局 Session/缓存）
├── views/           # 页面/路由组件（对标 Controller 对应的视图，按业务模块划分）
│   ├── login/       # 登录页模块
│   └── etl-task/    # ETL 任务管理业务模块
├── App.tsx          # 根组件（全局上下文、Provider 注入）
└── main.tsx         # 项目入口文件