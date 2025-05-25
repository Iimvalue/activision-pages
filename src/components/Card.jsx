const Card = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => (
        <article
          key={blog.id}
          className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          style={{
            background:
              "radial-gradient(100% 100% at 50.52% 0%, #686868 0%, #000000 100%)",
          }}
        >
          <a
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative h-50">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-full object-cover object-center"
              />
            </div>

            <div className="p-6">
              <time className="block text-sm text-white mb-2">
                {blog.date}
              </time>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-600 transition-colors">
                {blog.title}
              </h3>

              <div className="w-12 h-px bg-blue-600 mb-4" />

              <p className="text-white line-clamp-3 mb-6">{blog.text}</p>

              <div className="flex items-center text-white font-bold group-hover:text-blue-700 transition-colors">
                <span>Read More</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </a>
        </article>
      ))}
    </div>
  );
};

export default Card;
