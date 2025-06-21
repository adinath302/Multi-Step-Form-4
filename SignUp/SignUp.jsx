import React, { useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2';
import Step3 from './Step3';

const SignUp = () => {
    const [step, setstep] = useState(1); //to change the step of the form
    console.log(step);

    // step 1 Data
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    // step 2 Data
    const [password, setpassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    // step 1 Submit
    const Step1submit = (event) => {
        event.preventDefault();
        console.log("name :", name, "email :", email);
        setstep(2);
    }
    // step 2 Submit`
    const Step2Submit = (event) => {
        event.preventDefault();
        console.log("password :", password, "confirmPassword :", confirmPassword);
        setstep(3);
    }

    const progress = step * 33 // progress bar used to show the progress of the form

    return (
        <div className='m-10 flex justify-center items-center border-2 p-10 gap-4'>

            {step === 1 && <Step1 progress={progress} setstep={setstep} name={name} email={email} setemail={setemail} setname={setname} hanldeonSubmit={Step1submit} />}

            {step === 2 && <Step2 progress={progress} setstep={setstep} password={password} setpassword={setpassword} confirmPassword={confirmPassword} setconfirmPassword={setconfirmPassword} Step2Submit={Step2Submit} />}

            {step === 3 && <Step3 setstep={setstep} progress={progress} name={name} email={email} password={password} setname={setname} setemail={setemail} setpassword={setpassword} setconfirmPassword={setconfirmPassword} />}
        </div>
    )
}

export default SignUp