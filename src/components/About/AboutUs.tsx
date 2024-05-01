import React from "react";
// import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import Statistics from "../Home/Statistics";
import Navbar from "../Home/Navbar";

const AboutUs = () => {
  return (
    <>
      {/* <Navbar /> */}
      <section className="h-[55rem] px-[100px] pt-10">
        <div className=" h-[15rem]">
          <h3 className="font-semibold text-4xl px-[300px]">
            Re-imagining real estate to make it easier to unlock
          </h3>
          <p className="mt-10 px-[200px]">
            on the other hand we denounce with righteous indignation dislike men
            whoare so beguiled and demoralized by the charms of pleasureof the
            moment so blinded by desire, that they cannot foresse the pain and
            trouble
          </p>
        </div>
        <div className="h-[35rem] flex flex-col gap-4">
          <div className="h-1/2 w-full  flex gap-4">
            <div className="h-full w-2/3 ">
              <img
                className="h-full w-full rounded-lg"
                src="/images/Office.jpg"
                alt=""
              />
            </div>

            <div className="h-full w-1/3">
              <img
                className="h-full w-full rounded-lg"
                src="/images/Village.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="h-1/2 w-full  flex gap-4">
            <div className="h-full w-1/3">
              <img
                className="h-full w-full rounded-lg"
                src="/images/Dinning.jpg"
                alt=""
              />
            </div>
            <div className="h-full w-2/3 ">
              <img
                className="h-full w-full rounded-lg"
                src="/images/Site.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Statistics />

      <section className="h-[80rem] px-[100px]">
        <div className="h[10rem]">
          <h3 className="flex items-center font-semibold text-3xl">
            A note from our founders.
          </h3>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Eaque, perferendis, neque dolore obcaeca
          </p>
        </div>
        <div className="h-[40rem] flex mt-16 gap-5">
          <div className=" h-full w-1/2 flex flex-col gap-10">
            <div className="">
              <h3 className=" font-semibold text-xl ">
                It all started in 2020
              </h3>
              <p className="mt-1 mr-20">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid non quae aut et ipsam neque sunt enim iste cumque saepe
                ipsum incidunt consequatur quod quis velit, deleniti sit
                tempora. Sint.
              </p>
            </div>
            <div>
              <h3 className=" font-semibold text-xl ">
                It all started in 2020
              </h3>
              <p className="mt-1 mr-20">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid non quae aut et ipsam neque sunt enim iste cumque saepe
                ipsum incidunt consequatur quod quis velit, deleniti sit
                tempora. Sint.
              </p>
            </div>
            <div>
              <h3 className=" font-semibold text-xl ">
                It all started in 2020
              </h3>
              <p className="mt-1 mr-20">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid non quae aut et ipsam neque sunt enim iste cumque saepe
                ipsum incidunt consequatur quod quis velit, deleniti sit
                tempora. Sint.
              </p>
            </div>
          </div>
          <div className=" h-full w-1/2">
            <img className="rounded-lg" src="/images/Man.jpg" alt="" />
          </div>
        </div>
        <div className="h-[30rem] flex">
          <div className=" h-[26rem] w-1/2">
            <img
              className="rounded-lg h-full w-[80%]"
              src="/images/Man.jpg"
              alt=""
            />
          </div>
          <div className="h-full w-1/2">
            <h3 className=" font-semibold text-xl ">Our vision is simple</h3>
            <p className="mt-1 mr-20">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
              voluptas soluta deserunt minus nostrum non quis dolor sapiente
              voluptates cumque modi, numquam culpa iusto nobis quod eaque
              maxime ratione dignissimos? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Illo mollitia autem, atque aut
              rerum corporis quam dicta dolore ex temporibus quibusdam necessi
            </p>

            <div className="mt-20">
              <h3 className=" font-semibold text-lg">Kausar Pial</h3>
              <p className=" mr-20">CEO at Static Mania</p>
            </div>
          </div>
        </div>
      </section>
      {/* Our team members */}
      <section></section>
      <Footer />
    </>
  );
};

export default AboutUs;
