import React, { useMemo, useRef } from 'react'
import MaterialReactTable from 'material-react-table'
import { DownloadTableExcel } from 'react-export-table-to-excel';
import EventsList from '../components/EventList';


export default function AllEvents() {

  const tableRef = useRef(null);

  const allEvents = [
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
        <EventsList events="2" upcoming="3" />
        <div className='flex flex-col justify-center md:mx-10 rounded-md'>
          <div className='flex justify-between items-center px-3 mb-5'>
          <h1 className='font-bold text-md md:text-xl'>All Events Table</h1>
          <DownloadTableExcel
            filename={`All Events ${new Date().toLocaleDateString()}`} 
            sheet="users"
            currentTableRef={tableRef.current}
          >
            <button className=' bg-quaternary text-white font-bold py-2 px-3 rounded'>Export to Excel</button>
          </DownloadTableExcel>
          </div>
          <MaterialReactTable
            columns={columns}
            data={allEvents}
          />
          <table hidden ref={tableRef} className="table-auto">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th className="px-4 py-2">{column.header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allEvents.map((row) => (
                <tr>
                  {columns.map((column) => (
                    <td className="border px-4 py-2">{row[column.accessorKey]}</td>
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
