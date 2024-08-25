// import { useForm } from 'react-hook-form';
// import "./form.css";

// const Form = ({ onCheck }) => {
//     const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onSubmit" });

//     const onSubmit = (data) => {
//         onCheck(data.city);
//     };

//     return (
//         <form className="form" onSubmit={handleSubmit(onSubmit)}>
//             <div className="formGroup">
//                 <label className="formLabel">City name</label>
//                 <div className="formInputContainer">
//                     <input
//                         className="formInput"
//                         {...register('city', { required: "City name is required" })}
//                         type="text"
//                     />
                   
//                     <button type="submit" className="formSubmitButton">Check</button>
//                 </div>
//                 {errors.city && <span className='formErrorMessage'>{errors.city.message}</span>}
                
//             </div>
//         </form>
//     );
// };

// export default Form;

import { useForm } from 'react-hook-form';
import "./form.css";

const Form = ({ onCheck }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onSubmit" });

    const onSubmit = (data) => {
        onCheck(data.city);
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)} role="search" aria-label="City weather search">
            <div className="formGroup">
                <label htmlFor="cityInput" className="formLabel">City name</label>
                <div className="formInputContainer">
                    <input
                        id="cityInput"
                        className="formInput"
                        {...register('city', { required: "City name is required" })}
                        type="text"
                        aria-required="true"
                        aria-invalid={errors.city ? "true" : "false"}
                    />
                   
                    <button type="submit" className="formSubmitButton" aria-label="Search for city weather">Check</button>
                </div>
                {errors.city && <span className='formErrorMessage' role="alert">{errors.city.message}</span>}
                
            </div>
        </form>
    );
};

export default Form;
