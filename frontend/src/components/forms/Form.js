import { useState } from "react"
import Select from "react-select"
import { useForm, Controller } from "react-hook-form"
import { useFormspark } from "@formspark/use-formspark"
import "./form.css"

// TODO:
// DO RECAPTCHAS (NEED TO BE DEPLOYED TO USE CAPTCHAS CANT BE IN LOCALHOST)
// FILL IN PROPER POSITION NAMES

const FORMSPARK_FORM_ID = "EapXXsTZ"

const options = [
    { value: "volkswagen", label: "Volkswagen" },
    { value: "seat", label: "Seat" },
    { value: "burger", label: "burger" },
    { value: "steak", label: "steak" },
    { value: "noodles", label: "noodles" },
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
        const positionValueOnly = getValue(data.position)
        // delete data.position because data.position is an array of objects i only want the value
        delete data.position 
        const payload = ({...data, positionValueOnly})
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
                            <Select
                                name='filters'
                                placeholder='Filters'
                                options={options}
                                isMulti
                                {...field}
                            />
                        </div>
                
                    )
                }}
            />
            <input
                {...register("name", { required: "This is required" })}
                placeholder='name'
            />
            <p>{errors.name?.message}</p>
            <input
                {...register("year", { required: "This is required" })}
                placeholder='year'
            />
            <p>{errors.year?.message}</p>
            <input
                {...register("studentNumber", { required: "This is required" })}
                placeholder='studentNumber'
            />
            <p>{errors.studentNumber?.message}</p>
            <input
                {...register("program", { required: "This is required" })}
                placeholder='program'
            />
            <p>{errors.program?.message}</p>
            <input
                {...register("college", { required: "This is required" })}
                placeholder='college'
            />
            <p>{errors.college?.message}</p>
            <input
                {...register("email", { required: "This is required" })}
                placeholder='email'
            />
            <p>{errors.email?.message}</p>
            <input
                {...register("phone", { required: "This is required" })}
                placeholder='phone'
            />
            <p>{errors.phone?.message}</p>
            <input
                {...register("facebook", { required: "This is required" })}
                placeholder='facebook'
            />
            <p>{errors.facebook?.message}</p>
            <input
                {...register("twitter", { required: "This is required" })}
                placeholder='twitter'
            />
            <p>{errors.twitter?.message}</p>
            <button type="submit" disabled={submitting}>SUBMIT</button>
        </form>
    )
}

export default Form
