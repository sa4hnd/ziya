import Image from "next/image"
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className={`container mx-auto px-4 bg-white ${poppins.className}`}>
      <header className="py-4 flex justify-between items-center">
        <Image src="/ziya-logo.png" alt="Ziya Class Logo" width={50} height={50} className="w-12 h-12" />
        <button className="p-2 rounded-md hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </header>

      <main className="space-y-12">
        <section className="bg-blue-50 rounded-lg p-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <Image
              src="/teacher-portrait.png"
              alt="Ziya - Chemistry Teacher"
              width={300}
              height={400}
              className="rounded-lg shadow-xl"
            />
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold">Ziad Nawzad Najmaddin</h1>
              <h2 className="text-2xl mt-2">Chemistry Teacher</h2>
              <p className="mt-4">We offer excellent opportunities for you to acquire all the necessary knowledge about chemistry and become one of the best in your class.</p>
              <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                <FaFacebookF className="text-2xl" />
                <FaInstagram className="text-2xl" />
                <FaYoutube className="text-2xl" />
                <FaTiktok className="text-2xl" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Welcome to Our Chemistry Courses</h2>
          <p className="text-center mb-4">
            In our chemistry courses, we focus on teaching the fundamentals of chemistry in a clear and accessible manner. We strive to help students easily understand the topics and make connections between theory and practice.
          </p>
          <div className="aspect-w-16 aspect-h-9 mt-8">
          <Image
              src="/ALN.JPEG"
              alt="Ziya - Chemistry Teacher"
              width={1920}
              height={1080}
              className="rounded-lg shadow-xl"
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Sample Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/LocULvUao6s"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/glz6pab-wqI"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Registration</h2>
          <div className="text-4xl font-bold text-center mb-4">$79.00</div>
          <ul className="list-disc list-inside space-y-2 mb-4 max-w-md mx-auto">
            <li>Access to all lessons</li>
            <li>Comprehensive learning materials</li>
            <li>Direct teacher support</li>
            <li>Certificate of completion</li>
          </ul>
          <div className="text-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">Register Now</button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Our Books</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image src="/book-1.jpg" alt="Book 1" width={200} height={300} className="rounded-lg shadow-md" />
            <Image src="/book-2.jpg" alt="Book 2" width={200} height={300} className="rounded-lg shadow-md" />
            <Image src="/book-3.jpg" alt="Book 3" width={200} height={300} className="rounded-lg shadow-md" />
            <Image src="/book-4.jpg" alt="Book 4" width={200} height={300} className="rounded-lg shadow-md" />
          </div>
        </section>
      </main>

      <footer className="py-8 text-center bg-blue-50 mt-12 rounded-lg">
        <p className="font-bold">Contact Us</p>
        <p>+1 (123) 456-7890</p>
        <p>123 Chemistry Lane, Science City, SC 12345</p>
        <p>info@ziyachemistry.com</p>
        <div className="flex justify-center space-x-4 mt-4">
          <FaFacebookF className="text-2xl" />
          <FaInstagram className="text-2xl" />
          <FaYoutube className="text-2xl" />
          <FaTiktok className="text-2xl" />
        </div>
      </footer>
    </div>
  )
}