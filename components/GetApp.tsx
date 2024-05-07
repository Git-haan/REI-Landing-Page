import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section id='faqs-resources'
    className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="flex w-full flex-1 flex-col items-start justify-center gap-12 bg-white shadow-2xl rounded-xl text-black p-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Have Questions?</h2>
          <p className="regular-16 ">Contact us to join the Adventure or for further Inquiries: </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="travel@rei.com"
              variant="btn_green"
            />
            <Button 
              type="button"
              title="1 (800) 622-2236"
              icon="/play.svg"
              variant="btn_white_text"
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetApp