import React from "react";
import { SquareArrowOutUpRight } from "lucide-react";

type ProjectProps = {
  title: string;
  description: string;
  images: string[];
  client: string;
  date: string;
  link: string;
  tags: string[];
};

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  images,
  client,
  date,
  link,
  tags,
}) => {
  return (
    <div className="p-4 mt-4 bg-gray-100 dark:bg-[rgb(var(--background-grey-rgb))] rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 text-left ">
      {/* Column for Images */}
      <div className="space-y-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} image ${index + 1}`}
            className="w-full h-auto object-cover rounded-lg"
          />
        ))}
      </div>

      {/* Column for Project Details */}
      <div>
        <h3 className="text-lg font-semibold text-[#d0662d] flex items-center">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:underline"
            >
              {title}
              <SquareArrowOutUpRight
                color="#d0662d"
                size={15}
                className="ml-2"
              />
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          <span className="font-semibold">Client:</span> {client}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          <span className="font-semibold">Date:</span> {date}
        </p>
        <div className="mt-4 space-y-4">
          {description.split("\n").map((paragraph, index) => (
            <p key={index} className="text-gray-800 dark:text-gray-200">
              {paragraph}
            </p>
          ))}
        </div>
        {/* Tags Section */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
