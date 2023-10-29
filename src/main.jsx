import './styles/index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider>
    <App />
  </ConfigProvider>,
)
