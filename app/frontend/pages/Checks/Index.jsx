import { Head, Link } from '@inertiajs/react';
import Check  from './Check';

export default function Index({ checks, flash }) {
  return (
    <>
      <Head title='Checks' />

      {flash.notice && <p style={{ color: 'green' }}>{flash.notice}</p>}

      <h1 className='text-center font-extrabold text-4xl my-4'>Checks</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {checks.map((check) => (
          <div key={check.id}>
            <Check check={check} />
          </div>
        ))}
      </div>
    </>
  );
}
