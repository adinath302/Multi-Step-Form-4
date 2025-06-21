import React from 'react'

const Step3 = ({ progress, name, email, password, setstep, setname, setemail, setpassword, setconfirmPassword }) => {

    const handlesubmit = () => {
        alert("Form Submitted");
        setname("")
        setemail("")
        setpassword("")
        setconfirmPassword("")
        setstep(1);
    }

    return (
        <div className='flex flex-col gap-4'>
            {/* progress bar */}
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
                <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <h1>Step 3</h1>
            <div>
                <div className='flex justify-center text-xl'>
                    <div className='font-bold'>Data</div>
                </div>
                <div className='font-medium'>
                    <div>Name - {name}</div>
                    <div>email - {email}</div>
                    <div>password - {password}</div>
                </div>
            </div>
            <div className='flex justify-between'>
                <button type='submit' className='border-1 p-2 rounded-xl bg-blue-800 text-white font-medium' onClick={handlesubmit} >Submit</button>
                <button className='px-4 py-2 rounded text-white bg-blue-600 ' onClick={() => setstep(2)}>Previous</button>
            </div >
        </div>
    )
}

export default Step3