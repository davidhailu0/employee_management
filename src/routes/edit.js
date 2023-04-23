import { useState } from 'react'
import {Link,useLoaderData,useNavigate} from "react-router-dom"
import {getEmployee,updateEmployee} from "../services/employee.services"

export default function EditEmployee(){
    const {id,data} = useLoaderData()
    const [firstName,setFirstName] = useState(data['first_name'])
    const [lastName,setLastName] = useState(data['last_name'])
    const [email,setEmail] = useState(data['email'])
    const [address,setAddress] = useState(data['address'])
    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
      e.preventDefault()
      await updateEmployee(id,{first_name:firstName,
      last_name:lastName,
      email:email,
      address:address})
      navigate('/listOfEmployees')
    }

    const handleFirstNameChange = (e)=>{
        setFirstName(e.target.value)
    }

    const handleLastNameChage = (e)=>{
        setLastName(e.target.value)
    }

    const handleEmailChange = (e)=>{
        setEmail(e.target.value)
    }

    const handleAddressChange = (e)=>{
        setAddress(e.target.value)
    }

    return <form onSubmit={handleSubmit}>
    <div className="space-y-12 px-32">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900 mt-5">Personal Information</h2>
        <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                value={firstName}
                onChange={handleFirstNameChange}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                value={lastName}
                onChange={handleLastNameChage}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
              Address
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="street-address"
                id="street-address"
                value={address}
                onChange={handleAddressChange}
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6 px-32">
      <Link to={"/listOfEmployees"} className="text-sm font-semibold leading-6 text-gray-900">
        Cancel
      </Link>
      <button
        type="submit"
        className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Update
      </button>
    </div>
  </form>
}

export async function loader({params}){
    const doc = await getEmployee(params.id)
    return {id:doc.id,data:doc.data()}
}