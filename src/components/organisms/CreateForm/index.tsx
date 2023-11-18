// components/CreateForm.tsx
import ConnectButton from '@/components/molecules/ConnectButton/index';
import React from 'react';
import Link from 'next/link'

const CreateForm: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto mt-4">
      <div className="flex justify-between w-full mb-2">
        <h1 className="text-3xl font-bold">Create</h1>
        <ConnectButton/>
      </div>
    <div className="bg-white shadow rounded-lg p-8">
      {/* Image Drop */}
      <div className="flex justify-center items-center w-full h-48 bg-gray-100 text-gray-500 border-2 border-gray-300 border-dashed rounded-lg mb-4">
        Drop an image
      </div>
      
      {/* Name Input */}
      <input
        className="w-full bg-gray-50 p-2 mb-4 border border-gray-200 rounded"
        type="text"
        placeholder="Name"
        name="name"
      />

      {/* Age Input */}
      <input
        className="w-full bg-gray-50 p-2 mb-4 border border-gray-200 rounded"
        type="text"
        placeholder="Age"
        name="age"
      />

      {/* Height Input */}
      <input
        className="w-full bg-gray-50 p-2 mb-4 border border-gray-200 rounded"
        type="text"
        placeholder="Height"
        name="height"
      />

      {/* Gender Radio Buttons */}
      <div className="flex items-center mb-4">
        <span className="text-gray-700 mr-4">Gender (Checkbox)</span>
        <label className="inline-flex items-center mr-6">
          <input type="radio" className="form-radio" name="gender" value="male" />
          <span className="ml-2">Male</span>
        </label>
        <label className="inline-flex items-center">
          <input type="radio" className="form-radio" name="gender" value="female" />
          <span className="ml-2">Female</span>
        </label>
      </div>

      {/* Breed Input */}
      <input
        className="w-full bg-gray-50 p-2 mb-4 border border-gray-200 rounded"
        type="text"
        placeholder="Breed"
        name="breed"
      />

      {/* Color Input */}
      <input
        className="w-full bg-gray-50 p-2 mb-4 border border-gray-200 rounded"
        type="text"
        placeholder="Color"
        name="color"
      />

      {/* Short Description Textarea */}
      <textarea
        className="w-full bg-gray-50 p-2 mb-4 border border-gray-200 rounded"
        placeholder="Short Description"
        name="description"
        rows={4}
      />

      {/* Submit Button */}
    <Link href="my-listings">
      <button
        type="submit"
        className="w-full bg-orange-400 text-white p-3 rounded hover:bg-orange-500"
      >
        Submit
      </button>
    </Link>
    </div>
    </div>
  );
};

export default CreateForm;
