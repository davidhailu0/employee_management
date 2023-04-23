import { useReducer } from "react"
import { Link, useLoaderData } from "react-router-dom"
import { allEmployees } from "../services/employee.services"
import Table from "../components/table"
import Popup from "../components/popup"

function reducer(state,action){
  return {...state,...action.payload}
}

export default function ListOfEmployees(){
    const employeeListData = useLoaderData() 
    const [state,dispatch] = useReducer(reducer,{popupState:false,id:null})
    return (
        <>
        <div className="mt-10 flex items-center justify-end gap-x-6 px-10">
                  <Link
                    to={"/addEmployee"}
                    className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    Add Employee
                  </Link>
        </div>
       <Table tableData={employeeListData} dispatch={dispatch}/>
       <Popup state={state} dispatch={dispatch}/>
    </>
    )
}

export async function loader(){
  const employeeData = await allEmployees() 
  return employeeData.docs
}