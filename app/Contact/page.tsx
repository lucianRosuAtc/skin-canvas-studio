
import ContactForm from "../../components/ContactForm";
import { Clock, HomeIcon, MailIcon, PhoneCall } from "lucide-react";
import { dancing } from "../../components/fonts";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid pt-12 mb-6 xl:mb-16">
        <div className="flex flex-col justify-center">
          <div className="flex items-center justify-center text-primary text-lg lg:text-2xl mb-4">
            Get in Touch with Skin Canvas Studio
          </div>

          <div className="text-center">
          {/* <h1 className={`${dancing.className} mb-5 md:mb-10`}>Welcome to Skin Canvas Studio</h1> */}
            <h1 className={`${dancing.className} my-4 mx-auto mb-10 md:mb-20 tracking tracking-widest`}>Contact Us</h1>
          </div>

          <div className="flex flex-col md:flex-row mb-8">
            <div className="flex flex-col">
              <div className="max-w-[580px] md:mr-6 mb-2 text-sm md:text-base">


              <p>
                We&apos;d love to hear from you!
              </p>
              <p>
                Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
              </p>
              <p className="max-w-[600px] md:mr-6 mb-3 md:mb-16 text-sm md:text-base">
                Fill out the form and we&apos;ll get back to you as soon as possible.
              </p>
              </div>


              <div className="flex flex-col my-8 md:my-0 gap-y-6 xl:gap-y-8 xl:text-lg">

              <div className="flex items-center gap-x-3 md:gap-x-6 text-sm md:text-base">
                  <MailIcon size={18} className="text-primary" />
                  <a
                    href="mailto:vigilent.developer@gmail.com"
                    className="hover:text-primary"
                  >
                    vigilent.developer@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-x-3 md:gap-x-6 text-sm md:text-base">
                  <HomeIcon size={18} className="text-primary" />
                  <p>190 High St, Exeter EX4 3DU </p>
                </div>

                <div className="flex items-center gap-x-3 md:gap-x-6 text-sm md:text-base">
                  <Clock size={18} className="text-primary" />
                  <p> Mon - Sat, 10:00 AM - 8:00 PM </p>
                </div>

                <div className="flex items-center gap-x-3 md:gap-x-6 text-sm md:text-base">
                  <PhoneCall size={18} className="text-primary" />
                  <a href="tel:07505xxxxxx" className="hover:text-primary">
                    07505700000
                  </a>
                </div>

              </div>
            </div>

            {/* the Contact form under this comment */}
            <div className="mt-10 md:mt-0 md:w-1/2 ">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
