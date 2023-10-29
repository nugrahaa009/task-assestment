import PropTypes from 'prop-types'
import { Select } from 'antd'
import { PageHeader } from '@ant-design/pro-layout'

const PageHeaderComponent = (props) => {
  const { handleChangeSort } = props
  return (
    <PageHeader
      title='New Arival'
      extra={
        <Select
          bordered={false}
          defaultValue='all'
          onChange={handleChangeSort}
          dropdownStyle={{ minWidth: 150 }}
        >
          <Select.Option key='all' value='all'>All Sort</Select.Option>
          <Select.Option key='name' value='name'>Sort by Name</Select.Option>
          <Select.Option key='size' value='size'>Sort by Size</Select.Option>
          <Select.Option key='price' value='price'>Sort by Price</Select.Option>
        </Select>
      }
    />
  )
}

PageHeaderComponent.propTypes = {
  handleChangeSort: PropTypes.func,
}

export default PageHeaderComponent