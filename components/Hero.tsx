import { Spotlight } from './ui/Spotlight';
import { cn } from '@/lib/utils'; // or relative like './utils'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
     
<div className=" relative flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 dark:bg-grid-white/[0.3] bg-grid-black/[0.2] ">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100  " />
      
    </div>

      <div className='flex justify-center'>
        <div className='max-w-[89vw]' >
<h2> Dynamic Web with Next.js </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
