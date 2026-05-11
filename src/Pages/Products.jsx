import Card from '../components/Card.jsx';
import { useParams } from 'react-router-dom';
import useGetAllProduct from '../Hooks/useGetAllProduct.js';
function Products() {
  const { data, isLoading } = useGetAllProduct();
  return (
    <div className="my-16 w-[90%] max-w-5xl mx-auto">
      <h1 className='text-4xl font-bold text-primary text-center mt-10 mb-5'>
        All Products
      </h1>
      {
        isLoading == true &&(
          <div className="flex justify-center items-center my-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )
        
      }{
        !isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {
              data.map(item => (
                <Card key={item.id} data={item} />
              ))
            }
          </div>
        )
      }

    </div>

  )
}

export default Products
