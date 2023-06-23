import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
export function Pagination({ pagination, setPagination }) {
  const { limit, offset } = pagination
  return (
    <div className='flex items-center justify-between border-t border-gray-200  px-4 py-3 sm:px-6'>
      <div className=' flex flex-1 items-center justify-center'>
        <div>
          <nav
            className=' inline-flex -space-x-px rounded-md shadow-sm'
            aria-label='Pagination'>
            <a
              href='#header'
              className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-400 hover:bg-gray-50  focus:outline-offset-0'>
              <span className='sr-only'>Previous</span>
              <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
            </a>
            <a
              href='#header'
              aria-current='page'
              className='relative z-10 inline-flex items-center bg-greenBrand px-4 py-2 text-sm font-semibold text-gray-900 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '>
              {offset}
            </a>
            <a
              onClick={() =>
                setPagination({ ...pagination, offset: offset + limit })
              }
              href='#header'
              className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
              {offset + 1}
            </a>
            <a
              onClick={() =>
                setPagination({ ...pagination, offset: offset + (limit * 2) })
              }
              href='#header'
              className='relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex'>
              {offset + 2}
            </a>
            <span className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-400 focus:outline-offset-0'>
              ...
            </span>
            <a
              href='#header'
              className='relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex'>
              8
            </a>
            <a
              href='#header'
              className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
              9
            </a>
            <a
              href='#header'
              className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
              10
            </a>
            <a
              href='#header'
              className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
              <span className='sr-only'>Next</span>
              <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
