'use client'

// components/CreateForm.tsx
//import ConnectButton from '@/components/molecules/ConnectButton/index';
import React, { useEffect } from 'react';
import ImageInput from '@/components/molecules/ImageInput/index';
import { useForm } from 'react-hook-form';
import useHorseStore from '@/store/horse'
import { writeContract, readContract, waitForTransaction } from 'wagmi/actions'
import { factoryAbi } from '@/util/factoryAbi';
import ConnectButton from '@/components/molecules/ConnectButton/index';

const CreateForm: React.FC = () => {
const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();

  async function getTokens() {
    const data = await readContract({
      address: '0x013c72125902019e769b0Ee51bcBF509d6914704',
      abi: factoryAbi,
      functionName: 'tokens',
      args: [0],
      chainId: 88882
    })
    console.log(data)
  }

  useEffect(() => {
    //getTokens()
  }, [])

  async function write() {
    const name = 'Super Horse'
    const { hash } = await writeContract({
      address: '0x013c72125902019e769b0Ee51bcBF509d6914704',
      abi: factoryAbi,
      functionName: 'createToken',
      args: [name, 'SRH', 100]
    })
    const data = await waitForTransaction({ hash })
    console.log(data)
  }

  async function onSubmit() {
    console.log('submit')
    await write()
  };

  return (
    <div className="flex">
      {/* Left Side with Background Image */}
      <div className="w-1/2" style={{ backgroundImage: 'url(/create-horse.png)', backgroundSize: 'cover' }}>
        {/* Additional content can go here if needed */}
      </div>

      {/* Right Side with Form */}
      <div className="w-1/2 bg-orange px-28 py-14 flex flex-col justify-between">
        <div>
          <ConnectButton/>
          <h2 className="text-superblack text-5xl font-bold mb-16">Let’s create your Token</h2>


          <ImageInput />

          <div className="">
            <label className="text-lbrown block text-base">Name</label>
            <input {...register("name", { required: true })} className="bg-transparent w-full text-xl text-superblack focus:outline-none placeholder-superblack mb-8" placeholder="Lucky strike" />

            <label className="text-lbrown block text-base">Age</label>
            <input {...register("age", { required: true })} className="bg-transparent w-full text-xl text-superblack focus:outline-none placeholder-superblack mb-8" placeholder="Age" />

            <label className="text-lbrown block text-base">Height</label>
            <input {...register("height", { required: true })} className="bg-transparent w-full text-xl text-superblack focus:outline-none placeholder-superblack mb-8" placeholder="Height" />

            <label className="text-lbrown block text-base">Gender</label>
            <select {...register("gender", { required: true })} className="bg-transparent w-full text-xl text-superblack focus:outline-none placeholder-superblack mb-8">
              <option value="">Select Gender</option>
              <option value="Filly">Filly</option>
              <option value="Colt">Colt</option>
            </select>

            <label className="text-lbrown block text-base">Race type</label>
            <select {...register("raceType", { required: true })} className="bg-transparent w-full text-xl text-superblack focus:outline-none placeholder-superblack mb-8">
              <option value="">Select Race Type</option>
              <option value="Flat">Flat</option>
              <option value="Jump">Jump</option>
            </select>

            <label className="text-lbrown block text-base">Breed</label>
            <input {...register("breed", { required: true })} className="bg-transparent w-full text-xl text-superblack focus:outline-none placeholder-superblack mb-8" placeholder="Breed" />

            <label className="text-lbrown block text-base">Color</label>
            <input {...register("color", { required: true })} className="bg-transparent w-full text-xl text-superblack focus:outline-none placeholder-superblack mb-8" placeholder="Color" />

            <label className="text-lbrown block text-base">Description</label>
            <textarea {...register("description")} className="bg-transparent w-full text-xl text-superblack focus:outline-none placeholder-superblack mb-8" placeholder="Description" />

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-lbrown block text-base">Total value</label>
                <input {...register("totalValue", { required: true })} className="bg-transparent w-full text-xl text-superblack focus:outline-none placeholder-superblack mb-8" placeholder="Total value" />
              </div>
              <div className="flex-1">
                <label className="text-lbrown block text-base">Quantity</label>
                <input {...register("quantity", { required: true })} className="bg-transparent w-full text-xl text-superblack focus:outline-none placeholder-superblack mb-8" placeholder="Quantity" />
              </div>
              <div className="flex-1">
                <label className="text-lbrown block text-base">Price per token</label>
                <input {...register("pricePerToken", { required: true })} className="bg-transparent w-full text-xl text-superblack focus:outline-none placeholder-superblack mb-8" placeholder="Price per token" />
              </div>
            </div>
          </div>

          <button className="bg-superblack text-superwhite w-full py-4 rounded-lg text-xl font-bold shadow-lg focus:outline-none hover:bg-brown transition duration-300 ease-in-out mt-8" onClick={onSubmit}>
            Submit
          </button>
      </div>
    </div>
    </div>
  );
};

export default CreateForm;
