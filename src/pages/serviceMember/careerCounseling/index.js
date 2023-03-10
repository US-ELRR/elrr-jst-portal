import DefaultLayout from "@/components/layouts/DefaultLayout";
import CounselingTable from '@/components/tables/CounselingDashboardTable';
import { useState, useEffect } from 'react';
import axios from 'axios';



export default function CareerCounselingList() {

    const [careerList, setCareerList] = useState([])

    useEffect(() => {
        axios
          .get(`/api/careerCounseling`)
          .then((res) => {
            setCareerList(res.data.counseling);
          })
          .catch((err) => {
            console.log(err);
          });
    }, []);

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mt-4 mb-8 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        Career Counseling Dashboard
                    </div> 
                </h1>
                <p className="border-b-none">
                    Welcome to Career Counseling! Below is a list of majors at schools you can add and remove from. You can contact an ESO for further questions for each option listed below by clicking "Go to Career Counseling".
                
                </p>
                <CounselingTable careerList={careerList}/>
            </div>
        </DefaultLayout>
    );
}