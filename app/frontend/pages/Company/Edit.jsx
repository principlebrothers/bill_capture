import { Head, Link } from '@inertiajs/react'
import Form from './Form'

export default function Edit({ company }) {
  return (
    <>
      <Head title="Editing company" />

      <h1>Editing company</h1>

      <Form
        company={company}
        onSubmit={(form) => {
          form.transform((data) => ({ company: data }))
          form.patch(`/companies/${company.id}`)
        }}
        submitText="Update Company"
      />

      <br />

      <div>
        <Link href={`/companies/${company.id}`}>Show this company</Link>
        {' | '}
        <Link href="/companies">Back to companies</Link>
      </div>
    </>
  )
}
