import { Col, Row } from 'antd'
import { useState } from 'react'
import { DATA_SHOES } from './data'
import { Main } from './components/Main'
import { ListShoes } from './components/List'
import { PageHeaderComponent } from './components/PageHeader'

const App = () => {
  const [filterName, setFilterName] = useState("")

  const [filterCategory, setFilterCategory] = useState("")

  const [selectedSizes, setSelectedSizes] = useState([])

  const [minPrice, setMinPrice] = useState('150')

  const [maxPrice, setMaxPrice] = useState('1000')

  const [sort, setSort] = useState('all')

  const handleSearch = (e) => setFilterName(e.target.value)

  const handleChangeSort = (sort) => setSort(sort)
  
  const handleFilterCategories = (e) => setFilterCategory(e.target.value)

  const handleFilterPrice = (price) => {
    setMinPrice(price[0])
    setMaxPrice(price[1])
  }

  const handleFilterSize = (size) => setSelectedSizes(size)

  const filteredShoes = DATA_SHOES.filter(shoe => {
    const nameMatch = filterName === "" || shoe.name.toLowerCase().includes(filterName.toLowerCase())
    const sizeMatch = selectedSizes.length === 0 || selectedSizes.includes(shoe.size);
    const categoryMatch = filterCategory === "" || shoe.cetegory === filterCategory
    const minPriceMatch = shoe.price >= parseInt(minPrice)
    const maxPriceMatch = shoe.price <= parseInt(maxPrice)
    return nameMatch && categoryMatch && sizeMatch && minPriceMatch && maxPriceMatch
  })

  const sortName = [...filteredShoes].sort((a, b) => a.name.localeCompare(b.name))

  const sortPrice = [...filteredShoes].sort((a, b) => a.price - b.price)

  const sortSize = [...filteredShoes].sort((a, b) => a.size - b.size)

  const handleSort = (e) => {
    switch (e) {
      case 'all':
        return filteredShoes
      case 'name':
        return sortName
      case 'size':
        return sortSize
      case 'price':
        return sortPrice
      default:
        return filteredShoes;
    }
  }

  return (
    <div className='container'>
      <Main
        minPrice={minPrice}
        maxPrice={maxPrice}
        handleSearch={handleSearch}
        handleFilterSize={handleFilterSize}
        handleFilterPrice={handleFilterPrice}
        handleFilterCategories={handleFilterCategories}
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <PageHeaderComponent handleChangeSort={handleChangeSort} />
          </Col>
          <Col span={24}>
            <ListShoes data={handleSort(sort)} />
          </Col>
        </Row>
      </Main>
    </div>
  )
}

export default App