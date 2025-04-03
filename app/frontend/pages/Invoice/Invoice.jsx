export default function Invoice({ invoice }) {
  return (
    <div className='flex items-center justify-between gap-4 p-2 border border-blue-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200'>
      <p className='flex flex-col gap-2'>
        <span className='text-gray-500'>Invoice</span>
        <span className='text-lg font-bold'>
          {invoice.number?.toString() || 'n/a'}
        </span>
      </p>
      <p className='flex flex-col gap-2'>
        <span className='text-gray-500 text-center'>Company</span>
        <span className='text-lg font-bold max-w-fit text-center'>
          {' '}
          {invoice.company_name?.toString() || 'n/a'}
        </span>
      </p>
      <p className='flex flex-col gap-2 items-center whitespace-nowrap'>
        <span className='text-gray-500 max-w-fit'>Check No</span>
        <span className='text-lg font-bold'>
          {invoice.check_number?.toString() || 'n/a'}
        </span>
      </p>
    </div>
  );
}
