import React from "react"
import Movieapp from '../assets/portfolio/movieapp.png'
import Newyear from '../assets/portfolio/newyear.png'
import  Scenic from '../assets/portfolio/Scenic.png'



const Portfolio = () => {
  
  const portfolios = [
    {
      id: 1,
      name: 'Movie App',
      src: Movieapp,
      tech: 'Tech:HTML,CSS,ReactJs',
      ghLink: 'https://github.com/Jayashree-saravanan/Movie-app'
    },
    {
      id: 2,
      name: 'Newyear countdown',
      src: Newyear,
      tech: 'Tech: JavaScript,Oops,HTML,Css. ',
      ghLink: 'https://github.com/Jayashree-saravanan/newyear_js'
    },
    {
      id: 3,
      name: 'Scenic App',
      src: Scenic,
      tech: 'Tech: HTML,CSS,ReactJs ',
      ghLink: 'https://github.com/Jayashree-saravanan/Scenic-app'
    },

  
  ]
  return (
    <div name='portfolio' className='bg-[#190205] w-full pb-5 text-white md:h-fit  '>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className=' pb-8'>
          <p className=' text-4xl font-bold inline border-b-4  border-gray-500'>Portfolio</p>
          <p className='font-signature py-6'>Check some of my work right here.</p>
        </div>
        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 sm:px-0'> 
        {
          portfolios.map(({id, src, name, tech, ghLink}) => (
            
            <div key={id} className=' shadow-lg shadow-gray-600 rounded-lg'>
              <p className=' text-center font-signature pb-3'>{name}</p>
            <img src={src} alt="" className=' rounded-md duration-200 hover:scale-105' />
              <p className=' text-center pt-3 font-signature'>{tech}</p>
            <div className=' flex items-center justify-center'>

             
              <a className='font-signature bg-[#ffb703] rounded-xl w-1/2 px-6 py-3 m-4 duration-200 text-center text-[#00171F]' href={ghLink}>VIEW CODE</a>
            </div>
          </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Portfolio