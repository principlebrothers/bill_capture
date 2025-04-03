import { useForm } from '@inertiajs/react';
import Button from '../../components/Button';

export default function Form({ invoice, companies, onSubmit, submitText }) {
  const form = useForm({
    number: invoice?.number || '',
    company_id: invoice?.company_id || '',
  });

  const { data, setData, errors, processing } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  const isFormValid = data.number.trim() !== '' && data.company_id !== '';

  return (
    <form
      onSubmit={handleSubmit}
      style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}
    >
      <div className='mb-4'>
        <label className='block text-gray-700 mb-2' htmlFor='number'>
          Number
        </label>
        <input
          type='text'
          name='number'
          id='number'
          value={data.number}
          onChange={(e) => setData('number', e.target.value)}
          className='w-full p-2 border border-gray-300 rounded-md font-normal'
          placeholder='Enter invoice number'
          required
          autoComplete='off'
          autoFocus
        />
        {errors.number && (
          <div style={{ color: 'red', marginTop: '0.5rem' }}>
            {errors.number.join(', ')}
          </div>
        )}
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700 mb-2' htmlFor='company_id'>
          Company
        </label>
        <select
          name='company_id'
          id='company_id'
          className='w-full p-2 border border-gray-300 rounded-md'
          value={data.company_id}
          onChange={(e) => setData('company_id', e.target.value)}
        >
          <option value=''>Select a company</option>
          {companies?.map((company) => (
            <option key={company.id} value={company.id}>
              {company.company_name}
            </option>
          ))}
        </select>
        {errors.company_id && (
          <div style={{ color: 'red', marginTop: '0.5rem' }}>
            {errors.company_id.join(', ')}
          </div>
        )}
      </div>
      <div>
        <Button
          type='submit'
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            isFormValid ? 'cursor-pointer' : ' opacity-50 cursor-not-allowed'
          }`}
          content={processing ? 'Processing...' : submitText}
          disabled={processing}
        />
      </div>
      {/* <div className='mt-2 text-center'>
        <button
          type='submit'
          disabled={processing}
          className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition duration-200 ease-in-out'
        >
          {submitText}
        </button>
      </div> */}
    </form>
  );
}
