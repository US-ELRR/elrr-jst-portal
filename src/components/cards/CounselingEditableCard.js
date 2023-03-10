import { twMerge } from "tailwind-merge";
import Button from "../buttons/Button";
import { useState } from 'react';
import Dropdown from '@/components/dropdowns/Dropdown';
import GeneralPurposeOverlay from "../overlays/GeneralPurposeOverlay";



export default function CounselingEditableCard({ career , routePath, className}){
    const descriptionClass = twMerge(`
        mt-4 font-sans line-clamp-6 
        ${className ?? ""}
    `);

    const currDate = new Date();
    const currTime = new Date().toLocaleTimeString();
    const timestamp = `${currDate}  ${currTime}`;
    const one_day = 1000*60*60*24;
    console.log("currDate", currDate)
    const [edit, setEdit] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownValue, setDropdownValue] = useState("");
    const [secondDropdownValue, setSecondDropdownValue] = useState("");





   // let passwordLastChanged = Math.ceil((currDate.getTime()-currDate.getTime())/(one_day))
   // console.log('date Converter result', passwordLastChanged)
    //if (passwordLastChanged < 0 ) {passwordLastChanged = 0}

    const handleEdit = () => {
        console.log("Click!");
        setEdit(!edit);

    }

    const handleSave = () => {
        console.log("Click Save!");
        career.assigned_eso = dropdownValue;
        career.projected_graduation = secondDropdownValue;
        setEdit(!edit);

    }
    
    const handleReset = () => {
        console.log("Click Reset!");
        setIsOpen(!isOpen);
    }

    return(
        <div className='bg-white w-full border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
            <h1 className='flex flex-row justify-end text-xl font-semibold border-b h-10 mb-6'>
                {!edit && <button onClick={handleEdit} className="flex justify-end items-center text-sm gap-2 dod-500 rounded-md text-white bg-blue-500 px-6 p-1.5 mb-2 transform transition-all duration-150 ease-in-out border-dod-500 border-2  ring-dod-500 outline-none">Edit</button>}

            </h1>
            {edit ? 
                (<div className="flex flex-row justify-between">
                    <p className="flex flex-row mt-4 font-sans line-clamp-6">
                        <b className="mr-2">Assigned ESO:</b>
                        {!isOpen ? 
                            (<Dropdown options={["John Doe", "Mary Jane Doe"]} initialValue={career?.assigned_eso} onChange={(event)=>{event.preventDefault(); setDropdownValue(event.target.value);}}/>
                            ):(<>{career?.assigned_eso}</>)
                        }
                    </p>
                    <p className="mt-6">
                        <div className="flex flex-row justify-between">
                            <b className="ml-32">Projected Graduation Date:</b>
                            {!isOpen ? 
                                (<Dropdown options={["Fall 2023", "Spring 2024", "Summer 2024", "Fall 2024"]} initialValue={career?.projected_graduation} onChange={(event)=>{event.preventDefault(); setSecondDropdownValue(event.target.value);}}/>
                                ):(<>{career?.projected_graduation}</>)
                            }
                        </div>
                    </p>
                    <div className="flex justify-end w-1/2 mt-4">
                        <button onClick={handleSave} className="flex justify-end items-center text-sm gap-2 dod-500 rounded-md text-white bg-blue-500 px-6 p-1.5 mb-2 transform transition-all duration-150 ease-in-out border-dod-500 border-2  ring-dod-500 outline-none">Save Changes</button>
                    </div>
                </div>) :
                (<div className=" flex flex-row justify-between">
                    <p className="mr-8">
                        <b>Assigned ESO:</b> {career?.assigned_eso}
                    </p>
                    
                    <p className="">
                        <b>Projected Graduation Date:</b> {career.projected_graduation}
                    </p>
                </div>)
            }
        </div>
        
    )
}