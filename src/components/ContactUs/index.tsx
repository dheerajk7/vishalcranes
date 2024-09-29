import AddressImageUrl from "../../../public/svg/location.svg";
import EmailImageUrl from "../../../public/svg/email.svg";
import CallImageUrl from "../../../public/svg/call.svg";
import TimeImageUrl from "../../../public/svg/time.svg";
import Image from "next/image";

function ContactUs() {
  return (
    <>
      <span
        id="contactus"
        style={{ position: "relative", top: "-40px" }}
      />
      <section className="m-auto w-fit mt-8 text-center">
        <p className="text-4xl text-black ">Contact Us</p>
        <div className="flex items-center gap-1 flex-col m-4">
          <div className="flex items-center text-lg gap-1">
            <Image
              src={AddressImageUrl}
              style={{ height: "26px", width: "26px" }}
              alt={"Address Image"}
            />
            Our office address
          </div>
          <div className="text-sm text-gray-light">
            7-8 Shop No, Pithampur, Patel Bhawan Old Palasia, Indore, Madhya
            Pradesh 452001
          </div>
        </div>
        <div className="flex items-center gap-1 flex-col m-2">
          <div className="flex items-center text-lg gap-1">
            <Image
              src={EmailImageUrl}
              style={{ height: "30x", width: "30px" }}
              alt={"Email Image"}
            />
            General Enquiries
          </div>
          <div className="text-sm text-gray-light">Vishalfab034@gmail.com</div>
        </div>
        <div className="flex items-center gap-1 flex-col m-2">
          <div className="flex items-center text-lg gap-1">
            <Image
              src={CallImageUrl}
              style={{ height: "32px", width: "20px" }}
              alt={"Call Image"}
            />
            Call Us
          </div>
          <div className="text-sm text-gray-light">
            <span>+91 9826232224</span>
            <div>
              <span>+91 7748804444</span>
              <span>+91 8120332224</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 flex-col m-2">
          <div className="flex items-center text-lg gap-1">
            <Image
              src={TimeImageUrl}
              style={{ height: "38px", width: "27px" }}
              alt={"Location Image"}
            />
            Our Timing
          </div>
          <div className="text-sm text-gray-light">
            Mon-Sun: 12:00Am - 12:00PM
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
