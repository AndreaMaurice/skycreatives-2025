import ContactUs from "../components/contactus";

export default function About() {
    return (
        <div className="container">
            {/* Banner */}
            <div className="flex flex-col gap-6 py-[200px]">
                <h1 className="text-8xl font-open-sans font-bold">Who are We –</h1>
                <h4 className="text-2xl font-pt-sans font-semibold">Passionate Developers, Creative Thinkers, and Problem Solvers</h4>
                <p>Sky Creatives is a team of highly skilled web developers and digital strategists dedicated to helping businesses thrive in the digital world.  We specialize in creating high-performing, beautifully designed websites and web applications that elevate businesses of all sizes. Whether you're a budding startup or an established brand, we provide the technical expertise and creative solutions you need to stand out in the digital landscape.
                </p>
            </div>
            {/* Descriptions */}
            <div className="flex flex-col gap-4 py-[100px]">
                <div>
                    <h2 className="text-4xl font-open-sans font-bold">Tailored Solutions</h2>
                    <h5 className="text-xl font-pt-sans">We don’t believe in one-size-fits-all. Every project is unique, and we take the time to understand your specific needs.</h5>
                </div>
                <div className="border-t-2 border-b-2 border-slate-200 py-4">
                    <h2 className="text-4xl font-open-sans font-bold">Expert Team</h2>
                    <h5 className="text-xl font-pt-sans">With years of experience across various industries, our team brings technical know-how and creative problem-solving to every project.</h5>
                </div>
                <div>
                    <h2 className="text-4xl font-open-sans font-bold">Ongoing Support</h2>
                    <h5 className="text-xl font-pt-sans">We don’t just build and disappear. We offer ongoing support to ensure your website remains effective and up-to-date.</h5>
                </div>
            </div>
            {/* Contact Us */}
            <ContactUs contact="Wanna give it a shot?" contactdesc="Let's work together and build your ideas into life. We'll get back to you within 48 hours." contactform="Send us a message!"/>
        </div>
    );
}