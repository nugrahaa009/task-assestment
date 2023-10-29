import PropTypes from 'prop-types'
import { Col, Divider, Layout, Row } from 'antd'
import { CollapseCategory } from '../Collapse'
import { FilterPrice, FilterSize } from '../Filter'

const Sider = (props) => {
  return (
    <Layout.Sider
      theme='light'
      width={300}
      style={{
        padding: 20,
        background: '#FFF',
        borderRight: '1px solid #F4F4F4',
      }}
    >
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <CollapseCategory {...props} />
        </Col>
        <Col span={24}>
          <Divider />
        </Col>
        <Col span={24}>
          <FilterPrice {...props} />
        </Col>
        <Col span={24}>
          <Divider />
        </Col>
        <Col span={24}>
          <FilterSize {...props} />
        </Col>
      </Row>
    </Layout.Sider>
  )
}

Sider.propTypes = {
  contoh: PropTypes.string,
}

export default Sider