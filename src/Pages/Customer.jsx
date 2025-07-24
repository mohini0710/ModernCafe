const Customer =()=>{
    return(
        <div className="relative">
          <img className="w-full h-[100%]  block" src="https://coffeeza.in/cdn/shop/articles/Coffee_Beans_Blog_3888x.jpg?v=1670838724" alt="" />
          <div className="flex justify-arround pt-[80px] pl-[30px] absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 text-white font-bold z-10 w-[100%]   h-[100%]">
              <div>
                  <div className="flex mb-[30px]">
                  <img className="rounded-full h-[60px]" src="https://images.squarespace-cdn.com/content/v1/5c5ce047d86cc973de4af5ee/697dd3e6-5be3-4ddf-ae0f-5d9a78f8674b/jfk+airport%40300x.png" alt="" />
                  <h1 className="text-[2rem] ml-[10px] mt-[7px]">HolyCow Coffee and Bakery House</h1>
                  </div>
              <p className="text-gray-400 mt-[10px] text-[1.1rem]">HolyCow Café is a great spot for coffee in the morning or a quick <br /> bite to eat. It’s located in the heart of downtown, making it <br /> convenient for those  who work in the area. The café website also has <br /> a selection of pastries and baked goods. <br />  spot that is perfect for meeting up with friends or grabbing a treat on the <br /> go.At our coffee shop, every cup tells a story. From the careful selection of <br /> premium beans to the artful brewing process, we are dedicated to creating <br /> moments of warmth, comfort, and connection.</p>
              <p className="mt-[30px] ml-[5px] text-chocolate-orange text-[1.1rem]">A Cleared  Mind</p>
              <p className="mt-[10px] ml-[5px] text-chocolate-orange text-[1.1rem]">Boost Of Energy</p>
              <p className="mt-[10px] ml-[5px] text-chocolate-orange text-[1.1rem]">A Science Backed</p>
             
              <p className="mt-[10px] ml-[5px] text-chocolate-orange text-[1.1rem]">Certified organic</p>

              </div>
              <div>
                <img className="h-[450px] ml-[50px]" src="https://wordpress.zozothemes.com/cofybrew/wp-content/uploads/sites/41/2025/04/coffee-bag-1.webp" alt="" />
              </div>
          </div> 
        </div>
    )

}
export default Customer