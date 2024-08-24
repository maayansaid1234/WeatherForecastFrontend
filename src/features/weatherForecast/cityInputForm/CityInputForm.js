// import { useForm } from 'react-hook-form';
// import "./form.css";

// const Form = ({ onCheck }) => {
//     const { register, handleSubmit,formState: { errors } } = useForm({ mode: "onSubmit" });

//     const onSubmit = (data) => {
       
//         onCheck(data.city);
//     };

//     return (
//         <form className="form" onSubmit={handleSubmit(onSubmit)}>
//             <div className="formGroup">
//                 <label className="formLabel">City name</label>
//                 <div className="formInputContainer">
//                     <input className="formInput" {...register('city', { required: true,message:"city name is required" })} type="text"  />
//                     {errors.city&&<span className='formErrorMessage'>{errors.city.message}</span>}
//                     <button type="submit" className="formSubmitButton">Check</button>
//                 </div>
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
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="formGroup">
                <label className="formLabel">City name</label>
                <div className="formInputContainer">
                    <input
                        className="formInput"
                        {...register('city', { required: "City name is required" })}
                        type="text"
                    />
                   
                    <button type="submit" className="formSubmitButton">Check</button>
                </div>
                {errors.city && <span className='formErrorMessage'>{errors.city.message}</span>}
                
            </div>
        </form>
    );
};

export default Form;
