import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import orderBy from 'lodash/orderBy'

import { Product, AppState, SortDirection, SortColumn } from '../types'
// import { addProduct, removeProduct } from '../redux/actions'
import useCountry from '../hooks/useCountry'
import TableOfCountries from '../components/Table'

import AppBar from '../components/AppBar'

// const names = ['Apple', 'Orange', 'Avocado', 'Banana', 'Cucumber', 'Carrot']

export default function Home() {
  const [searchName, setSearchName] = useState('')
  const [data] = useCountry(searchName)
  const [columnToSort, setColumnToSort] = useState<SortColumn>(SortColumn.Empty)
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    SortDirection.Descending
  )

  // const dispatch = useDispatch()
  // const products = useSelector((state: AppState) => state.product.inCart)

  // const handleAddProduct = () => {
  //   const product: Product = {
  //     id: (+new Date()).toString(),
  //     name: names[Math.floor(Math.random() * names.length)],
  //     price: +(Math.random() * 10).toFixed(2),
  //   }
  //   dispatch(addProduct(product))
  // }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value)
  }
  const handleSort = (column: SortColumn) => {
    setColumnToSort(column)
    setSortDirection(
      columnToSort === column
        ? sortDirection === SortDirection.Ascending
          ? SortDirection.Descending
          : SortDirection.Ascending
        : SortDirection.Ascending
    )
  }

  return (
    <>
      {/* <h1>Home page</h1>
      {products.length <= 0 && <div>No products in cart</div>}
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{`${p.name} - $${p.price}`}</Link>

            {'  '}

            <button onClick={() => dispatch(removeProduct(p))}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddProduct}>Add product</button> */}

      <AppBar searchName={searchName} handleSearch={handleSearch} />
      <TableOfCountries
        data={orderBy(data, columnToSort, sortDirection)}
        handleSort={handleSort}
      />
    </>
  )
}
