import Image from "next/image";
import client1 from "../../public/assets/images/client-1.png";
import client2 from "../../public/assets/images/client-2.png";
import client3 from "../../public/assets/images/client-3.png";

export function OurClient() {
  return (
    <>
      <h3 className="text-3xl md:text-4xl text-black josefin-bold text-center">
        Our Client Say!
      </h3>
      <div className="flex flex-col items-center mt-16">
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
        <h4 className="text-2xl text-navy-blue lato-bold mt-6">Selina Gomez</h4>
        <h5 className="text-xs text-sub-text lato-regular">
          Ceo At Webecy Digital
        </h5>
        <p className="text-base text-sub-text lato-regular text-center max-w-[689px] mx-auto mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
          ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
          nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
          lacus volutpat praesent.
        </p>
      </div>
    </>
  );
}
