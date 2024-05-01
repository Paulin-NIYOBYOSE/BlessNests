import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import BlogCard from "./BlogCard";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      img: "House1.jpg",
      category: "Business",
      title: "10 Delightful Dining Room Decor Trends for spring",
      date: "April 30 2024",
    },
    {
      id: 2,
      img: "House1.jpg",
      category: "Business",
      title: "10 Delightful Dining Room Decor Trends for spring",
      date: "April 30 2024",
    },
    {
      id: 4,
      img: "House1.jpg",
      category: "Business",
      title: "10 Delightful Dining Room Decor Trends for spring",
      date: "April 30 2024",
    },
    {
      id: 4,
      img: "House1.jpg",
      category: "Business",
      title: "10 Delightful Dining Room Decor Trends for spring",
      date: "April 30 2024",
    },
    {
      id: 5,
      img: "House1.jpg",
      category: "Business",
      title: "10 Delightful Dining Room Decor Trends for spring",
      date: "April 30 2024",
    },
    {
      id: 6,
      img: "House1.jpg",
      category: "Business",
      title: "10 Delightful Dining Room Decor Trends for spring",
      date: "April 30 2024",
    },
    {
      id: 7,
      img: "House1.jpg",
      category: "Business",
      title: "10 Delightful Dining Room Decor Trends for spring",
      date: "April 30 2024",
    },
    {
      id: 8,
      img: "House1.jpg",
      category: "Business",
      title: "10 Delightful Dining Room Decor Trends for spring",
      date: "April 30 2024",
    },
    {
      id: 9,
      img: "House1.jpg",
      category: "Business",
      title: "10 Delightful Dining Room Decor Trends for spring",
      date: "April 30 2024",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="px-[100px]">
        <h3>Real Estate News & Blogs</h3>
        <div>
          <div>
            <input type="text" />
          </div>
          <button></button>
          <button></button>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {blogs.map((item) => (
            <div key={item.id}>
              <BlogCard
                id={item.id}
                img={item.img}
                category={item.category}
                title={item.title}
                date={item.date}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
