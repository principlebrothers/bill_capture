import { Head, Link } from '@inertiajs/react'
import Invoice from './Invoice'
import { CgFileAdd } from 'react-icons/cg';

export default function Index({ invoices, flash }) {
  return (
    <>
      <Head title='Invoices' />

      {flash.notice && <p style={{ color: 'green' }}>{flash.notice}</p>}

      <h1 className='text-center font-extrabold text-4xl my-4'>Invoices</h1>
      <Link
        href='/invoices/new'
        className='flex items-center gap-2 mb-4 bg-indigo-700 group text-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 w-fit'
      >
        <CgFileAdd className='text-xl' />
        <span className='text-md font-semibold'> Add Invoice</span>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {invoices.map((invoice) => (
          <div key={invoice.id}>
            <Invoice invoice={invoice} />
          </div>
        ))}
      </div>
    </>
  );
}