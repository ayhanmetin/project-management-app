import React from 'react'

export default function Input({ textarea, label, ...props }) {
  const styleInput =

    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-800 focus:outline-none focus:border-stone-600'


  return (
    <p className="flex flex-col gap-1 my-4">

      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea className={styleInput} {...props} />
      ) : (
        <input className={styleInput} {...props} />
      )}

    </p>
  )
}
