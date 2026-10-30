import { useForm } from "react-hook-form";
import Error from "./Error";
import type { DraftVehicle } from "../types";

export default function VehicleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DraftVehicle>({ mode: "onChange" });

  const registerVehicle = (data: DraftVehicle) => {
    console.log(data);
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Vehicle Registration</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Add vehicles and {""}
        <span className="text-blue-600 font-bold">manage them</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerVehicle)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Vehicle
          </label>
          <input
            id="vehicle"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Vehicle Model"
            {...register("vehicle", {
              required: "The vehicle model is mandatory",
              maxLength: { value: 50, message: "Maximum 50 characters" },
            })}
          />
          {errors.name && <Error>{errors.name.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="owner" className="text-sm uppercase font-bold">
            Owner
          </label>
          <input
            id="name"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Owner's name"
            {...register("name", {
              required: "The owner's name is mandatory",
              maxLength: { value: 100, message: "Maximum 100 characters" },
            })}
          />
          {errors.name && <Error>{errors.name.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder="Contact Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid Email",
              },
            })}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Entry Date
          </label>
          <input
            id="date"
            className="w-full p-3  border border-gray-100"
            type="date"
            {...register("date", {
              required: "The start date is mandatory",
            })}
          />
          {errors.date && <Error>{errors.date.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Issue Description
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100"
            placeholder="Describe the vehicle's issue"
            {...register("symptoms", {
              required: "The symptoms are mandatory",
            })}
          />
          {errors.symptoms && <Error>{errors.symptoms.message}</Error>}
        </div>

        <input
          type="submit"
          className="bg-blue-600 w-full p-3 text-white uppercase font-bold hover:bg-blue-700 cursor-pointer transition-colors"
          value="Register Vehicle"
        />
      </form>
    </div>
  );
}
