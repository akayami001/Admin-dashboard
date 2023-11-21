import { Link } from 'react-router-dom'
import './chartBox.scss'
import { ResponsiveContainer, Line, LineChart } from 'recharts'

const ChartBox = (props) => {
  return (
    <div className='chartBox'>
      <div className="boxInfo">
        <div className="title">
        <img src="/user.svg" alt="User" />
        <span>{props.title}</span>
        </div>
        <h1>11.222</h1>
        <Link to="/">View All</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
<ResponsiveContainer>
  <LineChart>
    <Line/>
  </LineChart>
</ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentage">45%</span>
          <span className="duration">This Month</span>
        </div>
      </div>
    </div>
  )
}

export default ChartBox