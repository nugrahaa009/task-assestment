import PropTypes from 'prop-types'
import { Layout } from 'antd'

const Content = (props) => {
  const { children } = props
  return (
    <Layout.Content style={{ background: '#FFF', padding: 50 }}>
      {children}
    </Layout.Content>
  )
}

Content.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Content