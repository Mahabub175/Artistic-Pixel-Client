import icon1 from "@/assets/images/Icon.png";
import icon2 from "@/assets/images/Icon2.png";
import icon3 from "@/assets/images/Icon3.png";
import icon4 from "@/assets/images/Icon4.png";

export const serviceData = [
  {
    id: 1,
    name: "Web Development",
    description:
      "Innovative Web Solutions Crafted for the Digital Age, Elevating Your Brand and Engaging Your Audience with Seamless User Experiences.",
    image: icon1,
    to: "/services/web-development",
  },
  {
    id: 2,
    name: "App Development",
    description:
      "Transforming Ideas into Interactive Mobile Apps, Delivering Seamless Performance and User-Centric Designs.",
    image: icon2,
    to: "/services/app-development",
  },
  {
    id: 3,
    name: "ERP Solution",
    description:
      "Streamlining Business Operations with Custom ERP Solutions, Enhancing Efficiency and Driving Growth.",
    image: icon3,
    to: "/services/erp-solution",
  },
  {
    id: 4,
    name: "Management Software",
    description:
      "Future-Ready Management Software to Optimize Your Business, Boosting Efficiency and Reducing Operational Costs.",
    image: icon4,
    to: "/services/management-software",
  },
];

import innovative from "@/assets/images/innovative.png";
import excellence from "@/assets/images/excellence.png";
import success from "@/assets/images/success.png";

export const aboutData = {
  innovative: {
    name: "Innovative Technology Enablers",
    description:
      "Empowering global businesses with bespoke, cutting-edge solutions tailored to their unique needs, ensuring seamless functionality and responsive design to drive sustainable growth in the digital era.",
    image: innovative,
    reverse: false,
  },
  excellence: {
    name: "Tailored IT Excellence",
    description:
      "Crafting exceptional designs that elevate businesses worldwide, providing unmatched support and expertise to ensure your journey to digital success is smooth, rewarding, and tailored precisely to your requirements.",
    image: excellence,
    reverse: true,
  },
  success: {
    name: "Your Path to Digital Success",
    description:
      "Embark on a transformative journey with us, where seamless consultations and exceptional services pave the way for your digital triumph. Trust in our commitment to your comfort and success as we turn your ideas into technology that empowers and inspires.",
    image: success,
    reverse: false,
  },
};

import mail from "@/assets/images/mail.png";
import location from "@/assets/images/location.png";
import phone from "@/assets/images/phone.png";

export const contactData = [
  {
    id: 1,
    name: "Chat with us",
    description: "Our friendly team is here to help.",
    contact: "support@vitasoftsolutions.com",
    link: "mailto:support@vitasoftsolutions.com",
    image: mail,
  },
  {
    id: 2,
    name: "Office",
    description: "Come say hello at our office HQ.",
    link: "https://maps.app.goo.gl/b1KyQuKfAd4iLfRa7",
    contact:
      "Brothers Tower, Corporate Office: 677, East Dhonia - Dholaipar Rd, 1236 Dhaka, Dhaka Division, Bangladesh",
    image: phone,
  },
  {
    id: 3,
    name: "Phone",
    description: "Mon-Fri from 8am to 5pm.",
    link: "tel:+8801762080701",
    contact: "+880 1762-080701",
    image: location,
  },
];

export const categoryData = [
  {
    id: 1,
    name: "Food",
    image: "https://infyfunding.nyc3.digitaloceanspaces.com/204/food1.jpg",
  },
  {
    id: 2,
    name: "Treatment",
    image: "https://infyfunding.nyc3.digitaloceanspaces.com/204/food1.jpg",
  },
  {
    id: 3,
    name: "Tulip",
    image: "https://infyfunding.nyc3.digitaloceanspaces.com/204/food1.jpg",
  },
  {
    id: 4,
    name: "Education",
    image: "https://infyfunding.nyc3.digitaloceanspaces.com/204/food1.jpg",
  },
  {
    id: 5,
    name: "Global Cause",
    image: "https://infyfunding.nyc3.digitaloceanspaces.com/204/food1.jpg",
  },
];

export const causeData = [
  {
    id: 1,
    author: "John Doe",
    trending: true,
    slug: "emergency-1",
    name: "Emergency Response And School Food",
    categories: ["food", "health"],
    description:
      "Nutritious school food helps students develop lifelong healthy eating habits. This campaign helps students develop lifelong healthy eating habits",
    start_date: "3 Oct, 2024",
    end_date: "31 Oct, 2024",
    goal_amount: "150,000",
    raised_raised: "70,000",
    remaining: "100,000",
    progress: "90%",
    attachment: "https://infyfunding.nyc3.digitaloceanspaces.com/1/Group1.png",
  },
  {
    id: 2,
    author: "John Doe",
    slug: "emergency-2",
    trending: true,
    titleOne: "Our Mission : Food, Education, Medicine",
    bannerImage:
      "https://infyfunding.nyc3.digitaloceanspaces.com/108/video-img.png",
    name: "Emergency Response And School Food",
    categories: ["food", "health"],
    description:
      "Nutritious school food helps students develop lifelong healthy eating habits. This campaign helps students develop lifelong healthy eating habits",
    startDate: "3 Oct, 2024",
    endDate: "31 Oct, 2024",
    goal: "150,000",
    raised: "50,000",
    remaining: "100,000",
    detailsImage:
      "https://infyfunding.nyc3.digitaloceanspaces.com/1/Group1.png",
  },
  {
    id: 3,
    author: "John Doe",
    slug: "emergency-3",
    titleOne: "Our Mission : Food, Education, Medicine",
    bannerImage:
      "https://infyfunding.nyc3.digitaloceanspaces.com/108/video-img.png",
    name: "Emergency Response And School Food",
    categories: ["food", "health"],
    description:
      "Nutritious school food helps students develop lifelong healthy eating habits. This campaign helps students develop lifelong healthy eating habits",
    startDate: "3 Oct, 2024",
    endDate: "31 Oct, 2024",
    goal: "150,000",
    raised: "50,000",
    remaining: "100,000",
    detailsImage:
      "https://infyfunding.nyc3.digitaloceanspaces.com/1/Group1.png",
  },
];

export const aboutUsData = {
  title: "We Have Funded 44k Dollars Over",
  description: "We have plenty of water of drink even..",
  lists: [
    "A place in history.",
    "Its about impact, goodness.",
    "More goodness in the world.",
    "The world we live in right now can be hard.",
  ],
  imageOne:
    "https://infyfunding.nyc3.digitaloceanspaces.com/111/josh-appel-NeTPASr-bmQ-unsplash.jpg",
  imageTwo:
    "https://infyfunding.nyc3.digitaloceanspaces.com/112/fundaboutus.jpg",
  experience: "20",
};

export const counterData = [
  { id: 1, name: "Projects Completed", count: "5500" },
  { id: 2, name: "Hopeless Child", count: "500" },
  { id: 3, name: "Team Member", count: "5" },
  { id: 4, name: "Get Regards", count: "99" },
];

export const homeFaqData = [
  {
    id: 1,
    question: "How do I withdraw funds from my campaign?",
    answer:
      "Once your Crowdfunding starts receiving online donations, you can easily request a withdrawal at any time. Withdrawing money does not affect the progress meter displayed on your campaign. Simply click ‘Withdraw’ while logged into your account and follow the instructions. You can withdraw your balance directly to your bank account. Bank transfers take 2-5 business days to arrive.",
  },
  {
    id: 2,
    question: "Can a friend withdraw the money I raise for them?",
    answer:
      "Yes. Crowdfunding makes it easy for another friend or family member to securely access the funds you have raised. Through Crowdfunding, they will receive direct access to the money you have raised",
  },
  {
    id: 3,
    question: "How will I receive the donated funds?",
    answer:
      "You can withdraw donation amount to your PayPal account or to your bank account.",
  },
];

export const teamData = [
  {
    id: 1,
    name: "Mr. Paul Smith",
    designation: "Support Staff",
    image: "https://infyfunding.nyc3.digitaloceanspaces.com/91/team4.png",
  },
  {
    id: 1,
    name: "Mr. John Thompson",
    designation: "Support Staff",
    image: "https://infyfunding.nyc3.digitaloceanspaces.com/90/team3.png",
  },
  {
    id: 1,
    name: "Mrs. Dimassi Shatt",
    designation: "CEO",
    image: "https://infyfunding.nyc3.digitaloceanspaces.com/89/team2.png",
  },
  {
    id: 1,
    name: "Mr. Salman Ahmad",
    designation: "Founder",
    image: "https://infyfunding.nyc3.digitaloceanspaces.com/88/team1.png",
  },
];
