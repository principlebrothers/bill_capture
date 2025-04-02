import { Head, Link } from '@inertiajs/react'
import Form from './Form'

export default function New({ company }) {
  return (
    <>
      <Head title="New company" />

      <h1>New company</h1>

      <Form
        company={company}
        onSubmit={(form) => {
          form.transform((data) => ({ company: data }))
          form.post('/companies')
        }}
        submitText="Save Company"
      />

      <br />

      <div>
        <Link href="/companies">Back to companies</Link>
      </div>
    </>
  )
}
