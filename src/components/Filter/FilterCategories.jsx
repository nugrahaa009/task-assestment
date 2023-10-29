import PropTypes from 'prop-types'
import { Col, Radio, Row } from 'antd'

const FilterCategories = (props) => {
  const { handleFilterCategories } = props
  return (
    <Radio.Group onChange={handleFilterCategories} style={{ width: '100%' }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Radio value="">All Categories</Radio>
        </Col>
        <Col span={24}>
          <Radio value="BELGIAN LOAFERS">Belgian Loafers</Radio>
        </Col>
        <Col span={24}>
          <Radio value="ACTIVE SNEAKERS">Active Sneakers</Radio>
        </Col>
        <Col span={24}>
          <Radio value="ESPADRILLES">Espadrilles</Radio>
        </Col>
        <Col span={24}>
          <Radio value="LACE UPS">Lace Ups</Radio>
        </Col>
        <Col span={24}>
          <Radio value="SLIP ON">Slip On</Radio>
        </Col>
        <Col span={24}>
          <Radio value="SLIPPERS">Slippers</Radio>
        </Col>
      </Row>
    </Radio.Group>
  )
}

FilterCategories.propTypes = {
  handleFilterCategories: PropTypes.func,
}

export default FilterCategories