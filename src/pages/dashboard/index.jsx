import { Chart } from '@components/Chart'
import { Header } from '@components/Header'
import endPoints from '../../services/API'
import { countOccurrences } from 'utils/countOccurrences'
import { useFecth } from 'hooks/useFetch'
import TableDashboard from '@components/TableDashboard'

const LIMIT = 10
const OFFSET = 10

export default function Dashboard() {
  const [products] = useFecth(endPoints.products.getProducts(LIMIT, OFFSET))
  const categories = products?.map((product) => product.category.name)
  return (
    <>
      <Header />
      <h1 className='dashboard-title'>Dashboard</h1>
      <div className='chart-container'>
        <Chart data={countOccurrences(categories)} />
      </div>
      <TableDashboard data={products} />
    </>
  )
}
