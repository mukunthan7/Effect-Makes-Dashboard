import React, { useMemo, useRef } from 'react'
import MaterialReactTable from 'material-react-table'
import TopList from '../components/TopList';
import { DownloadTableExcel } from 'react-export-table-to-excel';


export default function AppliedList() {

  const tableRef = useRef(null);

  const data = [
    {
      id: 'java',
      label: 'java',
      value: 10,
      color: 'hsl(0, 70%, 50%)',
    },
    {
      id: 'c',
      label: 'c',
      value: 10,
    }
  ]

  const appliedList = [
    {
      sno: 1,
      product: 'Product 1',
      availablity: 'Available',
      view: 'View Details',
    },
    {
      sno: 2,
      product: 'Product 2',
      availablity: 'Available',
      view: 'View Details',
    },
    {
      sno: 3,
      product: 'Product 3',
      availablity: 'Available',
      view: 'View Details',
    },
  ];

  const columns = useMemo(
    () => [
      {
        accessorKey: 'sno', //access nested data with dot notation
        header: 'S.no',
      },
      {
        accessorKey: 'product',
        header: 'Product',
      },
      {
        accessorKey: 'availablity', //normal accessorKey
        header: 'Availablity',
      },
      {
        accessorKey: 'view',
        header: 'View Details',
      },

    ],
    [],
  );


  return (
    <div>
      <div>
        <TopList list={data} download={data} />
        <div className='flex flex-col justify-center md:mx-10 rounded-md'>
          <div className='flex justify-between items-center px-3 mb-5'>
          <h1 className='font-bold text-md md:text-xl'>Applied List</h1>
          <DownloadTableExcel
            filename={`Applied List ${new Date().toLocaleDateString()}`} 
            sheet="users"
            currentTableRef={tableRef.current}
          >
            <button className=' bg-quaternary text-white font-bold py-2 px-3 rounded'>Export to Excel</button>
          </DownloadTableExcel>
          </div>
          <MaterialReactTable
            columns={columns}
            data={appliedList}
          />
       <table hidden ref={tableRef} className="table-auto">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.header} className="px-4 py-2">{column.header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {appliedList.map((row) => (
                <tr key={row.sno}>
                  {columns.map((column) => (
                    <td key={column.accessorKey} className="border px-4 py-2">{row[column.accessorKey]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
