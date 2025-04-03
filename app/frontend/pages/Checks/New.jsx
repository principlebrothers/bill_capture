import { Head, Link } from '@inertiajs/react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Form from './Form';
import useWebcamCapture from '../../hooks/useWebcamCapture';

const New = ({ company, check, errors }) => {
  const { file, WebcamComponent } = useWebcamCapture();

  return (
    <section className='grid place-items-center min-h-screen mb-16'>
      <Head title='New Check' />
      <article className='w-full max-w-2xl p-4 bg-gray-100 shadow-md rounded-lg'>
        <Link
          href='/companies'
          className='text-gray-500 text-3xl hover:text-gray-700'
        >
          <span className='sr-only'>Back</span>
          <IoMdArrowRoundBack />
        </Link>
        <h1 className='justify-self-center text-2xl my-4'>New Check</h1>

        <div>
          <WebcamComponent />
          {errors?.image && <div>{errors?.image}</div>}
        </div>

        <Form
          companyId={company.id}
          submitText='Save Check'
          errors={errors}
          check={check}
          capturedFile={file}
        />
      </article>
    </section>
  );
};

export default New;
