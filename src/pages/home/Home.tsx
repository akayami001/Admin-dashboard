import ChartBox from '../../components/chartBox/ChartBox'
import TopBox from '../../components/topBox/TopBox'
import './home.scss'
const Home = () => {
  return (
    <div className='home'>
      <div className="box box1"><TopBox/></div>
      <div className="box box2"><ChartBox/></div>
      <div className="box box3"><ChartBox/></div>
      <div className="box box4"><ChartBox/></div>
      <div className="box box5"><ChartBox/></div>
      <div className="box box6"> box2</div>
      <div className="box box7"> box2</div>
      <div className="box box8"> box2</div>
      <div className="box box9"> box2</div>
    </div>
  )
}

export default Home