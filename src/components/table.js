import { Link } from "react-router-dom"
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

export default function Table({tableData,dispatch}){
    return <div className="container flex justify-center mx-auto mt-3">
  <div className="flex flex-col w-11/12">
    <div className="w-full">
      <div className="border-b border-gray-200 shadow bg-gray-50">
        <table className="divide-y divide-green-400 ">
          <thead className="bg-gray-50 ">
          <tr>
            <th className="px-16 py-2 text-xs text-gray-500">
              ID
            </th>
            <th className="px-16 py-2 text-xs text-gray-500 ">
            First Name
            </th>
            <th className="px-16 py-2 text-xs text-gray-500 ">
            Last Name
            </th>
            <th className="px-16 py-2 text-xs text-gray-500">
            Email
            </th>
            <th className="px-16 py-2 text-xs text-gray-500">
            Address
            </th>
            <th className="px-16 py-2 text-xs text-gray-500">
            Edit
            </th>
            <th className="px-16 py-2 text-xs text-gray-500 ">
            Delete
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300">
        
    {tableData.map(doc=>{
        const data = doc.data()
        return (<tr key={doc.id} className="whitespace-nowrap">
            <td className="px-6 py-4 text-sm text-gray-500 ">
        {doc.id}
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-900 flex justify-center">
        {data['first_name']}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-900 flex justify-center">
        {data['last_name']}
        </div>
      </td>
      <td className="px-6 py-4">
          <div className="text-sm text-gray-500 flex justify-center">
          {data['email']}
          </div>
      </td>
      <td className="px-6 py-4">
          <div className="text-sm text-gray-500 flex justify-center">
          {doc._document.data.value.mapValue.fields.address.stringValue}
          </div>
      </td>                                   
      <td className="px-6 py-4">
      <Link to={"/edit/"+doc.id} className={"flex justify-center"}>
        <PencilSquareIcon className="h-6 w-6 text-blue-400"/>
      </Link>
      </td>
      <td className="px-6 py-4 flex justify-center">
            <button type="button" onClick={()=>dispatch({payload:{popupState:true,id:doc.id}})}>
                <TrashIcon className="w-6 h-6 text-red-400"/>
            </button>
      </td>
      </tr>
            )
    })}
      </tbody>
      </table>
      </div>
      </div>
      </div>
      </div>
}