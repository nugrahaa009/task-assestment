import Sider from './Sider'
import Header from './Header'
import Content from './Content'
import { Layout } from 'antd'

const Main = (props) => {
  return (
    <Layout style={{ minHeight: '85vh' }}>
      <Header {...props} />
      <Layout hasSider>
        <Sider {...props} />
        <Content {...props} />
      </Layout>
    </Layout>
  )
}

export default Main