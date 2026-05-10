import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import useGetOneProduct from '../Hooks/useGetOneProduct';
function ProductsDetail() {
    const { data, isLoading } = useGetOneProduct(useParams().id);
    const route = useParams();
    return (
        <>
            {
                isLoading == true && (
                    <div className="flex justify-center items-center my-10">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                )

            }{
                !isLoading && (
                    <div>
                        <div className="w-[90%] max-w-5xl mx-auto">
                            <Link to="/">Home</Link>
                            <span className='mx-2'>/</span>
                            <Link to="/products">Products</Link>
                            <span className='mx-2'>/</span>
                            <span>{data.title}</span>
                        </div>
                        <div className="w-[90%] max-w-5xl mx-auto  my-10 py-2 font-sens">
                            <div className="items-start">
                                <div className='grid lg:grid-cols-2 gap-4 ' >
                                    <div>
                                        <img src={data.image} alt="Product Detail" className="w-full h-auto rounded-lg shadow-md" />
                                    </div>
                                    <div>

                                        <h2 className=" mb-2">{data.category}</h2>
                                        <h1 className="text-2xl font-bold mb-1">{data.title}</h1>
                                        <p className="text-xl font-semibold mb-4">${data.price}</p>
                                        <div className="flex items-center mb-4">
                                            <div className="border border-gray-300 rounded w-32 py-2 flex justify-evenly items-center">
                                                <button>-</button>
                                                <button>1</button>
                                                <button>+</button>
                                            </div>
                                            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 m-2 ">Add to Cart</button>
                                            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 m-2">Buy Now</button>
                                        </div>
                                        <hr />
                                        <p className="text-gray-700 mb-4 mt-4">{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default ProductsDetail