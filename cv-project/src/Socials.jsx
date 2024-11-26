import FB from './assets/FB Logo.png'
import Insta from './assets/instagram.webp'

const Socials = () => {
  return (
    <>
      <h2>My Socials</h2>
      <a href="https://www.facebook.com/SlamaM.Amine/" target="_blank"> <img src={FB} style={{ width: 30, height: 30 }} /></a>
      <a href="https://www.instagram.com/slamammia/" target="_self"><img src={Insta} style={{ width: 30, height: 30 }} /></a>
    </>
  )
}

export default Socials
