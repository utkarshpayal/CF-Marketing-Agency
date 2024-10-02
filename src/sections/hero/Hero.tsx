import { useState } from "react";
export const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white">
        <div className="flex flex-col items-center py-20 md:flex-row md:justify-between gap-10 md:gap-40 px-5 md:px-20">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-lg md:text-4xl  italic leading-tight">
              <span className="block">Turning ideas into impact.</span>
              <span className="block">We craft strategies that connect, engage, and convert.</span>
            </h1>
            <h1 className="pt-10 font-bold text-3xl">Empower your Brand</h1>
          </div>
          <div className="flex-none mb-4 md:mb-0">
            <div className="relative w-64 h-64 rounded-full shadow-2xl overflow-hidden flex items-center justify-center">
              <img
                src="https://files.cdn-files-a.com/uploads/9728499/800_66ecfe9a308b9.png"
                className="w-full h-full object-cover"
                alt="Description"
              />
            </div>
          </div>
        </div>
          <div className="flex flex-col items-center p-10 bg-slate-50">
              <h1 className="font-extrabold text-3xl md:text-6xl text-center mb-4 pb-10">
                What we do<span className="text-green-500">?</span>
              </h1>
              <div className="bg-white w-full max-w-md mx-auto rounded-lg shadow-lg p-10">
                <h1 className="text-3xl font-bold underline decoration-red-500">
                  Digital
                </h1>
                <h2 className="text-xl mt-2 text-gray-700">
                  We create super-rich experiences online!
                </h2>
                <p className={`mt-4 text-gray-600 ${isExpanded ? '' : 'line-clamp-3'}`}>
                  Our team leverages cutting-edge technology and innovative strategies to deliver exceptional digital solutions tailored to your needs.
                  {isExpanded && (
                    <> 
                      Our team leverages cutting-edge technology and innovative strategies to deliver exceptional digital solutions tailored to your needs.
                      Our team leverages cutting-edge technology and innovative strategies to deliver exceptional digital solutions tailored to your needs.
                    </>
                  )}
                </p>
                <button
                  className="mt-4 text-blue-600 underline"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>
          </div>


        <section className="bg-[#FCF8F1] bg-opacity-30 py-8 sm:py-4 lg:py-2">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <p className="text-xs sm:text-base font-semibold tracking-wider text-blue-600 uppercase">
                  A digital marketing platform for all
                </p>
                <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-[5.5rem]">
                  Ignite Your Digital Potential
                </h1>
                <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                  Innovative strategies to launch your brand into digital stardom.
                </p>
              </div>

              <div>
                <img
                  className="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};
