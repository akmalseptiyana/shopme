import Image from "next/image";

import client1 from "@/public/assets/images/client-1.png";
import client2 from "@/public/assets/images/client-2.png";
import client3 from "@/public/assets/images/client-3.png";

export function OurClient() {
  return (
    <>
      <h3 className="josefin-bold text-center text-3xl text-black md:text-4xl">
        Our Client Say!
      </h3>
      <div className="mt-16 flex flex-col items-center">
        <div className="flex items-center gap-x-3">
          <figure>
            <Image src={client1} alt="client image" quality={90} />
          </figure>
          <figure className="-translate-y-4">
            <Image src={client2} alt="client image" quality={90} />
          </figure>
          <figure>
            <Image src={client3} alt="client image" quality={90} />
          </figure>
        </div>
        <h4 className="lato-bold mt-6 text-2xl text-navy-blue">Selina Gomez</h4>
        <h5 className="lato-regular text-xs text-sub-text">
          Ceo At Webecy Digital
        </h5>
        <p className="lato-regular mx-auto mt-4 max-w-[689px] text-center text-base text-sub-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
          ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
          nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
          lacus volutpat praesent.
        </p>
      </div>
    </>
  );
}
