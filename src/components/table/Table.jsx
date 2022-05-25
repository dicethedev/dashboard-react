import React from 'react'
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



//===================================================================
//Tables setup is copy and paste from Material-icons
//===================================================================

const List = () => {
     const rows = [
          {
            id: 1143155,
            product: 'Acer Nitro 5',
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            customer: 'John Smith',
            date: '1 April',
            amount: 785,
            method: "Cash on Delivery",
            status: 'Approved',
          },
            {
            id: 2323235,
            product: 'PlayStation 5',
            img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
            customer: 'John Smith',
            date: '1 May',
            amount: 920,
            method: "Online Payment",
            status: 'Pending',
          },
            {
            id: 2357741,
            product: 'Raze Blaze 15',
            img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
            customer: 'John Smith',
            date: '1 June',
            amount: 920,
            method: "Online",
            status: 'Approved',
          },
                {
            id: 2343255,
            product: 'ASUS ROG Strix',
            img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
            customer: 'John Smith',
            date: '1 April',
            amount: 2000,
            method: "Online",
            status: 'Pending',
          },
         

     ]
  return (
<TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Data</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
             <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
               <TableCell className="tableCell">
                 <span className={`status ${row.status}`}>{row.status}</span>
                 </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List