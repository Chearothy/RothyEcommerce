
import { Link } from 'react-router-dom'
function Card(props) {
  const {data} = props;
  return (
  <Link to={`/products/${data.id}`} className="mt-10 bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden w-full ">
      <div className="w-full overflow-hidden">
        <img src={data.image} alt={data.title} className=" bg-center w-full  rounded-lg bg-gray-200 object-cover hover:opacity-75 xl:aspect-7/8 " />
      </div>
       <div className="p-4">
        <div>
          <h3 className="mt-1 text-sm text-gray-700tex uppercase line-clamp-1">{data.title}</h3></div>
        <div>
          <p className="mt-1 text-lg font-medium text-red-500">${data.price}</p>
        </div>
        </div>
  </Link >
  )
}

export default Card