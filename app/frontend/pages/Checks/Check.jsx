import { formatDate } from "../../helpers/dateHelper";
import { useState } from "react";

export default function Check({ check }) {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const enlarge = () => setIsEnlarged(!isEnlarged);
  const imageStyle = {
    width: isEnlarged ? '100%' : '150px',
    height: 'auto',
    cursor: 'pointer',
    transition: 'width 0.3s ease',
    maxWidth: '100%',
  };
  return (
    <div className='flex gap-x-2 p-2 border max-w-fit border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200'>
      <img
        src={check.image}
        alt='Check'
        onClick={enlarge}
        style={imageStyle}
        className='w-32 h-24 object-cover rounded-sm shadow-md'
      />
      <div className={`${isEnlarged ? 'hidden' : ''}`}>
        <p className='flex flex-wrap gap-x-2'>
          <span className='text-gray-500 text-center'>Company:</span>
          <span className='text-lg font-bold max-w-fit text-center'>
            {' '}
            {check?.company_name?.toString()}
          </span>
        </p>
        <p className='flex flex-wrap gap-x-2'>
          <span className='text-gray-500'>Invoice No: </span>
          <span className='text-lg font-bold'>
            {check?.invoice_numbers?.toString()}
          </span>
        </p>
        <p className='flex gap-2 items-center whitespace-nowrap'>
          <span className='text-gray-500 whitespace-nowrap'>
            Check No:
          </span>
          <span className='text-lg font-bold'>
            {check?.check_number?.toString()}
          </span>
        </p>
        <p className='flex flex-wrap gap-x-2'>
          <span className='text-gray-500'>Recorded Date:</span>
          <span className='text-lg font-bold'>
            {formatDate(check?.created_at)}
          </span>
        </p>
      </div>
    </div>
  );
}
