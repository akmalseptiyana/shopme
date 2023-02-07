export function ContactStart() {
  return (
    <div className="flex flex-wrap gap-x-28 gap-y-20">
      <div className="flex-1">
        <h3 className="josefin-bold text-3xl text-navy-blue md:text-4xl">
          Information About us
        </h3>
        <p className="lato-regular mt-3 text-base text-sub-text">
          We are a team of dedicated professionals who are committed to
          providing top-quality services to our clients. With years of
          experience and expertise in our respective fields, we are confident in
          our ability to deliver exceptional results.
        </p>
        <div className="mt-10 flex items-center space-x-3">
          <div className="h-6 w-6 rounded-full bg-[#5625DF]"></div>
          <div className="h-6 w-6 rounded-full bg-[#FF27B7]"></div>
          <div className="h-6 w-6 rounded-full bg-[#37DAF3]"></div>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="josefin-bold text-3xl text-navy-blue md:text-4xl">
          Contact Way
        </h3>
        <ul className="mt-6 grid max-w-[500px] grid-cols-2 gap-x-9 gap-y-12">
          <li className="lato-regular flex flex-wrap items-center gap-x-4 gap-y-4 text-base text-sub-text">
            <div className="h-11 w-11 shrink-0 rounded-full bg-[#5726DF]"></div>
            Tel: 877-67-88-99 <br />
            E-Mail: shop@store.com
          </li>
          <li className="lato-regular flex flex-wrap items-center gap-x-4 gap-y-4 text-base text-sub-text">
            <div className="h-11 w-11 shrink-0 rounded-full bg-pink-primary"></div>
            Tel: 877-67-88-99 <br />
            E-Mail: shop@store.com
          </li>
          <li className="lato-regular flex flex-wrap items-center gap-x-4 gap-y-4 text-base text-sub-text">
            <div className="h-11 w-11 shrink-0 rounded-full bg-[#FFB265]"></div>
            Tel: 877-67-88-99 <br />
            E-Mail: shop@store.com
          </li>
          <li className="lato-regular flex flex-wrap items-center gap-x-4 gap-y-4 text-base text-sub-text">
            <div className="h-11 w-11 shrink-0 rounded-full bg-[#1BE982]"></div>
            Tel: 877-67-88-99 <br />
            E-Mail: shop@store.com
          </li>
        </ul>
      </div>
    </div>
  );
}
