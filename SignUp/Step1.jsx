import React, { useState } from 'react'

const Step1 = ({ name, setname, email, setemail, hanldeonSubmit, progress }) => {

    // Check if both inputs have values
    const isFormValid = name.trim() !== '' && email.trim() !== '';

    return (
        <div>
            {/* progress bar  */}
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
                <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${progress}%` }} // Update the width based on progress
                ></div>
            </div>

            <h1>Step 1 </h1>
            <form
                onSubmit={hanldeonSubmit}
                className='flex flex-col gap-5'>
                <label >
                    Enter name :
                    <input
                        className='p-1'
                        type="text"
                        value={name}
                        placeholder=' name'
                        onChange={(e) => setname(e.target.value)} required />
                </label>
                <label
                    htmlFor="">
                    Enter email :
                    <input
                        className='p-1'
                        type="text"
                        value={email}
                        placeholder=' enter email'
                        onChange={(e) => setemail(e.target.value)} required />
                </label>
                <button
                    disabled={!isFormValid}
                    className={`px-4 py-2 rounded text-white   ${isFormValid ? 'bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
                        }`} type="submit">Next</button>
            </form>
        </div >
    )
}

export default Step1