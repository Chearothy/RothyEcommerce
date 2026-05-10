
function Contact() {
  return (
    <div className="my-10 w-[90%] max-w-5xl mx-auto">
      <form className="w-full border p-6 rounded-lg shadow-md bg-white">

        <h1 className="text-4xl font-bold text-center mb-8">
          Contact Us
        </h1>
        {/* Name */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Name <span className="text-red-500">*</span>
          </label> 

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border p-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all ease-in-out "
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Phone <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            placeholder="Enter your phone number"
            className="w-full border p-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all ease-in-out" 
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Email <span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border p-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all ease-in-out"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Message <span className="text-red-500">*</span>
          </label>

          <textarea
            placeholder="Enter your message"
            className="w-full h-32 border p-2 border-gray-200 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
        </div>
    
        {/* Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
        >
          Send Message
        </button>

      </form>
    </div>
  );
}

export default Contact;