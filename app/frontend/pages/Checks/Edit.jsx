import { Head, Link } from '@inertiajs/react';
import Form from './Form';
import useWebcamCapture from '../../hooks/useWebcamCapture';

const Edit = ({ company, check, errors }) => {
  const { file, image, WebcamComponent } = useWebcamCapture();

  return (
    <>
      <Head title={`Edit Check ${check.number}`} />

      <h1>Edit Check {check.number}</h1>

      <div>
        {image ? (
          <>
            <img src={image} alt='Captured' style={{ width: '150px' }} />
          </>
        ) : (
          <WebcamComponent />
        )}
        {errors?.image && <div>{errors?.image}</div>}
      </div>

      <Form
        companyId={company.id}
        submitText='Update Check'
        errors={errors}
        check={check}
        isEdit={true}
        capturedFile={file}
      />

      <br />

      <div>
        <Link href={`/companies/${company.id}`}>Back to Company</Link>
      </div>
    </>
  );
};

export default Edit;
