import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolors] = useState(true)
  const [pric, setprice] = useState(true)
  const [catog, setcatog] = useState(true)
  const [siz, setsiz] = useState(true)
  const filteritems = ['MEN', 'WOMEN', 'BAGS', 'ACCESSORIES', 'LUGGAGES', 'OFFERS', 'NEW', 'LEATHER CRAFTS', 'TRY & BUY @HOME', 'PICKUP@STORE', 'ONLINE SPECIAL']
  const imgs = ['WhatsApp Image 2022-10-11 at 7.29.10 PM (5).jpeg', 'WhatsApp Image 2022-10-11 at 7.29.10 PM.jpeg', 'WhatsApp Image 2022-10-11 at 7.29.10 PM (1).jpeg', 'WhatsApp Image 2022-10-11 at 7.29.10 PM (4).jpeg', 'WhatsApp Image 2022-10-11 at 7.29.10 PM (10).jpeg', 'WhatsApp Image 2022-10-11 at 7.29.10 PM (7).jpeg']
  const colors = [
    {
      "name": "Black",
      "code": "#000000"
    },
    {
      "name": "Brown",
      "code": "#A52A2A"
    },
    {
      "name": "Tan",
      "code": "#D2B48C"
    },
    {
      "name": "Maroon",
      "code": "#800000"
    },
    {
      "name": "Blue",
      "code": "#0000FF"
    },
    {
      "name": "Green",
      "code": "#008000"
    },
    {
      "name": "Olive",
      "code": "#808000"
    },
    {
      "name": "Beige",
      "code": "#F5F5DC"
    },
    {
      "name": "Red",
      "code": "#FF0000"
    },
    {
      "name": "Yellow",
      "code": "#FFFF00"
    },
    {
      "name": "Cyan",
      "code": "#00FFFF"
    },
    {
      "name": "Magenta",
      "code": "#FF00FF"
    },
    {
      "name": "White",
      "code": "#FFFFFF"
    },
    {
      "name": "Orange",
      "code": "#FFA500"
    },
    {
      "name": "Purple",
      "code": "#800080"
    },
    {
      "name": "Pink",
      "code": "#FFC0CB"
    },
    {
      "name": "Gray",
      "code": "#808080"
    },
    {
      "name": "Indigo",
      "code": "#4B0082"
    },
    {
      "name": "Violet",
      "code": "#EE82EE"
    },
    {
      "name": "Gold",
      "code": "#FFD700"
    }
  ]
  const prices = [
    "Rs. 0 To Rs. 1000",
    "Rs. 1001 To Rs. 2000",
    "Rs. 2001 To Rs. 3000",
    "Rs. 3001 To Rs. 4000",
    "Rs. 4001 To Rs. 5000",
    "Rs. 5001 To Rs. 6000",
    "Rs. 6001 To Rs. 7000",
    "Rs. 7001 To Rs. 8000",
    "Rs. 8001 To Rs. 9000",
    "Rs. 9001 To Rs. 10000"
  ]
  const Categories = [
    "Sandal",
    "Slipper",
    "Sneaker",
    "Boot",
    "Loafer",
    "Flat",
    "Heel",
    "Moccasin",
    "Oxford",
    "Wedge"
  ]

  return (
    <body className='bg-[#dbdad2] px-10 py-6'>

      <div>
        <div >
          <nav id='nav' className='flex justify-between'>
            <div className='flex gap-6'>
              <img src="./menu.svg" alt="" width={25} />
              <img src="./search.svg" alt="" width={25} /></div>
            <div>
              <img src="./logo.png" alt="" />
            </div>
            <div className='flex justify-center items-center gap-6'>
              <span className='text-xl font-Quicksand font-600'>Login</span>
              <img src="./bag.svg" alt="" width={25} /></div>
          </nav>
          <div id='filter' className='flex justify-between mt-3 font-Quicksand font-600'>
            {filteritems.map(item => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <main className='flex mt-6'>
          <div className='border-black w-[26vw]'>
            <div className='text-skin-base font-700 font-Quicksand flex gap-2'><img src="./filter.svg" alt="no" width={25} />Hide Filters</div>

            <div className='bg[#d4d4cc] border-2 border-white px-2 py-1 font-500 text-xl my-4 flex justify-between cursor-pointer'
              onClick={() => {
                setcolors(pre => !pre)
              }}><span>Colours</span> <img src="./downblack.svg" alt="" width={20} /> </div>
            {color && (<div className='px-2 '>
              <ul className='h-[25vh] overflow-y-scroll flex flex-col gap-1'>
                {colors.map(color => (
                  <li className='flex gap-2 items-center font-500'><input type="checkbox" id={`${color.name}`} className='        
                          w-4 h-4 border
                           appearance-none
                          border-gray-500 
                          cursor-pointer 
                           checked:appearance-auto 
                          ' /><label for={`${color.name}`} className='flex gap-2 items-center'
                    ><div className={`w-4 h-4 rounded-full`} style={{ backgroundColor: color.code }}></div>{`${color.name}`}</label></li>
                ))}
              </ul>
            </div>)}
            <div className='bg[#d4d4cc] border-2 border-white px-2 py-1 font-700 font-Quicksand text-xl my-4 flex justify-between cursor-pointer'
              onClick={() => {
                setprice(pre => !pre)
              }}><span>Price</span> <img src="./downblack.svg" alt="" width={20} /> </div>
            {pric && (<div>
              <ul className='h-[11vh] overflow-y-scroll font-500 flex flex-col gap-1 px-2'>
                {prices.map(price => (
                  <li className='flex gap-2 items-center'><input type="checkbox" id={`${price}`} className='w-4 h-4 border
                           appearance-none
                          border-gray-500 
                          cursor-pointer 
                           checked:appearance-auto ' /><label for={`${price}`} className='flex gap-2 items-center'
                    >{`${price}`}</label></li>
                ))}
              </ul>
            </div>)}
            <div className='bg[#d4d4cc] border-2 border-white px-2 py-1 font-700 font-Quicksand text-xl my-4 flex justify-between cursor-pointer'
              onClick={() => {
                setsiz(pre => !pre)
              }}><span>Size</span> <img src="./downblack.svg" alt="" width={20} /> </div>
            {siz && (<div className='my-4 flex flex-col gap-2 px-2'>
              <div className='flex gap-3'>
                <span className='border-2 border-black text-center py-1 min-w-12'>6</span>
                <span className='border-2 border-black text-center py-1 min-w-12'>7</span>
                <span className='border-2 border-black text-center py-1 min-w-12'>8</span>


              </div>
              <div className='flex gap-3'>
                <span className='border-2 border-black text-center py-1 min-w-12'>9</span>
                <span className='border-2 border-black text-center py-1 min-w-12'>10</span>
                <span className='border-2 border-black text-center py-1 min-w-12'>11</span>
              </div>
            </div>)}
            <div className='bg[#d4d4cc] border-2 border-white px-2 py-1 font-700 font-Quicksand text-xl my-4 flex justify-between cursor-pointer'
              onClick={() => {
                setcatog(pre => !pre)
              }}><span>Categories</span> <img src="./downblack.svg" alt="" width={20} /> </div>
            {catog && (<div className='px-2'>
              <ul className='h-[30vh] overflow-y-scroll flex flex-col gap-1'>
                {Categories.map(item => (
                  <li className='flex gap-2 items-center font-500'><input type="checkbox" id={`${item}`} className='w-4 h-4 border
                           appearance-none
                          border-gray-500 
                          cursor-pointer 
                           checked:appearance-auto ' /><label for={`${item}`} className='flex gap-2 items-center'
                    >{`${item}`}</label></li>
                ))}
              </ul>
            </div>)}
          </div>
          {/* grid starts here */}
          <div className='ml-8'>
            <div className='flex justify-between w-[74vw]'>
              <div className='flex justify-between' >
                <span className='text-skin-base font-700 font-Quicksand'>Active Filters :&nbsp;</span>
                <button className='font-600 bg-[#c1c1c1] mx-2 px-2'>X SIZE 40</button>
                <button className='font-600 bg-[#c1c1c1] mx-2 px-2'>X COLOUR BROWN</button>
                <button className='font-600 bg-[#c1c1c1] mx-2 px-2'>X SIZE 10</button>
                <button className='font-600 bg-[#c1c1c1] mx-2 px-2'>X Premiums 10</button>
                <button className='font-600 bg-[#c1c1c1] mx-2 px-2'>X PRIZE RS. 4999</button>
                <button className='font-600 bg-[#c1c1c1] mx-2 px-2'>X CLEAR ALL</button>
              </div>
              <div className='text-skin-base font-700 font-Quicksand flex jus gap-1'>Sort by <img src="./downarrow.svg" alt="" width={15} />
              </div>
            </div>
            <div className='grid grid-cols-3 gap-20 mt-6'>

              {
                imgs.map(img => (
                  <div key={img}>
                    <div className='flex justify-center h-[29vh]'><img src={`./${img}`} alt="" width='100%' height='70px' className=' hover:scale-150 duration-300' /></div>

                    <div className='flex justify-between mt-6 px-4'>
                      <span><img src="./love.svg" alt="love" width={25} /></span>
                      <div className='flex gap-4'>
                        <div className='w-5 h-5 bg-skin-black rounded-full'></div>
                        <div className='w-5 h-5 bg-skin-fill  rounded-full'></div>
                      </div>
                      <span><img src="./cards.svg" alt="cards" width={25} /></span>
                    </div>
                    <div className='flex justify-between  font-700 font-Quicksand  my-2'><span>Durable Hand Executive</span> <span className='flex gap-2'>
                      <span>4.8</span>
                      <span><img src="./star.svg" alt="star" width={25} /></span>
                    </span>
                    </div>
                    <div className='font-700 font-Quicksand'>Bag</div>
                    <div className='font-700 font-Quicksand flex gap-2'>
                      <span>Rs. 4999</span>
                      <span className='text-gray-500 line-through'>Rs. 5999</span>
                      <span className='text-skin-base'>(20% OFF)</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </main>
      </div>
    </body>

  )
}

export default App
