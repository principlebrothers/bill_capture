import { useForm } from '@inertiajs/react';
import { useEffect } from 'react';

const Form = ({ check, errors, submitText, companyId, capturedFile, isEdit = false }) => {
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
      <div>
        <label>Check Number</label>
        <input
          id='number'
          name='number'
          placeholder='Check Number'
          autoComplete='off'
          type='text'
          value={data.number}
          onChange={(e) => setData('number', e.target.value)}
          disabled={isEdit}
        />
        {errors?.number && <div>{errors?.number}</div>}
      </div>

      <div>
        <label>Invoice Numbers (comma-separated)</label>
        <input
          id='invoice_numbers'
          name='invoice_numbers'
          type='text'
          value={data.invoice_numbers}
          onChange={(e) => setData('invoice_numbers', e.target.value)}
          placeholder='1234, 1235, 1236'
        />
        {errors?.invoice_numbers && <div>{errors?.invoice_numbers}</div>}
      </div>

      <button type='submit' disabled={!isFormValid || processing}>
        {submitText}
      </button>
    </form>
  );
};

export default Form;
