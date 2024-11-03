"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const foundationCourse = [
    {
        title: "Medical Foundation Course",
        description: `The Medical Foundation Course for high school students offers a comprehensive introduction to medicine, healthcare, and medical imaging.
      Covering topics like anatomy, physiology, radiography, and patient care, it fosters curiosity and critical thinking.
      Through hands-on activities and lectures, students gain insight into medical practices, ethics, and career pathways,
      preparing them for future studies and professions in healthcare.`,
    },
    {
        title: "Engineering Foundation Course",
        description: `The Engineering Foundation Course meticulously equips students with essential knowledge for success across diverse engineering disciplines.
      Tailored for exams like JEE mains, Advance, and Olympiads, it covers mathematics, physics, chemistry, and engineering fundamentals. 
      Specialized support for fields like Railway and Financial Engineering is included. Through rigorous preparation and expert guidance, 
      students develop a strong foundation for pursuing undergraduate engineering degrees. This course ensures readiness for university-level study in any 
      engineering branch.`,
    },
    {
        title: "Defence Foundation Course",
        description: `The Defense Foundation Course meticulously prepares aspiring individuals for a range of entrance exams, including NDA, NA, TES Indian Army, 
      B.Tech Navy Entry Scheme, IMU Maritime University, and more. Tailored to instill fundamental knowledge and enhance physical and mental readiness for roles in 
      the Indian Defense Services, the program emphasizes mathematics, science, and specialized subjects like PCMB and PCB for Nursing, Navy, Army. 
      This comprehensive approach ensures that students are well-equipped to pursue successful careers within the defense sector, laying a strong groundwork for 
      their future endeavors.`
    },
    {
        title: "Foundation Course",
        description: `The Foundation Course offers a comprehensive program tailored for students in grades 5 through 10, with the goal of preparing them for various scholarship exams and admission tests.
      Focusing on assessments like NTSE, NLSTSEC, KVPY, INO, and more, as well as entry exams for institutions like Navodaya Vidyalaya and Sainik School, 
      it ensures thorough preparation for academic success. Covering subjects such as science, mathematics, communication skills, and general knowledge, the course 
      provides students with the necessary knowledge and skills to excel in these competitive assessments. With expert guidance and comprehensive study materials, 
      it empowers students to achieve exceptional results and unlock their full academic potential.`
    }
];

const products = [
    {
        name: "Medical",
        image: "https://drive.google.com/uc?id=1jFq9SVwfc9YI1UR_bCCWMrqcnUGaAi08",
        description: "Prepare for the National Eligibility cum Entrance Test with our comprehensive and interactive course. Learn from the best faculty and get access to mock tests, doubt sessions, and study materials.",
        pageLink: "/our-courses",
    },
    {
        name: "Engineering",
        image: "https://drive.google.com/uc?id=1hr21Isse2WH2c9bRkQqF7zhVg3zfW1Eb",
        description: "Prepare for the Joint Entrance Examination with our comprehensive and interactive course. Learn from the best faculty and get access to mock tests, doubt sessions, and study materials.",
        pageLink: "/about-us",
    },
    {
        name: "Defence",
        image: "https://drive.google.com/uc?id=1hr21Isse2WH2c9bRkQqF7zhVg3zfW1Eb",
        description: "Prepare for the National Defence Academy entrance exam with our comprehensive and interactive course. Learn from the best faculty and get access to mock tests, doubt sessions, and study materials.",
        pageLink: "/contact-us",
    },
    {
        name: "NDA",
        image: "https://drive.google.com/uc?id=1hr21Isse2WH2c9bRkQqF7zhVg3zfW1Eb",
        description: "Prepare for the Marine Engineering entrance exam with our comprehensive and interactive course. Learn from the best faculty and get access to mock tests, doubt sessions, and study materials.",
        pageLink: "/our-courses",
    },
    {
        name: "Foundation",
        image: "https://drive.google.com/uc?id=1QdSwE-bAWWIZB2IzusMHSFHwfW_00CZ2",
        description: "Learn Physics, Chemistry, Mathematics, and Biology for the 11th and 12th standard with our comprehensive and interactive course. Learn from the best faculty and get access to mock tests, doubt sessions, and study materials.",
        pageLink: "/sign-up",
    },
    {
        name: "KVPY",
        image: "https://drive.google.com/uc?id=1wRCMDgEvCpWz-wPrCzqRA5arS2G7bvej",
        description: "Get guidance and advice from our expert career counsellors and discover your true potential and passion. Explore various career options and make informed decisions about your future.",
        pageLink: "/our-courses",
    },
];

const Page = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="flex flex-col w-screen bg-blue-200 h-auto items-center justify-between text-blue-950 px-4 sm:px-16">
            <div className="text-3xl md:text-4xl lg:text-5xl py-4 font-bold mt-5 sm:mt-10">Offered Courses</div>
            <div className="flex flex-col w-full px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 py-4 sm:py-8 gap-4 sm:gap-8">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-blue-950 text-blue-100 px-4 py-4 w-full sm:w-full border-2 border-gray-300 rounded-lg shadow-lg"
                            data-aos="fade-up"
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={600}
                                height={200}
                                className="rounded-lg"
                            />
                            <h3 className=" text-sm my-1 sm:my-2 sm:text-xl font-bold text-center">{product.name}</h3>
                            <div className=" text-2xs my-1 sm:my-2 sm:text-sm text-justify"> {product.description}  </div>
                            <Link href={product.pageLink} className=" my-4 bg-white px-4 py-2 rounded-lg text-blue-950 font-bold hover:bg-blue-500 ml-4 xs:ml-8 lg:ml-0 cursor-pointer hover:text-sky-100">Learn More</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};
export default Page;
