import { Collapse } from 'antd'
import { FilterCategories } from '../Filter'

const CollapseCategory = (props) => {
  const items = [
    {
      key: 'Categories',
      label: 'Categories',
      children: <FilterCategories {...props} />,
    }
  ]
  return (
    <Collapse
      ghost
      expandIconPosition='end'
      items={items} defaultActiveKey={['Categories']}
    />
  )
}

export default CollapseCategory