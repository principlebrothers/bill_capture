import { formatDate } from "../../helpers/dateHelper";

export default function Check({ check }) {

  return (
    <div className='flex items-center justify-between gap-4 p-2 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200'>
      <p className='flex flex-col gap-2'>
        <span className='text-gray-500'>Date</span>
        <span className='text-lg font-bold'>
          {formatDate(check?.created_at)}
        </span>
      </p>

      <p className='flex flex-col gap-2'>
        <span className='text-gray-500'>Invoice No</span>
        <span className='text-lg font-bold'>
          {check?.invoice_numbers?.toString()}
        </span>
      </p>
      <p className='flex flex-col gap-2'>
        <span className='text-gray-500 text-center'>Company</span>
        <span className='text-lg font-bold max-w-fit text-center'>
          {' '}
          {check?.company_name?.toString()}
        </span>
      </p>
      <p className='flex flex-col gap-2 items-center whitespace-nowrap'>
        <span className='text-gray-500 max-w-fit'>Check No</span>
        <span className='text-lg font-bold'>
          {check?.check_number?.toString()}
        </span>
      </p>

      <div className='flex items-center justify-center'>
        <img
          src={check.image}
          alt='Check'
          className='w-24 h-24 object-cover rounded-sm shadow-md'
        />
      </div>
    </div>
  );
}
