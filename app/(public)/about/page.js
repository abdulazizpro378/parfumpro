// export const metadata = {
//   title: "E-commerce About",
//   description: "E-commerce About site for shops",
// };

// import './about.css'

// export default function About() {
//   return (
//     <main style={{ marginTop: "100px" }} className="bg-danger">
//       <div className="container my-3 about-page" style={{color:'white'}}>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
//         aliquam possimus quisquam aperiam laborum ad incidunt rem totam tempora
//         aliquid provident sequi similique, nihil cumque quam repellendus
//         reiciendis error voluptatum doloribus maiores magni eius culpa.
//         Blanditiis molestias architecto repudiandae sint, voluptate suscipit
//         vel. Doloribus rem autem eius illo veritatis quod incidunt vitae ducimus
//         laboriosam assumenda vel excepturi minus pariatur perspiciatis,
//         cupiditate accusantium enim sequi itaque. Quasi at iusto dolore quam
//         quisquam deleniti quaerat sunt voluptatum pariatur repellendus, voluptas
//         quod eum magni hic cumque recusandae quis unde a sit fugit nesciunt
//         amet. Aspernatur iure sequi dignissimos, ullam quaerat eaque ducimus
//         fugiat!
//       </div>
//     </main>
//   );
// }

import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="pt-10 py-5 container ">
      <section className="flex justify-between bg-white bg-opacity-20 backdrop-blur-md rounded-md p-6 sm:p-14 md:flex-row flex-col gap-11">
        <div>
          <h3 className="text-xs sm:text-sm font-semibold">Our mision</h3>
          <h2 className="py-2 font-semibold text-2xl">
            Creating valuable content for creatives all around the world
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
        <div>
          <h3 className="text-xs sm:text-sm font-semibold">Our Vision</h3>
          <h2 className="py-2 font-semibold text-2xl">
            A platform that empowers individuals to improve
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
      </section>
      <section>
        <div className=" container flex my-10 justify-between bg-white bg-opacity-20 backdrop-blur-md rounded-md items-center gap-10 flex-col md:flex-row">
          {/* <Image
            className="w-full md:w-1/2 max-md:order-1 rounded-r-md"
            src="https://www.shutterstock.com/image-photo/oman-opera-house-own-beauty-260nw-1863720097.jpg"
            alt=""
            width={200}
            height={200}
          /> */}
          <img
            src="https://www.shutterstock.com/image-photo/oman-opera-house-own-beauty-260nw-1863720097.jpg"
            alt="salom"
            width={500}
            height={200}
          />
        </div>
        <div className="flex my-10 justify-between bg-white bg-opacity-20 backdrop-blur-md rounded-md items-center gap-10 flex-col md:flex-row">
          {/* <Image
            className="w-full md:w-1/2 rounded-l-md"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
            width={200}
            height={200}
          /> */}
          <img
            src="https://www.shutterstock.com/image-photo/oman-opera-house-own-beauty-260nw-1863720097.jpg"
            alt="salom"
            width={500}
            height={200}
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
