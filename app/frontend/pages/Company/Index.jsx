import { Head, Link } from '@inertiajs/react'
import { AiTwotoneDelete } from 'react-icons/ai';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import { CgFileAdd } from 'react-icons/cg';
import { CiEdit } from 'react-icons/ci';
import Company from './Company'

export default function Index({ companies, flash }) {
  return (
    <>
      <Head title='Companies' />

      {flash.notice && <p className='text-green-600 text-center text-lg'>{flash.notice}</p>}

      <h1 className='text-center font-extrabold text-4xl my-4'>Companies</h1>
      <Link href='/companies/new' className='flex items-center gap-2 mb-4 bg-indigo-700 group text-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 w-fit'>
        <CgFileAdd className='text-xl' />
        <span className='text-md font-semibold'> Add Company</span>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {companies.map((company) => (
          <div
            key={company.id}
            className='flex items-center justify-between py-2 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200'
          >
            <Company company={company} />
            <div className='flex gap-8 pr-4'>
              <Link
                href={`/companies/${company.id}/checks/new`}
                className='relative group'
              >
                <MdOutlineAddAPhoto className='text-xl hover:text-sky-600' />
                <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1'>
                  Add Check
                </span>
              </Link>
              <Link
                href={`/companies/${company.id}/edit`}
                className='relative group'
              >
                <CiEdit className='text-xl hover:text-fuchsia-700' />
                <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1'>
                  Edit
                </span>
              </Link>
              <Link
                href={`/companies/${company.id}`}
                as='button'
                method='delete'
                className='relative group'
              >
                <AiTwotoneDelete className='text-xl hover:text-red-700' />
                <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1'>
                  Delete
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
