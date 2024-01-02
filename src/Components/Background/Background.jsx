import './Background.css'
import video1 from '../../assets/video1.mp4'
import bmw1 from '../../assets/bmw1.jpg'
import bmw2 from '../../assets/bmw2.jpg'
import bmw3 from '../../assets/bmw3.jpg'
const Background = ({playStatus,heroCount}) => {
 
  if(playStatus) {
    return (
      <video className='background fade-in' autoPlay loop muted>
        <source src={video1} type='video/mp4' />
      </video>
    )
  }
  else if (heroCount===0)
  {
    return <img src={bmw1} className='background fade-in' alt="" />
  } 
  else if (heroCount===1)
  {
    return <img src={bmw2} className='background fade-in' alt="" />
  } 
  else if (heroCount===2)
  {
    return <img src={bmw3} className='background fade-in' alt="" />
  } 
}

export default Background
