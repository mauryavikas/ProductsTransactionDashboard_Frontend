import React, { useMemo } from 'react';

const dummyData = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Lorem ipsum dolor sit amet.',
    price: '$100',
    category: 'Electronics',
    sold: 10,
    image: 'https://via.placeholder.com/100',
  },
  // Add more dummy data entries here...
];
const TableBody = React.memo(({ productList }) => {

  if (!productList || productList.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan={7}>No data available.</td>
        </tr>
      </tbody>
    );
  }
  return (
    <tbody>
      {productList.map((product) => (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td>{product.description}</td>
          <td>{product.price}</td>
          <td>{product.category}</td>
          <td style={{color:product.sold?"green":"red"}}>{product.sold?"Yes":"No"}</td>
          <td>
            <img src={product.image} alt={product.title} />
          </td>
        </tr>
      ))}
    </tbody>
  )

});

const Table = React.memo(({data}) => {

  const productList =useMemo(()=>data.length?data:[],[data]);

  return (
    <div className="product-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Sold</th>
            <th>Image</th>
          </tr>
        </thead>
        <TableBody productList={productList} />
      </table>
    </div>
  );
});

export default Table;