import content from "../../assets/content-strategy.png"
import stats from "../../assets/statistics.png"
import social from "../../assets/social-media.png"
import video from "../../assets/video.png"
import web from "../../assets/coding.png"
import seo from "../../assets/seo.png"
import media from "../../assets/media.png"
import sopify from "../../assets/web.png"
import email from "../../assets/email-marketing.png"

export const Services = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Make every step user-centric
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Enhance your brand identity with our digital marketing strategies
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          <div className="md:p-8 lg:p-14">
          <img
              src={content} 
              alt="Digital Strategy"
              className="mx-auto w-20 h-20" 
            />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Digital Strategy & Planning
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              We leverage our years of experience to create the correct strategy
              and plans for your business which helps to grow your brand and
              revenue
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
          <img
              src={stats} 
              alt="Digital Strategy"
              className="mx-auto w-20 h-20" 
            />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Creative Strategy and Web Graphics Design
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Creativity is a way of life at webeesocial. When we create
              something – a website, an app, emailer, an infographic, a social
              media post
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
          <img
              src={social} 
              alt="Digital Strategy"
              className="mx-auto w-20 h-20" 
            />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Social Media Marketing
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Social is in our name, literally! Social Media is key to our
              overall strategy, and we use a variety of social strategies across
              different channels.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
          <img
              src={video} 
              alt="Digital Strategy"
              className="mx-auto w-20 h-20" 
            />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Videos, GIFs and Content Marketing
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Video has become the most popular content format. Google algorithm
              rewards pages with features such as social media integration,
              social bookmarking and rich videos
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
          <img
              src={web} 
              alt="Digital Strategy"
              className="mx-auto w-20 h-20" 
            />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Website Design and Development
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              We stay ahead of the technological and UI trends. We focus on
              breaking down a user journey, translating our design in the most
              efficient way.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
          <img
              src={seo} 
              alt="Digital Strategy"
              className="mx-auto w-20 h-20" 
            />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Search Engine Optimization
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Our approach to SEO and SEM is simple and transparent. We audit
              your assets and assess your SEO/SEM goals post which we share
              timeline expectations
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
          <img
              src={media} 
              alt="Digital Strategy"
              className="mx-auto w-20 h-20" 
            />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Media Planning and Buying
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              We are connected with a network of media partners who help us
              offer a fully integrated and accredited communication solution.
              These media include websites, apps, etc.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
          <img
              src={sopify} 
              alt="Digital Strategy"
              className="mx-auto w-20 h-20" 
            />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Shopify Website & Development
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Looking for a Shopify website development company? You’ve landed
              on just the right page!
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
          <img
              src={email} 
              alt="Digital Strategy"
              className="mx-auto w-20 h-20" 
            />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Email Marketing
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              We can build effective email marketing campaigns and streamline
              the delivery process so that sending emailers is easy, secure and
              personalised. Our creative team designs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
