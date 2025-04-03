import { useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import Button from '../../components/Button';

const Form = ({
  check,
  errors,
  submitText,
  companyId,
  capturedFile,
  isEdit = false,
}) => {
  const form = useForm({
    number: check?.number || '',
    invoice_numbers: check?.invoice_numbers || '',
    image: null,
  });

  const { data, setData, processing } = form;

  useEffect(() => {
    if (capturedFile) {
      setData('image', capturedFile);
    }
  }, [capturedFile, setData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    form.transform((data) => ({ check: data }));

    if (isEdit) {
      form.put(`/companies/${companyId}/checks/${check.id}`);
    } else {
      form.post(`/companies/${companyId}/checks`);
    }
  };

  const isFormValid = data.number.trim() !== '' && data.invoice_numbers.trim() !== '' && data.image !== null;

  return (
    <form onSubmit={handleSubmit}>
      <div className='my-4'>
        <input
          id='number'
          name='number'
          placeholder='Enter Check Number'
          autoComplete='off'
          type='text'
          className='w-full p-2 border border-gray-300 rounded-md font-normal'
          required
          autoFocus
          value={data.number}
          onChange={(e) => setData('number', e.target.value)}
          disabled={isEdit}
        />
        {errors?.number && <div className='text-red-600'>{errors?.number}</div>}
      </div>

      <div>
        <input
          id='invoice_numbers'
          name='invoice_numbers'
          type='text'
          autoComplete='off'
          className='w-full p-2 border border-gray-300 rounded-md font-normal'
          required
          value={data.invoice_numbers}
          onChange={(e) => setData('invoice_numbers', e.target.value)}
          placeholder='Enter Invoice Numbers (e.g 1234, 1235, 1236)'
        />
        {errors?.invoice_numbers && <div className='text-red-600'>{errors?.invoice_numbers}</div>}
      </div>
      <Button
        type={'submit'}
        disabled={!isFormValid || processing}
        className={`bg-blue-500 text-white px-4 py-2 rounded mt-4 ${isFormValid ? '' : 'opacity-50 cursor-not-allowed'}`}
        content={processing ? 'Processing...' : submitText}
      />
    </form>
  );
};

export default Form;
