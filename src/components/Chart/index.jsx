import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement
)

export function Chart({ data }) {
  const labels = Object.keys(data)
  const values = Object.values(data)
  return (
    <>
      <Bar
        data={{
          labels,
          datasets: [
            {
              label: 'Categories',
              data: values,
              borderWidth: 0,
              backgroundColor: [
                'yellow',
                'green',
                'blue',
                'red',
                'black',
                'violet'
              ]
            }
          ]
        }}
      />
    </>
  )
}
