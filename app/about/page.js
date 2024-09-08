'use client'; // Required in app directory for client-side data fetching
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          At blogpost.com, our mission is to provide a platform where individuals from all walks of life can share their stories, ideas, and insights with the world. We believe in the power of the written word and strive to offer a space that encourages creative expression and open dialogue.
        </p>
        <p className="text-gray-700 mb-4">
          Our team is dedicated to fostering a community of passionate writers and engaged readers. We aim to be a leading resource for high-quality content that informs, entertains, and inspires.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 mb-4">
          Blogpost.com was founded in 2022 by Ajith Narayan, who envisioned creating a space where diverse voices could be heard. What started as a small project has grown into a vibrant community with contributors from around the globe.
        </p>
        <p className="text-gray-700 mb-4">
          Our platform has evolved over time, incorporating feedback from our users and continuously improving to meet their needs. We are committed to providing a user-friendly experience and are always looking for ways to enhance our services.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Meet the Creator</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <Image width={500} // specify width
            height={500} src="./ajith-narayan.jpg" alt="Ajith Narayan" className="w-1/2 h-90 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold mb-2">Ajith Narayan</h3>
          <p className="text-gray-600">Founder & CEO    </p>
          <p className="text-gray-700 mt-2">
            Ajith Narayan is the visionary behind blogpost.com. With a passion for technology and a love for storytelling, Ajith has dedicated himself to building a platform that empowers writers and connects readers. His commitment to quality and innovation drives the continuous growth and success of the site.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-700 mb-4">
          We love hearing from our readers and contributors! If you have any questions, suggestions, or just want to say hello, feel free to reach out to us at <a href="mailto:contact@blogpost.com" className="text-indigo-600 hover:underline">contact@blogpost.com</a>.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
