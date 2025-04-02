import { Head, Link } from '@inertiajs/react'
import Invoice from './Invoice'

export default function Show({ invoice, flash }) {
  return (
    <>
      <Head title={`Invoice #${invoice.id}`} />

      {flash.notice && <p style={{ color: 'green' }}>{flash.notice}</p>}

      <h1>Invoice #{invoice.id}</h1>

      <Invoice invoice={invoice} />

      <div>
        <Link href={`/invoices/${invoice.id}/edit`}>Edit this invoice</Link>
        {' | '}
        <Link href="/invoices">Back to invoices</Link>

        <br />

        <Link
          href={`/invoices/${invoice.id}`}
          as="button"
          method="delete"
        >
          Destroy this invoice
        </Link>
      </div>
    </>
  )
}
