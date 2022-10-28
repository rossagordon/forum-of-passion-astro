import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#FDFDFF] text-black">
      <div className="mx-auto flex flex-col md:flex-row items-center w-full h-full mb-5">
        {/* Left Side */}
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
          <h1 className="font-bold text-3xl my-4">Lorem, ipsum dolor.</h1>
          <p className="mb-4 text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            error ducimus dolores quaerat impedit facilis a, corrupti fugiat
            laudantium reprehenderit veniam saepe? Modi rerum, ea voluptas
            perspiciatis quis velit sed perferendis eum voluptatem deserunt
            atque aliquid est illum totam nostrum ducimus rem iusto quos ex
            nihil dolore fugiat. Odio, tempore?
          </p>
          <p className="mb-4 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            reprehenderit, blanditiis dolorum quam hic eligendi tempora
            voluptatem libero, quas commodi repudiandae itaque! Pariatur,
            voluptas quo debitis, libero dicta id quis atque adipisci et vitae
            minima numquam explicabo magni delectus itaque, ut neque quas aut ea
            commodi? Delectus earum hic est.
          </p>
        </div>
        {/* <!--Right Col--> */}
        <div className="w-full lg:w-1/2 lg:py-6 text-center">
          {/* <img
            src={Logo}
            className="mt-[-100px] scale-75 w-auto mx-auto"
            alt="Forum of Passion Podcast"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
