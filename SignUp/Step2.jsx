import React, { useState } from 'react'

const Step2 = ({ progress, password, setpassword, confirmPassword, setconfirmPassword, Step2Submit , setstep }) => {

    const isFormValid = password.trim() !== '' && confirmPassword.trim() !== '';

    return (
        <div>
            {/* progress bar */}
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
                <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            <h1>Step 2</h1>
            <form action=""
                className='flex flex-col gap-5'
                onSubmit={Step2Submit} >
                <label htmlFor="">
                    Enter Password :
                    <input
                        className='p-1 '
                        type="text"
                        placeholder=' password'
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required />
                </label>
                <label htmlFor="">
                    Confirm Password :
                    <input
                        className='p-1 '
                        type="text"
                        placeholder=' confirm password'
                        value={confirmPassword}
                        onChange={(e) => setconfirmPassword(e.target.value)}
                        required
                    />
                </label>
                <div className='flex justify-between'>
                    <button
                        disabled={!isFormValid} // Disable the button if the form is not valid
                        className={`px-4 py-2 rounded text-white   ${isFormValid ? 'bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
                            }`} type="submit">Next</button>
                    <button className='px-4 py-2 rounded text-white bg-blue-600 ' onClick={() => setstep(1)}>Previous</button>
                </div>
            </form>
        </div>
    )
}
export default Step2