import { Head, Link } from '@inertiajs/react';
import Form from './Form';
import useWebcamCapture from '../../hooks/useWebcamCapture';

const New = ({ company, check, errors }) => {
  const { file, WebcamComponent } = useWebcamCapture();

  return (
    <>
      <Head title='New Check' />

      <h1>New Check</h1>

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

      <br />

      <div>
        <Link href='/companies'>Back to companies</Link>
      </div>
    </>
  );
};

export default New;
