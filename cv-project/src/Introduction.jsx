import cat from './assets/cat.png'

const Introduction = () => {
  return (
    <div className='container'>
      <h3 className='name'>I'm Slama Med Amine</h3>
      <img className='pfp' src={cat} sizes='' style={{height: 100, width: 100}}/>
      <p>Student: 1st Year Engineers degree</p>
      <hr/>
      <p>Emails: </p>
      <ul>
        <li>
          mohammedaminslama@gmail.com
        </li>
        <li>
          slamam8@yahoo.fr
        </li>
      </ul>
      <p>My Phone: +216 21 345 678</p>
      <hr/>
    </div>
  )
}

export default Introduction
