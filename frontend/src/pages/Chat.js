import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Chat = () => {
  const { register, handleSubmit, resetField } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    resetField("message");
  };
  return (
    <>
      <div className="mt-5 md:col-span-2 md:mt-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-4 bg-white px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Welcome to PlantPal Chatbot!
                <p className="mt-1 text-sm text-gray-600">How can I help?</p>
              </h3>

              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    {...register("message", { required: true })}
                    rows={3}
                    className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-5 md:col-span-2 md:mt-0">
        <div className="shadow sm:overflow-hidden sm:rounded-md">
          <div className="space-y-4 bg-white px-4 py-5 sm:p-6">
            <div>
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
              >
                Response
              </label>
              <div className="mt-1">
                <textarea className="mt-1 flex w-full justify-center rounded-md border-2 border-dashed border-gray-300 mx-auto">
                  REPLACE THIS WITH CHATPOT STUFF
                </textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
