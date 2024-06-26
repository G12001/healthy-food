import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import ProductList from "./components/ProductList";
import About from "./components/About";
import TestimonialList from "./components/TestimonialList";
import Footer from "./components/Footer";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Quinoa Salad",
      description:
        "A healthy and delicious quinoa salad with mixed vegetables.",
      price: "12.99",
      image: "https://via.placeholder.com/150?text=Quinoa+Salad",
    },
    {
      id: 2,
      name: "Grilled Chicken Breast",
      description: "Perfectly grilled chicken breast with herbs and spices.",
      price: "15.99",
      image: "https://via.placeholder.com/150?text=Grilled+Chicken+Breast",
    },
    {
      id: 3,
      name: "Greek Yogurt",
      description:
        "Creamy Greek yogurt with a hint of honey and fresh berries.",
      price: "6.99",
      image: "https://via.placeholder.com/150?text=Greek+Yogurt",
    },
    {
      id: 4,
      name: "Avocado Toast",
      description:
        "Whole grain toast topped with smashed avocado and cherry tomatoes.",
      price: "8.99",
      image: "https://via.placeholder.com/150?text=Avocado+Toast",
    },
    {
      id: 5,
      name: "Kale Smoothie",
      description:
        "A nutritious smoothie with kale, spinach, banana, and almond milk.",
      price: "7.99",
      image: "https://via.placeholder.com/150?text=Kale+Smoothie",
    },
    {
      id: 6,
      name: "Salmon Fillet",
      description:
        "Grilled salmon fillet served with a side of steamed vegetables.",
      price: "18.99",
      image: "https://via.placeholder.com/150?text=Salmon+Fillet",
    },
    {
      id: 7,
      name: "Oatmeal Bowl",
      description:
        "Warm oatmeal topped with fresh fruits and a drizzle of maple syrup.",
      price: "5.99",
      image: "https://via.placeholder.com/150?text=Oatmeal+Bowl",
    },
    {
      id: 8,
      name: "Tofu Stir-fry",
      description: "Stir-fried tofu with mixed vegetables in a savory sauce.",
      price: "13.99",
      image: "https://via.placeholder.com/150?text=Tofu+Stir-fry",
    },
    {
      id: 9,
      name: "Berry Parfait",
      description: "Layers of Greek yogurt, granola, and mixed berries.",
      price: "6.99",
      image: "https://via.placeholder.com/150?text=Berry+Parfait",
    },
    {
      id: 10,
      name: "Vegetable Soup",
      description: "A hearty vegetable soup with seasonal veggies and herbs.",
      price: "9.99",
      image: "https://via.placeholder.com/150?text=Vegetable+Soup",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      designation: "Fitness Enthusiast",
      message:
        "This product has completely transformed my workout routine. I feel more energetic and stronger than ever!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Nutritionist",
      message:
        "As a nutritionist, I highly recommend these products to my clients. They are packed with essential nutrients and taste great!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Michael Brown",
      designation: "Gym Trainer",
      message:
        "I've seen remarkable results in my clients who use these products. They help in faster recovery and improved performance.",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "Health Blogger",
      message:
        "I love writing about these products. They are perfect for anyone looking to lead a healthier lifestyle.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 5,
      name: "Chris Wilson",
      designation: "Athlete",
      message:
        "These products are my go-to for every training session. They provide the energy and stamina I need to perform at my best.",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
    },
    {
      id: 6,
      name: "Sophia Johnson",
      designation: "Personal Trainer",
      message:
        "I recommend these products to all my clients. They are effective, delicious, and help achieve fitness goals faster.",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
    },
    {
      id: 7,
      name: "David Lee",
      designation: "Sports Coach",
      message:
        "The best nutrition products I have come across. They are a must-have for anyone serious about their fitness.",
      image: "https://randomuser.me/api/portraits/men/70.jpg",
    },
    {
      id: 8,
      name: "Olivia Martinez",
      designation: "Dietitian",
      message:
        "These products make it easy to stick to a healthy diet. They are convenient and provide all the necessary nutrients.",
      image: "https://randomuser.me/api/portraits/women/75.jpg",
    },
    {
      id: 9,
      name: "James Anderson",
      designation: "Bodybuilder",
      message:
        "I have tried many products, but these are the best. They help me build muscle and recover quickly after workouts.",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      id: 10,
      name: "Lily Thomas",
      designation: "Yoga Instructor",
      message:
        "Perfect for my pre and post-yoga sessions. These products provide the right balance of energy and nutrition.",
      image: "https://randomuser.me/api/portraits/women/80.jpg",
    },
  ];

  return (
    <div>
      <Header />
      <HeroSection />
      <ProductList products={products} />
      <About />
      <TestimonialList testimonials={testimonials} />
      <Footer />
    </div>
  );
};

export default App;
