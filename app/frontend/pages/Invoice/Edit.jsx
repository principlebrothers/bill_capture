import { Head, Link } from '@inertiajs/react'
import Form from './Form'

export default function Edit({ invoice }) {
  return (
    <>
      <Head title="Editing invoice" />

      <h1>Editing invoice</h1>

      <Form
        invoice={invoice}
        onSubmit={(form) => {
          form.transform((data) => ({ invoice: data }))
          form.patch(`/invoices/${invoice.id}`)
        }}
        submitText="Update Invoice"
      />

      <br />

      <div>
        <Link href={`/invoices/${invoice.id}`}>Show this invoice</Link>
        {' | '}
        <Link href="/invoices">Back to invoices</Link>
      </div>
    </>
  )
}
