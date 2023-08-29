import React, { useCallback, useEffect, useState } from 'react'
import Table from './Table'
import MonthDropdown from './MonthDropdown'
import Pagination from './Pagination'
import SearchBar from './SearchBar'
import {productServices} from '../Api/productServices'


function ProductsTable({month,onMonthChange=(m)=>{}}) {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  // const [month, setMonth] = useState(3);
  const [search, setSearch] = useState('');
  const [productList,setProductList]=useState([]);

  useEffect(()=>{

    fetch(`${productServices.productList}?search=${search}&month=${month}&page=${page}`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setProductList(data?.products);
      setTotalPage(data?.totalPages);
      setPage(data?.page)
    }).catch((error)=>{
      console.log("Error ")
    })
  },[page,month,search])

  const handlePageChange = useCallback((p) => {
    setPage(p);
  });

  const handleMonthChange = useCallback((m) => {
    onMonthChange(m)
    // setMonth(m);
  });
  const handleSearchChange = useCallback((s) => {
    setSearch(s);
  });

  return (
    <div style={{ ...style.wrapper }}>
      <div style={{ ...style.searchContainer }}>
        <SearchBar
        onSearchChange={handleSearchChange}
        />
        <MonthDropdown
          selectedMonth={month}
          onMonthChange={handleMonthChange}
        />
      </div>
      <Table data={productList}/>
      <Pagination
        currentPage={page}
        totalPages={totalPage}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

const style = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "10px"
  },
}

export default React.memo(ProductsTable)
