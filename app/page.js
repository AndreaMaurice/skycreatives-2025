import ContactUs from "./components/contactus";
import { GrVmMaintenance } from "react-icons/gr";
import { FaPencil } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";


export default function Home() {
  return (
    <div className="container">
      {/* Banner */}
      <div className="flex flex-col items-center gap-6 py-[200px]">
        <h1 className="text-8xl font-open-sans font-extrabold"><span className="bg-gradient-to-tr from-sky-300 to-sky-800 bg-clip-text text-transparent">Sky’s</span> the limit</h1>
        <h5 className="text-xl text-center px-[50px] font-pt-sans">At Sky Creatives, we specialize in creating high-performing, beautifully designed websites and web applications that elevate businesses of all sizes. Whether you're a budding startup or an established brand, we provide the technical expertise and creative solutions you need to stand out in the digital landscape.
        </h5>
        <div className="flex gap-6">
          <button className="group relative">
            <div className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border bg-sky-500 px-6 font-medium text-white transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3">Get started</div>
            <div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#00bcff,10px_10px_#74d4ff,15px_15px_#b8e6fe]"></div>
          </button>
          <button className="bg-white px-4 py-1 rounded-lg border-2 border-dashed border-slate-200 hover:text-sky-500 hover:border-sky-500 overflow-hidden">Learn more</button>
        </div>
      </div>
      {/* Services */}
      <div className="grid grid-cols-1 gap-6 py-[100px]">
      <h2 className="text-4xl font-open-sans font-bold text-center">Services</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
            <div className="bg-cyan-200 p-5 inline-block rounded">
              <FaLaptopCode className="text-3xl text-cyan-950 block" />
            </div>
            <h4 className="text-2xl font-open-sans font-bold">Web development</h4>
            <p className="text-gray-500">We build custom web applications that are tailored to your unique business needs.</p>
            <div className='flex flex-row gap-2 pt-4'>
              <p className='border-slate-600 bg-slate-100 py-1.5 px-3 text-slate-600 text-xs hover:bg-cyan-100 hover:text-cyan-700'>Single-Page Applications</p>
              <p className='border-slate-600 bg-slate-100 py-1.5 px-3 text-slate-600 text-xs hover:bg-cyan-100 hover:text-cyan-700'>Custom Websites</p>
              <p className='border-slate-600 bg-slate-100 py-1.5 px-3 text-slate-600 text-xs hover:bg-cyan-100 hover:text-cyan-700'>Fullstack</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
            <div className="bg-fuchsia-200 p-5 inline-block rounded">
              <FaPencil className="text-3xl text-fuchsia-950 block" />
            </div>
            <h4 className="text-2xl font-open-sans font-bold">Web & Graphic design</h4>
            <p className="text-gray-500">We create visually stunning websites that are optimized for performance and user experience.</p>
            <div className='flex flex-row gap-2 pt-4'>
              <p className='border-slate-600 bg-slate-100 py-1.5 px-3 text-slate-600 text-xs hover:bg-fuchsia-100 hover:text-fuchsia-700'>UI/UX</p>
              <p className='border-slate-600 bg-slate-100 py-1.5 px-3 text-slate-600 text-xs hover:bg-fuchsia-100 hover:text-fuchsia-700'>Newsletter</p>
              <p className='border-slate-600 bg-slate-100 py-1.5 px-3 text-slate-600 text-xs hover:bg-fuchsia-100 hover:text-fuchsia-700'>Ads</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
            <div className="bg-pink-200 p-5 inline-block rounded">
              <GrVmMaintenance className="text-3xl text-pink-950 block" />
            </div>
            <h4 className="text-2xl font-open-sans font-bold">Maintenance & Support</h4>
            <p className="text-gray-500">We help you rank higher on search engines and drive more organic traffic to your website.</p>
            <div className='flex flex-row gap-2 pt-4'>
              <p className='border-slate-600 bg-slate-100 py-1.5 px-3 text-slate-600 text-xs hover:bg-pink-100 hover:text-pink-700'>Bug Fixes</p>
              <p className='border-slate-600 bg-slate-100 py-1.5 px-3 text-slate-600 text-xs hover:bg-pink-100 hover:text-pink-700'>Updates</p>
              <p className='border-slate-600 bg-slate-100 py-1.5 px-3 text-slate-600 text-xs hover:bg-pink-100 hover:text-pink-700'>Enhances</p>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Us */}
      <ContactUs contact="Contact Us" contactdesc=" Ready to take your online presence to the next level? Contact us today to discuss your project and see how we can help you achieve your goals." contactform="Get in Touch"/>
    </div>
  );
}
