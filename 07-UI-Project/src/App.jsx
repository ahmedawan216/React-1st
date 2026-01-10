import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Navbar from './components/Section1/Navbar'

const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
      desc: 'Prime customers, that have access to bank credit and are satisfied with the current product.',
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      desc: 'Customers who have limited access to financial services and feel their needs are not fully met.',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      desc: 'Individuals who lack sufficient access to mainstream financial institutions and credit.',
      tag: 'Underbanked'
    },
    {
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1000&auto=format&fit=crop&q=60',
    desc: 'Young professionals seeking digital-first banking experiences with high flexibility.',
    tag: 'Tech-Savvy'
    },
    {
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1c2luZXNzfGVufDB8fDB8fHww',
    desc: 'Small business owners requiring specialized credit lines and rapid financial support.',
    tag: 'Entrepreneurs'
    },
    {
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&auto=format&fit=crop&q=60',
    desc: 'High-net-worth individuals looking for premium investment opportunities and wealth management.',
    tag: 'Elite'
    }
  ]

  return (
    <div>
      <Section1 users={users} />
      <Section2/>
      
    </div>
  )
}

export default App
