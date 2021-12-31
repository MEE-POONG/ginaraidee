import Image from "next/image";


export default function Foodlist({ data, getFoodsDataById, deleteFoodsById }) {
  console.log(data);
  
  return (
    
    <div className="container mx-auto max-w-lg">
      <div className="px-4 flex-auto">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        ชื่อเมนู
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        วัตถุดิบ
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        วิธีทำ
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        ภาพ
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        จัดการ
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((menu) => (
                      <tr key={menu._id}>
                        
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {menu.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {menu.staple}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {menu.step}
                        </td>
                        {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {menu.img}
                        </td> */}
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    <Image
                                                        src={`http://upload-image.gin-a-rai-dee.daddybody.company/` + menu.img}
                                                        alt=""
                                                        width={200} height={200}
                                                    />
                                                </td> 
                                               
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            onClick={() => getFoodsDataById(menu._id)}
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                          </a>
                          <a
                            onClick={() => deleteFoodsById(menu._id)
                            }
                            href="#"
                            className="ml-2 text-red-600 hover:text-red-900"
                            
                          >
                            Delete
                            
                          </a>
                        </td>
                      </tr>
                      
                    ))}
                    
                  </tbody>
                  
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
