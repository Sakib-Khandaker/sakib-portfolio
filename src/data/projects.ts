export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "traffic-accident-forecasting",
    title: "Spatio-Temporal Traffic Accident Forecasting",
    shortDescription:
      "Machine learning and time-series based forecasting of road accident indicators across Bangladesh.",
    description:
      "A research-oriented forecasting project focusing on vehicle count, death count, and injured count using division-wise and monthly data. The project explores machine learning, time-series forecasting, feature engineering, spatial-temporal analysis, and risk mapping.",
    technologies: [
      "Python",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "ARIMA",
      "SARIMA",
      "Machine Learning",
    ],
    image: "/images/projects/traffic-accident.jpg",
  },
  {
    slug: "student-management-system",
    title: "Student Management System",
    shortDescription:
      "Desktop application for managing student academic information.",
    description:
      "A desktop-based student management system designed to manage academic records, attendance, performance, and related student information.",
    technologies: ["Java", "Database", "Desktop Application"],
    image: "/images/projects/student-management.jpg",
  },
  {
    slug: "ecommerce-website",
    title: "Online E-commerce Website",
    shortDescription:
      "Web-based platform for products, purchases, and order management.",
    description:
      "An e-commerce website focused on product browsing, purchase workflows, customer interaction, and order management.",
    technologies: ["JavaScript", "HTML", "CSS", "Database", "Web Development"],
    image: "/images/projects/ecommerce.jpg",
  },
  {
    slug: "bangla-road-accident-news-dataset",
    title: "Bangla Road Accident News Dataset",
    shortDescription:
      "Structured accident information extraction from Bangla news articles.",
    description:
      "A data collection and information extraction workflow for Bangla road accident news. The project focuses on extracting article metadata and accident-related information such as location, vehicles, deaths, injuries, and temporal details.",
    technologies: [
      "Python",
      "NLP",
      "Web Scraping",
      "Regex",
      "Data Processing",
    ],
    image: "/images/projects/news-dataset.jpg",
  },
];