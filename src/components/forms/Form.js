import Select from "react-select"
import { useForm, Controller } from "react-hook-form"
import { useFormspark } from "@formspark/use-formspark"
import "./form.css"

// TODO:
// DO RECAPTCHAS (NEED TO BE DEPLOYED TO USE CAPTCHAS CANT BE IN LOCALHOST)
// ASK BRIN WHICH ONES NEED TO BE REQUIRED

const FORMSPARK_FORM_ID = "EapXXsTZ"

const options = [
    { value: "Creatives", label: "Creatives" },
    { value: "Community Development", label: "Community Development" },
    { value: "External Affairs", label: "External Affairs" },
    { value: "Finance", label: "Finance" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Photography", label: "Photography" },
    {
        value: "Publicity and Communications",
        label: "Publicity and Communications",
    },
    { value: "Secretariat", label: "Secretariat" },
    { value: "Videography", label: "Videography" },
    { value: "Web Technologies", label: "Web Technologies" },
    { value: "Writing", label: "Writing" },
]

const Form = () => {
    const [submit, submitting] = useFormspark({
        formId: FORMSPARK_FORM_ID,
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm()

    // when form is submitted it comes out as an array of objects, i only want the value
    const getValue = (data) => {
        let result = []
        for (let i = 0; i < data.length; i++) {
            result.push(data[i].value)
        }
        return result
    }

    const onSubmit = async (data, event) => {
        event.preventDefault()
        const positionSelected = getValue(data.position)
        // delete data.position because data.position is an array of objects i only want the value
        delete data.position
        const payload = { ...data, positionSelected }
        await submit(payload)
        alert("Form submitted")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <Controller
                name='position'
                control={control}
                render={({ field }) => {
                    return (
                        <div>
                            <label for='positionFilter'>Select Positions</label>
                            <Select
                                name='positionFilter'
                                placeholder='Position'
                                options={options}
                                isMulti
                                {...field}
                            />
                        </div>
                    )
                }}
            />
            <p className='error-message'>{errors.name?.message}</p>
            <label for='name'>Name</label>
            <input
                {...register("name", { required: "Name is required" })}
                name='name'
                placeholder='Given Name M.I. Last Name'
                className='input-class'
            />

            <p className='error-message'>{errors.year?.message}</p>
            <label for='year'>Year</label>
            <input
                {...register("year", { required: "Year is required" })}
                name='year'
                placeholder='Year'
                className='input-class'
            />

            <p className='error-message'>{errors.studentNumber?.message}</p>
            <label for='studentNumber'>Student Number</label>
            <input
                {...register("studentNumber", {
                    required: "Student Number is required",
                })}
                name='studentNumber'
                placeholder='Student Number'
                className='input-class'
            />

            <p className='error-message'>{errors.program?.message}</p>
            <label for='program'>Program</label>
            <input
                {...register("program", { required: "Program is required" })}
                name='program'
                placeholder='Program'
                className='input-class'
            />

            <p className='error-message'>{errors.college?.message}</p>
            <label for='college'>College</label>
            <input
                {...register("college", { required: "College is required" })}
                name='college'
                placeholder='College'
                className='input-class'
            />

            <p className='error-message'>{errors.email?.message}</p>
            <label for='email'>Email</label>
            <input
                {...register("email", { required: "Email is required" })}
                name='email'
                placeholder='Email'
                className='input-class'
            />

            <p className='error-message'>{errors.phone?.message}</p>
            <label for='phone'>Phone Number</label>
            <input
                {...register("phone", { required: "Phone Number is required" })}
                name='phone'
                placeholder='Phone'
                className='input-class'
            />

            <p className='error-message'>{errors.facebook?.message}</p>
            <label for='facebook'>Facebook Link</label>
            <input
                {...register("facebook", { required: "Facebook Link is required" })}
                name='facebook'
                placeholder='Facebook'
                className='input-class'
            />

            <p className='error-message'>{errors.twitter?.message}</p>
            <label for='twitter'>Twitter Link</label>
            <input
                {...register("twitter", {
                    required: "Twitter Link is required",
                })}
                name='twitter'
                placeholder='Twitter'
                className='input-class'
            />
            <button type='submit' disabled={submitting} className='submit-btn'>
                SUBMIT
            </button>
        </form>
    )
}

export default Form
