import { Link, usePage } from '@inertiajs/react';

function Layout({ children }) {
  const { url } = usePage();
  return (
    <>
      <header className='sticky top-0 z-50'>
        <nav className='bg-gray-800 p-4 '>
          <ul className='flex space-x-4 justify-center'>
            <li>
              <Link
                href='/companies'
                className={`hover:text-gray-300 hover:underline underline-offset-4 font-medium transition duration-200 ease-in-out transform hover:scale-105 ${
                  url === '/companies'|| url === '/'
                    ? 'underline underline-offset-4 text-white'
                    : 'text-yellow-500'
                }`}
                preserveScroll
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                href='/invoices'
                className={`hover:text-gray-300 hover:underline underline-offset-4 font-medium transition duration-200 ease-in-out transform hover:scale-105 ${
                  url === '/invoices'
                    ? 'underline underline-offset-4 text-white'
                    : 'text-yellow-500'
                }`}
                preserveScroll
              >
                Invoice
              </Link>
            </li>
            <li>
              <Link
                href='/checks'
                className={`hover:text-gray-300 hover:underline underline-offset-4 font-medium transition duration-200 ease-in-out transform hover:scale-105 ${
                  url === '/checks'
                    ? 'underline underline-offset-4 text-white'
                    : 'text-yellow-500'
                }`}
                preserveScroll
              >
                Check
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className='container mx-auto px-4'>
        <article>{children}</article>
      </main>

      <footer className='bg-gray-800 p-4 text-center text-white fixed bottom-0 mt-8 w-full'>
        <p>
          &copy; 2025{' '}
          <a
            href='https://github.com/principlebrothers'
            target='_blank'
            className='hover:underline hover:text-gray-300 transition duration-200 ease-in-out'
          >
            Ernest Anyewe Adonu
          </a>
        </p>
        <p>All rights reserved.</p>
      </footer>
    </>
  );
}
export default Layout;