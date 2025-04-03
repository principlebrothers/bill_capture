import { Head, Link } from '@inertiajs/react'
import { IoMdArrowRoundBack } from 'react-icons/io';
import Form from './Form'

export default function New({ invoice, companies }) {
  return (
    <section className='grid place-items-center min-h-screen'>
      <Head title='New invoice' />
      <article className='w-full max-w-2xl p-4 bg-gray-100 shadow-md rounded-lg'>
        <Link
          href='/invoices'
          className='text-gray-500 text-3xl hover:text-gray-700'
        >
          <span className='sr-only'>Back</span>
          <IoMdArrowRoundBack />
        </Link>

        <h1 className='justify-self-center text-2xl my-4'>New invoice</h1>

        <Form
          invoice={invoice}
          onSubmit={(form) => {
            form.transform((data) => ({ invoice: data }));
            form.post('/invoices');
          }}
          submitText='Create Invoice'
          companies={companies}
        />
      </article>
      <style jsx='true'>{`
        html,
        body {
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
