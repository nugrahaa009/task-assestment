import PropTypes from 'prop-types'
import { Card, Col, Flex, Image, List, Row, Space, Typography } from 'antd'
import { ACTIVE_SNEAKERS, ACTIVE_SNEAKERS_THUMB1, ACTIVE_SNEAKERS_THUMB2, BELGIAN_LOAFERS, BELGIAN_LOAFERS_THUMB1, BELGIAN_LOAFERS_THUMB2, ESPADRILLES, ESPADRILLES_THUMB1, ESPADRILLES_THUMB2, LACE_UPS, LACE_UPS_THUMB1, LACE_UPS_THUMB2, SLIPPERS, SLIPPERS_THUMB1, SLIPPERS_THUMB2, SLIP_ON, SLIP_ON_THUMB1, SLIP_ON_THUMB2 } from '../../assets/img'

const { Text, Title } = Typography

const ListShoes = (props) => {
  const { data } = props

  const renderImage = (category) => {
    switch (category) {
      case 'BELGIAN LOAFERS':
        return BELGIAN_LOAFERS
      case 'ACTIVE SNEAKERS':
        return ACTIVE_SNEAKERS
      case 'ESPADRILLES':
        return ESPADRILLES
      case 'LACE UPS':
        return LACE_UPS
      case 'SLIP ON':
        return SLIP_ON
      case 'SLIPPERS':
        return SLIPPERS
      default:
        return null
    }
  }

  const renderThumb1 = (category) => {
    switch (category) {
      case 'BELGIAN LOAFERS':
        return BELGIAN_LOAFERS_THUMB1
      case 'ACTIVE SNEAKERS':
        return ACTIVE_SNEAKERS_THUMB1
      case 'ESPADRILLES':
        return ESPADRILLES_THUMB1
      case 'LACE UPS':
        return LACE_UPS_THUMB1
      case 'SLIP ON':
        return SLIP_ON_THUMB1
      case 'SLIPPERS':
        return SLIPPERS_THUMB1
      default:
        return null
    }
  }

  const renderThumb2 = (category) => {
    switch (category) {
      case 'BELGIAN LOAFERS':
        return BELGIAN_LOAFERS_THUMB2
      case 'ACTIVE SNEAKERS':
        return ACTIVE_SNEAKERS_THUMB2
      case 'ESPADRILLES':
        return ESPADRILLES_THUMB2
      case 'LACE UPS':
        return LACE_UPS_THUMB2
      case 'SLIP ON':
        return SLIP_ON_THUMB2
      case 'SLIPPERS':
        return SLIPPERS_THUMB2
      default:
        return null
    }
  }

  return (
    <List
      dataSource={data}
      grid={{ gutter: 16, column: 2 }}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <Card style={{ borderRadius: 8 }}>
            <Row gutter={[16, 8]} align='middle'>
              <Col span={24}>
                <Text type='secondary'>{item.biography}</Text>
              </Col>
              <Col span={24}>
                <Title level={3}>{item.name}</Title>
              </Col>
              <Col span={24}>
                <Flex justify='center'>
                  <Image src={renderImage(item.cetegory)} width={'100%'} />
                </Flex>
              </Col>
              <Col span={12}>
                <Space size={0} direction='vertical'>
                  <Text type='secondary'>Price</Text>
                  <Text strong style={{ fontSize: 16 }}>${item.price}</Text>
                </Space>
              </Col>
              <Col span={12}>
                <Flex justify='flex-end'>
                  <Space>
                    <Card bodyStyle={{ padding: 4 }}>
                      <Image src={renderThumb1(item.cetegory)} height={50} width={50} />
                    </Card>
                    <Card bodyStyle={{ padding: 4 }}>
                      <Image src={renderThumb2(item.cetegory)} height={50} width={50} />
                    </Card>
                  </Space>
                </Flex>
              </Col>
            </Row>
          </Card>
        </List.Item>
      )}
    />
  )
}

ListShoes.propTypes = {
  data: PropTypes.array,
}

export default ListShoes