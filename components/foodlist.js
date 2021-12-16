/* This example requires Tailwind CSS v2.0+ */

const people = [
    {
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    // More people...
]

export default function Foodlist({ data, getUserDataById, deleteUserById }) {
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
                                                className="px-6 py-3 text-center text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                ภาพ
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                จัดการ
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {data.map((menu) => (
                                            <tr key={menu._id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{menu.namemenu}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{menu.staple}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{menu.step}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{menu.img}</td>
                                                {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    <Image
                                                        src={`/uploads/` + menu.img}
                                                        alt=""
                                                        width={50} height={50}
                                                    />
                                                </td>  */}
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a onClick={() => getUserDataById(menu._id)} href="#" className="text-indigo-600 hover:text-indigo-900">
                                                        Edit
                                                    </a>
                                                    <a onClick={() => deleteUserById(menu._id)} href="#" className="ml-2 text-red-600 hover:text-red-900">
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
    )
}
