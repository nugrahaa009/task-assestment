import PropTypes from 'prop-types'
import { Col, Row, Slider, Typography } from 'antd'
import { useState } from 'react'

const { Text, Title } = Typography

const FilterPrice = (props) => {
  const { handleFilterPrice } = props

  const [minPrice, setMinPrice] = useState(150)

  const [maxPrice, setMaxPrice] = useState(999)

  const onChange = (price) => {
    setMinPrice(price[0])
    setMaxPrice(price[1])
  }

  const formatter = (value) => `$${value}`

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Title level={5}>Price Range</Title>
      </Col>
      <Col span={24}>
        <Slider
          range
          max={1200}
          onChange={onChange}
          onAfterChange={handleFilterPrice}
          defaultValue={[minPrice, maxPrice]}
          tooltip={{
            formatter,
            placement: 'bottom',
          }}
        />
      </Col>
      <Col span={24} style={{ marginTop: 20 }}>
        <Text strong>{`Min Price: $${minPrice}`}</Text>
      </Col>
      <Col span={24}>
        <Text strong>{`Max Price: $${maxPrice}`}</Text>
      </Col>
    </Row>
  )
}

FilterPrice.propTypes = {
  handleFilterPrice: PropTypes.func,
}

export default FilterPrice