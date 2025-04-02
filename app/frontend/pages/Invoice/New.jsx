import { Head, Link } from '@inertiajs/react'
import Form from './Form'

export default function New({ invoice, companies }) {
  return (
    <>
      <Head title="New invoice" />

      <h1>New invoice</h1>

      <Form
        invoice={invoice}
        onSubmit={(form) => {
          form.transform((data) => ({ invoice: data }))
          form.post('/invoices')
        }}
        submitText="Create Invoice"
        companies={companies}
      />

      <br />

      <div>
        <Link href="/invoices">Back to invoices</Link>
      </div>
    </>
  )
}
