import bannerImage from '../assets/Image-gallery-images/banner-image.png';
import { Icon } from '@iconify/react';
import 'animate.css';

// Banner component that displays a message and an image
const Banner = () => {
    return (
        <div className='container mx-auto py-10'>
            <div className='flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-5 xl:mx-0 mx-5'>

                {/* Left side with text content */}
                <div className='w-full lg:text-left text-center animate__animated animate__fadeInDown'>
                    <h3 className='md:text-4xl text-3xl font-bold mb-5 uppercase text-[#00226D]'>
                        Completed <span className='text-[#1179EF]'>Image Gallery</span> Task
                    </h3>
                    <h5 className='text-xl font-semibold mb-5 text-[#1179EF] '>Dear, Hiring Manager</h5>
                    <p className='text-justify'>
                        I wish to convey my heartfelt gratitude for the Image Gallery task. This experience has been truly remarkable, providing me with a valuable platform to delve into the intricacies of React JS development. Your organization's dedication to excellence was vividly demonstrated through this unique and engaging task.
                        <br /><br />
                        I am enthusiastic about the opportunity to potentially join your esteemed team and bring my skills to contribute to your objectives.
                    </p>
                    <button onClick={() => window.scrollTo(0, 750)} className='btn bg-[#1179EF] lg:mx-0 md:w-auto mx-auto text-white font-semibold rounded-full px-5 py-3 mt-10 animate__animated animate__pulse animate__infinite infinite animate__slow 2s flex items-center gap-3'>
                        Please Check The Completed Task <Icon icon="el:hand-down" className='text-2xl' />
                    </button>
                </div>

                {/* Right side with the banner image */}
                <div className='w-full'>
                    <img src={bannerImage} className='w-full animate__animated animate__pulse animate__slow 2s' alt="Kaykoad Yiasin" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
