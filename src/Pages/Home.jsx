import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import axios from "axios";
function Home() {
  const [data, setData] = useState([]);
    useEffect (() => {
        const fetchData = async () => {
            try{
              const res = await axios.get('https://fakestoreapi.com/products?limit=8');
                setData(res.data);
                console.log(res.data)
            }catch (error){
                console.log("Error : ",error)
            }
        };
        fetchData();
    },[])
  return ( 
    <div className="font-sans w-[90%] max-w-5xl mx-auto">


      {/* Hero Section */}
      <div className="bg-[url('/slide_02.jpg')] bg-cover bg-top sm:bg-center h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center px-4 lg:px-40">


        <div className="bg-black/40 p-6 rounded-lg">
          <h3 className="lg:text-2xl text-xl font-bold text-white">New collection</h3>
          <h1 className="lg:text-4xl text-2xl font-bold text-white">
            Luxury Without <br /> Labels
          </h1>
          <p className="text-white">Explore new-in product and best sellers</p>

          <button className="bg-white text-primary hover:bg-gray-200 hover:scale-105 transition py-2 px-4 rounded-full mt-3">
            View Collection
          </button>
        </div>

      </div>

         {/* best sellers */}
      <div className="mt-10 w-[90%] max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Best Sellers</h2>
        <p className="text-gray-500 text-center">
          Explore new-in product and best sellers
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
          
          {
            data.map(item => (
              <Card key={item.id} data={item} />
            ))
          }
          
         
        </div>
        <div className="text-center mt-8">
          <button className="bg-transparent text-black border hover:bg-black hover:text-white py-2 px-4 rounded-full mb-10">
            Explore more 
          </button>
         </div>
      </div>
    </div>
  )
}

export default Home