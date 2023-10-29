import PropTypes from 'prop-types'
import { Checkbox, Col, Row, Space, Typography } from 'antd'

const { Title } = Typography

const ShoeSizes = ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"]

const FilterSize = (props) => {
  const { handleFilterSize } = props
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Title level={5}>Size</Title>
      </Col>
      <Col span={24}>
        <Checkbox.Group onChange={handleFilterSize} style={{ width: '100%' }}>
          <Space wrap>
            {ShoeSizes.map((item, i) => (
              <Checkbox key={i} value={item}>
                {item}
              </Checkbox>
            ))}
          </Space>
        </Checkbox.Group>
      </Col>
    </Row>
  )
}

FilterSize.propTypes = {
  handleFilterSize: PropTypes.func,
}

export default FilterSize