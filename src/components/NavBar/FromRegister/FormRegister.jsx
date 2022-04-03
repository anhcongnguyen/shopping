/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useForm, Controller } from "react-hook-form";

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8 border rounded-md shadow-xl">
        <div class="mt-3">
          <img
            class="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Or
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              start your 14-day free trial{" "}
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} class="mt-8 space-y-6 m-3">
          <div class="round">
            <Controller
              name="firstName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  class="appearance-none rounded-t-lg relative block w-full my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="First Name"
                  {...field}
                />
              )}
            />
            {errors.firstName?.type === "required" && (
              <span>First Name is required</span>
            )}
            <Controller
              name="lastName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  class="appearance-none rounded-t-lg relative block w-full my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Last Name"
                  {...field}
                />
              )}
            />
            {errors.lastName?.type === "required" && (
              <span>Last Name is required</span>
            )}
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  class="appearance-none rounded-t-lg relative block w-full my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                  {...field}
                />
              )}
            />
            {errors.email?.type === "required" && (
              <span>Email is required</span>
            )}
            <Controller
              name="phone"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  class="appearance-none rounded-t-lg relative block w-full my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Phone"
                  {...field}
                />
              )}
            />
            {errors.phone?.type === "required" && (
              <span>Phone is required</span>
            )}
            <Controller
              name="username"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  class="appearance-none rounded-t-lg relative block w-full my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  {...field}
                />
              )}
            />
            {errors.username?.type === "required" && (
              <span>Username is required</span>
            )}
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  class="appearance-none rounded-t-lg relative block w-full my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  {...field}
                />
              )}
            />
            {errors.password?.type === "required" && (
              <span>Password is required</span>
            )}
          </div>
          <div>
            <input
              type="submit"
              class="appearance-none rounded-md relative block w-full my-2 px-3 py-2 border border-gray-300 bg-blue-400 text-white hover:bg-blue-600"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegister;
