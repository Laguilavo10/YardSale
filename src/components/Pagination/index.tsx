import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

interface Props {
  itemsPerPage: number
  data: any[]
  setCurrentItems: React.Dispatch<any>
}

export function Pagination({ itemsPerPage, data, setCurrentItems }: Props) {
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(data?.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(data?.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, data])

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length
    setItemOffset(newOffset)
  }
  return (
    <>
      {data?.length <= itemsPerPage ? null : (
        <ReactPaginate
          nextLabel='Siguiente >'
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel='< Anterior'
          pageClassName='border border-slate-400  rounded-md cursor-pointer bg-white/70'
          pageLinkClassName='flex w-full h-full px-3 items-center justify-center'
          nextLinkClassName='flex w-full h-full p-2 items-center justify-center text-sm bg-white/70 rounded-md border border-slate-400'
          previousLinkClassName='flex w-full h-full p-2 items-center justify-center text-sm bg-white/70 rounded-md border border-slate-400'
          previousClassName=''
          nextClassName=''
          breakLabel='...'
          breakClassName='flex justify-center'
          breakLinkClassName='page-link'
          containerClassName=' m-auto flex p-2 justify-end rounded-md-md gap-3 bg-opacity-80 flex-col sm:flex-row font-bold w-[200px] md:w-auto'
          activeClassName='!bg-greenBrand'
          renderOnZeroPageCount={null}
        />
      )}
    </>
  )
}
