export function ContactStart() {
  return (
    <div className="flex flex-wrap gap-x-28 gap-y-20">
      <div className="flex-1">
        <h3 className="text-3xl md:text-4xl text-navy-blue josefin-bold">
          Information About us
        </h3>
        <p className="text-base text-sub-text lato-regular mt-3">
          We are a team of dedicated professionals who are committed to
          providing top-quality services to our clients. With years of
          experience and expertise in our respective fields, we are confident in
          our ability to deliver exceptional results.
        </p>
        <div className="flex items-center space-x-3 mt-10">
          <div className="w-6 h-6 rounded-full bg-[#5625DF]"></div>
          <div className="w-6 h-6 rounded-full bg-[#FF27B7]"></div>
          <div className="w-6 h-6 rounded-full bg-[#37DAF3]"></div>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-3xl md:text-4xl text-navy-blue josefin-bold">
          Contact Way
        </h3>
        <ul className="grid grid-cols-2 max-w-[500px] gap-x-9 gap-y-12 mt-6">
          <li className="text-base text-sub-text lato-regular flex flex-wrap items-center gap-x-4 gap-y-4">
            <div className="w-11 h-11 rounded-full bg-[#5726DF] shrink-0"></div>
            Tel: 877-67-88-99 <br />
            E-Mail: shop@store.com
          </li>
          <li className="text-base text-sub-text lato-regular flex flex-wrap items-center gap-x-4 gap-y-4">
            <div className="w-11 h-11 rounded-full bg-pink-primary shrink-0"></div>
            Tel: 877-67-88-99 <br />
            E-Mail: shop@store.com
          </li>
          <li className="text-base text-sub-text lato-regular flex flex-wrap items-center gap-x-4 gap-y-4">
            <div className="w-11 h-11 rounded-full bg-[#FFB265] shrink-0"></div>
            Tel: 877-67-88-99 <br />
            E-Mail: shop@store.com
          </li>
          <li className="text-base text-sub-text lato-regular flex flex-wrap items-center gap-x-4 gap-y-4">
            <div className="w-11 h-11 rounded-full bg-[#1BE982] shrink-0"></div>
            Tel: 877-67-88-99 <br />
            E-Mail: shop@store.com
          </li>
        </ul>
      </div>
    </div>
  );
}
