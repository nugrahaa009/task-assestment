import PropTypes from 'prop-types'
import { SearchOutlined } from "@ant-design/icons"
import { Col, Flex, Input, Layout, Row, Typography } from "antd"

const { Title } = Typography

const Header = (props) => {
  const { handleSearch } = props
  return (
    <Layout.Header style={{ background: '#FFF', borderBottom: '1px solid #F4F4F4', height: 90 }}>
      <Row gutter={16} align='middle'>
        <Col span={16}>
          <Title level={2}>Shoe.</Title>
        </Col>
        <Col span={8}>
          <Flex justify='flex-end'>
            <Input
              size="large"
              placeholder="Search"
              onChange={handleSearch}
              prefix={<SearchOutlined />}
            />
          </Flex>
        </Col>
      </Row>
    </Layout.Header>
  )
}

Header.propTypes = {
  handleSearch: PropTypes.func,
}

export default Header