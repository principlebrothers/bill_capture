import { Head, Link } from '@inertiajs/react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Form from './Form';

export default function New({ company }) {
  return (
    <section className='grid place-items-center min-h-screen'>
      <Head title='New company' />
      <article className='w-full max-w-2xl p-4 bg-gray-100 shadow-md rounded-lg'>
        <Link
          href='/companies'
          className='text-gray-500 text-3xl hover:text-gray-700'
        >
          <span className='sr-only'>Back</span>
          <IoMdArrowRoundBack />
        </Link>
        <h1 className='justify-self-center text-2xl my-4'>New company</h1>
        <Form
          company={company}
          onSubmit={(form) => {
            form.transform((data) => ({ company: data }));
            form.post('/companies');
          }}
          submitText='Save Company'
        />
      </article>
      <style jsx="true">{`
        html,
        body {
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
