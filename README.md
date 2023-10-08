1.cra初始化项目2.自定义（覆盖）webpack配置 craco 1.安装 npm i -D @craco/craco

    2.配置文件
        my-app
        ├── node_modules
    +   ├── craco.config.js
        └── package.json

    3.配置文件
    package.json
    "scripts": {
    -  "start": "react-scripts start"
    +  "start": "craco start"
    -  "build": "react-scripts build"
    +  "build": "craco build"
    -  "test": "react-scripts test"
    +  "test": "craco test"
    }

3.tailwindcss
4.jsconfig.json 配置路径别名的映射
5.UI库的配置
antd 6.请求库的配置
axios

webpack => 去环境变量中Path去匹配路径寻找webpack这个可执行文件
