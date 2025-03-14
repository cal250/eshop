
function Hero() {
  const imageNumber = 5;
  return (
    <div className="mt-4">
      <div className="relative w-full h-[530px] bg-gray-200 rounded-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={`https://placeimg.com/1410/450/fashion`}
            alt="hero image"
            className=" rounded-lg"
          />
        </div>
           
        <div className="w-full item-center flex justify-center mt-2 z-20 bottom-5 bg-gray-200  absolute ">
           {Array.from({ length: imageNumber }, (_, i) => (
            <div key={i} className="border-2 border-gray-600  bg-gray-100 w-3 h-3 rounded-full mx-0.5"/> 
           ))} 
        </div>
      </div>
   
    </div>
  )
}

export default Hero