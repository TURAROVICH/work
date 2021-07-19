import React from 'react'
import DoctorCard from './DoctorCard'
export default () =>{
    return(
        <div className="flex flex-col gap-4 w-full justify-center items-center">
        <div className="doctors-cards w-full my-10">
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            </div>
                <div style={{color:'#479D83'}} className="show-more text-xl">show more</div>
            </div>
    )
}