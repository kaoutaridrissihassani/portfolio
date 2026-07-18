import { useState, useEffect } from "react";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function ProjectModal({ isOpen, onClose, project }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(0);
  }, [project]);

  if (!isOpen || !project) return null;

  const images = project.gallery || [project.image];

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-5">

      <div className="relative bg-white dark:bg-[#1B1B1B] rounded-3xl w-full max-w-6xl max-h-[95vh] overflow-y-auto">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 bg-white dark:bg-[#222] p-3 rounded-full shadow-lg"
        >
          <FaTimes />
        </button>

        {/* IMAGE */}

        <div className="relative bg-gray-100 dark:bg-[#111]">

          <img
            src={images[currentImage]}
            alt=""
            className="w-full max-h-[600px] object-contain"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-black/70 p-4 rounded-full"
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-black/70 p-4 rounded-full"
              >
                <FaChevronRight />
              </button>

              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full">
                {currentImage + 1} / {images.length}
              </div>
            </>
          )}

        </div>

        {/* THUMBNAILS */}

        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto p-5">

            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                onClick={() => setCurrentImage(index)}
                className={`w-28 h-20 rounded-xl cursor-pointer object-cover border-4 transition ${
                  currentImage === index
                    ? "border-[#4274D9]"
                    : "border-transparent"
                }`}
              />
            ))}

          </div>
        )}

        {/* CONTENT */}

        <div className="p-8">

          <span className="uppercase tracking-widest text-[#4274D9] font-semibold">
            {project.category}
          </span>

          <h2 className="text-4xl font-bold mt-3 text-[#293681] dark:text-white">
            {project.title}
          </h2>

          <p className="mt-6 leading-8 text-gray-600 dark:text-gray-300">
            {project.description}
          </p>

          <h3 className="mt-8 mb-4 text-xl font-semibold dark:text-white">
            Technologies
          </h3>

          <div className="flex flex-wrap gap-3">

            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-[#D0E7E6] text-[#293681] px-4 py-2 rounded-full"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProjectModal;

