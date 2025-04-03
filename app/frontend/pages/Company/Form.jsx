import { useForm } from '@inertiajs/react'
import Button from '../../components/Button'

export default function Form({ company, onSubmit, submitText }) {
  const form = useForm({
    name: company.name || '',
  })
  const { data, setData, errors, processing } = form

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type='text'
          name='name'
          id='name'
          value={data.name}
          onChange={(e) => setData('name', e.target.value)}
          placeholder='Enter company name'
          className='w-full p-2 border border-gray-300 rounded-md font-normal'
          autoComplete='off'
          required
          autoFocus
        />
        {errors.name && (
          <div style={{ color: 'red' }}>{errors.name.join(', ')}</div>
        )}
      </div>
      <div className='mt-2 text-center'>
        <Button
          type='submit'
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            processing ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
          }`}
          content={submitText}
          disabled={processing}
        />
      </div>
    </form>
  );
}
