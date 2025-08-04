import { images } from "../Images";
export const categories = [
  "All",
  "Web Development",
  // "Console Applications",
  "Gen AI",

  "Frontend Development",
];

export const projects = [
  {
    title: "🎯 Smart Campus Navigator",
    category: "Gen AI",
    download: null,
    images: [
      images.nav1,
      images.nav2,
      images.nav3,
      images.nav4,
      images.nav5,
      images.nav6,
      images.nav7,
      images.nav8,
      images.nav9,
      images.nav10,
      images.nav11,
      images.nav12,
      images.nav13,
      images.nav14,
      images.nav15,
      images.nav16,
    ], // Add relevant image references if available, e.g., images.campus1, images.campus2, etc.
    alt: "Smart Campus Navigator Project Image",
    live: null, // Add live link if hosted
    video: "https://youtu.be/_m3iG4ZewJ0", // Add demo video link if available
    repo: null, // Add GitHub repo link if public
    desc: `
Smart Campus Navigator is an AI-powered interactive platform built to simplify campus navigation for students and visitors. It offers seamless access to locations, events, and services through an intuitive interface and real-time features.

📱 Key Features:

1. 🔍 Location Search: Find rooms, departments, or events instantly  
2. 📸 QR Scanning: Instantly access location info via QR codes  
3. 📍 Smart Suggestions: Nearby canteens, restrooms, and libraries based on current location  
4. 🧠 AI-Powered Guidance: Intelligent route planning using floor plans and LLMs  
5. 💬 Natural Language Directions: Clear route explanations via integrated LLM  
6. 🌐 2D & 3D Navigation: Immersive Google Maps + Leaflet integration  
7. 📈 Live Heatmaps: Campus crowd density visualized with color-coded flags  
8. 🧾 Event System: Online event registration with direct payments  
9. 🍽️ Mess Menu: Daily dynamic menu, editable by the mess team  
10. 🗺️ Campus Tour: Interactive campus overview with a student dashboard  
11. 🔐 Secure Auth: Login via Google or Email OTP  
12. 📌 2D/3D Facility Previews: QR-tagged access to visual facility guides  

🛠 Tech Stack:

- Frontend: Next.js  
- Backend: Node.js, Express.js, Flask  
- Database: MongoDB  
- Authentication: Google OAuth, Email OTP  
- APIs & Libraries: Google Maps API, Leaflet, Email.js  
- AI Tools: LLMs, AI/ML, Computer Vision  
- Hosting: Vercel  
  `,
  },
  {
    title: "Happy Stay- Travel Planning Platform",
    category: "Web Development",
    download: null,
    images: [
      images.wonder1,
      images.wonder2,
      images.wonder3,
      images.wonder4,
      images.wonder5,
      images.wonder6,
      images.wonder7,
    ],
    alt: "Project image",
    live: "https://wanderlust-1upa.onrender.com/listings",
    video: null,
    repo: "https://github.com/Abhishek-Khot/HappyStay-Easy-Hotel-Booking",
    desc: `🌍 Happy Stay - Travel Planning Platform 

    Happy Stay is a full-stack travel website where users can explore destinations, plan trips, and get personalized recommendations. Built with the MERN stack and a responsive design, it offers a seamless experience for travel enthusiasts to browse destinations, create itineraries, and share travel experiences.  
    
    💻 Tech Stack:  
    
    -> Frontend: HTML, CSS, JavaScript, EJS  
    -> Backend: Node.js, Express.js, Nodemailer  
    -> Database: MongoDB  
    -> Collaboration: Git and GitHub  
    -> Authentication: Passport.js
    -> Hosting: Render  
    -> Maps & APIs: MapBox API for navigation, OpenWeather API for weather updates  
    
    ✨ Features:  

    1. User Authentication: Secure login and signup  
    2. Home Page: View top destinations, featured blogs, and travel tips  
    3. Destination Page: Browse locations with filters, search, and travel guides  
    4. Trip Planner: Create and customize travel itineraries with budget estimation  
    5. Community Reviews: Share and read experiences from other travelers  
    6. Saved Trips: Bookmark favorite destinations and itineraries  
    7. Weather & Maps: Get real-time weather updates and navigation assistance  
    8. Responsive Design: Works seamlessly on mobile devices  
    9. Feedback & Contact: Users can submit queries and feedback  
    `,
  },
  {
    title: "🛍️ Custom Clothing E-Commerce Platform",
    category: "Web Development",
    download: null,
    images: [
      images.clothing1,
      images.clothing2,
      images.clothing3,
      images.clothing4,
    ], // Replace or extend with actual image references
    alt: "Custom Clothing Website Project Image",
    live: "https://lnkd.in/gHDN9gjp", // Live site link
    video: "https://youtu.be/xqhKaIZ9VRo", // Add demo video link if available
    repo: "https://github.com/Abhishek-Khot/clothing-frontend", // GitHub link if public
    desc: `
🚀 Just wrapped up a freelance project - a dedicated clothing website built for a local apparel business!

🧩 The system includes two key modules:
1. 🛠️ Admin Dashboard: Multi-admin support to add/manage clothing items securely  
2. 🛍️ Main Website: Customer-facing storefront that dynamically displays all clothing items  

🔧 This dual-module architecture was tailored to the client’s workflow — offering full inventory control while delivering a clean, responsive user interface.

📱 Fully responsive design optimized for mobile.  
🎨 Initial design from Figma — later enhanced for better UI/UX: [https://lnkd.in/geazHzrd]  
⚡ Migrated to Next.js for superior rendering and animation performance  

🛠 Tech Stack:
- Frontend: Next.js  
- Backend: Node.js (Express.js)  
- Database: MongoDB  
- Image Storage: Cloudinary  
- Hosting: Render  

💡 Key Learnings:
- Navigated CORS issues with API integration across modules  
- Leveraged Hopscotch for rapid API testing  
- Deepened skills with Chrome DevTools Network tab  
- End-to-end full stack integration & Server-Side Rendering (SSR)  

📌 Grateful for the opportunity to build something meaningful — refining it further based on ongoing client feedback!
  `,
  },
  {
    title: "🚨 Crisis Detection & Response System",
    category: "Gen AI",
    download: null,
    images: [
      images.crisis1,
      // images.crisis2,
      // images.crisis3,
      // images.crisis4,
      // images.crisis5,
      // images.crisis6,
      // images.crisis7,
      // images.crisis8,
    ], // Replace with actual images if available
    alt: "Crisis Response App Project Image",
    live: null,
    video: null, // Add demo video link if any
    repo: null, // GitHub link if public
    desc: `
🔹 Project: Crisis Detection & Response System  
📱 A full-stack emergency platform combining mobile tech with Bluetooth Mesh Communication — designed for remote or risky zones like mines, forests, or mountainous regions.

🛰️ Mesh Network Communication  
Even with no internet, devices connect peer-to-peer within ~600m range. With relays, coverage can stretch up to 1200m+, creating a dynamic mesh (e.g., Device 1 ➡️ 2 ➡️ 3).

🗣️ Voice-Triggered Alerts in 3 Languages  
Crisis messages are voice-broadcasted in English, Kannada, and Marathi — ensuring accessibility for local communities.

🧠 AI Medical Agent  
Users can interact with an AI assistant for emergency help (like bone fractures) while waiting for real responders.

🌦️ Weather-Integrated Risk Context  
7-day weather forecasts integrated to anticipate crises. (e.g., "Belagavi: Cloudy all week with potential floods ☔")

⚠️ AI Crisis Segregator + Superadmin Dashboard  
AI automatically categorizes incidents. A superadmin validates and dispatches them to nearby responder groups.

👮‍♂️ Community Admin System  
Each region has admins managing volunteers, tracking their response metrics, and rewarding top performers.

🗺️ Live Map + Google Maps Integration  
All alerts and locations are visualized in real time, helping teams act with full spatial awareness.

🎯 YOLOv8-Powered Detection + Leaflet Maps  
Our trained model detects visual cues of crises (e.g., landslides) in real-time, draws bounding boxes, and marks them on Leaflet-powered maps for immediate actionability.

This hackathon project was a wild ride — blending hardware, AI, and software into a system that's actually deployable in the field. Super proud of what we built as a team!
  `,
  },
  {
    title: "🌍 SmartTrack - Portfolio Website ",
    category: "Web Development",
    download: null,
    images: [
      images.port1,
      images.port2,
      images.port3,
      images.port4,
      images.port5,
      images.port6,
      images.port7,
      images.port8,
      images.port9,
      images.port10,
      images.port11,
      images.port12,
      images.port13,
      images.port14,
      images.port15,
      images.port16,
      images.port17,
    ],
    alt: "Project image",
    live: null,
    video: null,
    repo: "https://github.com/Abhishek-Khot/EasyBytes",
    desc: ` 

SmartTrack is a dynamic portfolio website designed to showcase projects, skills, and achievements with an intuitive and interactive interface. It features CMS integration for effortless content updates, ensuring a professional and engaging online presence.  

 💻 Tech Stack:  

- Frontend: HTML, CSS, JavaScript, EJS  
- Backend: Node.js, Express.js  
- Database: MongoDB (Hosted on Render)  
- Authentication: JWT (JSON Web Token) for secure login  
- Hosting & Deployment: Hosted on Render for scalability and reliability  

 ✨ Features:  

1. Project Showcase: Display projects with descriptions, images, and live links  
2. Skills & Experience: Highlight technical skills, certifications, and work experience  
3. Blog Section: Share articles, experiences, and tech insights  
4. Contact Form: Allow visitors to connect via email  
5. CMS Integration: Easily update portfolio content without coding  
6. Secure Authentication: JWT-based authentication for secure access  
7. Responsive Design: Fully optimized for mobile, tablet, and desktop  
8. SEO Optimized: Improved search engine visibility  
`,
  },
  {
    title: " Service Race - On Demand Service Booking App",
    category: "Web Development",
    download: null,
    images: [
      images.ser1,
      images.ser2,
      images.ser3,
      images.ser4,
      images.ser5,
      images.ser6,
      images.ser7,
      images.ser8,
      images.ser9,
      images.ser10,
      images.ser11,
      images.ser12,
      images.ser13,
      images.ser14,
      images.ser15,
      images.ser16,
    ],
    alt: "Project image",
    live: "https://service-race-platform.onrender.com/",
    video: null,
    repo: "https://github.com/Abhishek-Khot/ServiceRace-GIT",
    desc: ` 🏎 Service Race - On-Demand Service Booking App  
  
  Service Race is a fast and reliable on-demand service booking application designed to connect users with professional service providers for home services, automobile repairs, plumbing, painting, cleaning, and consultancy. With an intuitive interface and AI-powered recommendations, users can effortlessly find and book the best service providers in their area.  
  
  💻 Tech Stack:  
  
  - Frontend: React, Material UI  
  - Backend: Node.js, Express.js  
  - Database: MongoDB  
  - Authentication: JWT Authentication  
  - AI & ML: Gen AI-based service recommendations  
  - Image Storage: Cloudinary  
  - Payment Gateway: Razorpay  
  - Maps & Tracking: Leaflet.js for real-time order tracking  
  - Version Control: Git and GitHub  
  
  ✨ Features:  
  
  1. Instant Service Booking: Users can book services with a few clicks  
  2. Smart Recommendations: AI-powered suggestions based on user preferences and past bookings  
  3. Live Tracking: Real-time service provider location tracking with Leaflet.js  
  4. Secure Payments: Razorpay integration for hassle-free transactions  
  5. User Ratings & Reviews: Transparent feedback system for quality assurance  
  6. Responsive Design: Optimized for mobile, tablet, and desktop  
  7. Multi-Service Support: Book services for home repairs, automobiles, plumbing, painting, and more  
  8. Service Provider Dashboard: Manage bookings, schedules, and earnings easily  
  `,
  },
  {
    title: "🚀 Evalence",
    category: "Frontend Development",
    download: null,
    images: [
      images.dsa1,
      images.dsa2,
      images.dsa3,
      images.dsa4,
      images.dsa5,
      images.dsa6,
      images.dsa7,
      images.dsa8,
      images.dsa9,
    ],
    alt: "DSA Visualization Project image",
    live: "https://evalence-visualize.onrender.com/",
    video: null,
    repo: "https://github.com/Abhishek-Khot/comp-dsa-visualize",
    desc: ` 
    
    📊 Evalence - Interactive DSA Visualization Platform  
    
    Evalence is an engaging web application designed to visualize Data Structures and Algorithms with a special focus on sorting algorithm race comparisons. The platform helps users understand complex DSA concepts through interactive animations and real-time visualizations.  
    
    💻 Tech Stack:  
    
    - Frontend: React.js  
    - Visualization: Custom animation framework  
    - Styling: CSS for responsive design  
    - Deployment: Render  
    - Version Control: Git and GitHub  
    
    ✨ Key Features:  
    
    1. Sorting Algorithm Race: Visual comparison of different sorting techniques  
    2. Interactive DSA Visualizations: Step-by-step animations of algorithms  
    3. Educational Tool: Helps students grasp complex concepts visually  
    4. Responsive Design: Accessible across various devices  
    5. Customizable Speed: Control animation speed for better understanding  
    
    `,
  },

  {
    title: "Campus Connect - Resource Finder Website",
    category: "Web Development",
    download: null,
    images: [
      images.campus1,
      images.campus2,
      images.campus3,
      images.campus4,
      images.campus5,
      images.campus6,
      images.campus7,
      images.campus8,
      images.campus9,
      images.campus10,
      images.campus11,
      images.campus12,
      images.campus13,
      images.campus14,
    ],
    alt: "Project image",
    live: null,
    video: null,
    repo: "https://github.com/Abhishek-Khot/Campus-Connect-Resource-Finder-Website",
    desc: `🌍 Campus Connect - Student Resource Finder  

Campus Connect is a full-stack web platform designed to help students find essential resources like PGs, mess services, stationery, and nearby hospitals based on their selected college. With a user-friendly interface and real-time updates, it simplifies student life by offering easy access to accommodation, food, and essential services.  

💻 Tech Stack:  

- Frontend: HTML, CSS, JavaScript, EJS  
- Backend: Node.js, Express.js  
- Database: SQL  
- Payment Gateway: Razorpay  
- Authentication: Passport.js  

✨ Features:  

1. PG Finder: Search and compare PGs based on cost, distance, and amenities  
2. Mess Services: View daily updated menus and choose the best mess  
3. Stationery & Essentials: Find nearby stationery shops and essential student services  
4. Hospital & Healthcare: Locate nearby hospitals and check available services  
5. PG Owner Dashboard: PG owners can list and manage their accommodations  
6. Admin Panel: Manage mess menu updates and approve listings  
7. Secure Payments: Razorpay integration for PG pre-registration  
8. Responsive Design: Optimized for mobile, tablet, and desktop  
9. User Authentication: Secure login and personalized dashboard  
`,
  },
  {
    title: "Smart Recruitment System",
    category: "Frontend Development",
    download: null,
    images: [
      images.smart1,
      images.smart2,
      images.smart3,
      images.smart4,
      images.smart5,
      images.smart6,
      images.smart7,
      images.smart8,
      images.smart9,
    ],
    alt: "Project image",
    live: "https://v0-open-in-v0-two-phi.vercel.app/",
    video: null,
    repo: null,
    desc: "Ongoing Project",
  },
  {
    title: "Weather App",
    category: "Frontend Development",
    download: null,
    images: [images.weather1, images.weather2],
    alt: "Project image",
    live: null,
    video: null,
    repo: "https://github.com/Abhishek-Khot/React-Main-Project-Sigma",
    desc: ` 🌤 Weather App - Real Time Weather App  
      
      Weather App is a sleek and responsive weather application built with React that provides real-time weather updates for any location worldwide. With an intuitive UI and dynamic weather visuals, users can quickly check temperature, humidity, wind speed, and forecast details.  
      
      💻 Tech Stack:  
      
      - Frontend: React, Material UI  
      - State Management: React Context API  
      - API Integration: OpenWeather API  
      - Version Control: Git and GitHub  
      
      ✨ Features:  
      
      1. Live Weather Updates: Get current temperature, humidity, wind speed, and weather conditions  
      2. Search by Location: Enter a city name or use geolocation to fetch weather data  
      3. 5-Day Forecast: View upcoming weather predictions with detailed charts  
      4. Dynamic UI: Weather-based backgrounds and animations for better user experience  
      5. Responsive Design: Fully optimized for mobile, tablet, and desktop  
      6. Unit Conversion: Toggle between Celsius and Fahrenheit  
      `,
  },

  {
    title: "Slider Project",
    category: "Frontend Development",
    download: null,
    images: [images.slider2, images.slider1],
    alt: "Project image",
    live: null,
    video: null,
    repo: "https://github.com/Abhishek-Khot/Slider-Project",
    desc: ` 🎚 Slider Bar - First Project in Engineering  

The Slider Bar was the first project built during the second year of engineering, using only HTML and CSS. It was a simple yet effective interactive UI component that allowed users to adjust values by moving a slider.  

💻 Tech Stack:  

- HTML: Structure of the slider  
- CSS: Styling and smooth sliding effects  

✨ Features:  

1. Basic Sliding Mechanism: Simple UI for selecting values  
2. Custom Styling: Styled with CSS for a visually appealing look  
3. No JavaScript Dependency: Fully functional using only HTML and CSS  
4. Responsive Design: Adaptable to different screen sizes  
5. Beginner-Friendly: A foundational project to understand web UI elements  `,
  },
  {
    title: "🔥 VibeWave",
    category: "Frontend Development",
    download: null,
    images: [images.spot1, images.spot2],
    alt: "Project image",
    live: null,
    video: null,
    repo: null,
    desc: ` 
    
    🎵 VibeWave - A Sleek Music Streaming UI  
    
    VibeWave is a visually appealing and fully responsive music streaming website designed using only HTML and CSS. It replicates the look and feel of popular music platforms, providing an immersive user experience with elegant design elements and smooth animations.  
    
    💻 Tech Stack:  
    
    - Frontend: HTML, CSS  
    - Styling: CSS Flexbox & Grid for layout   
    - Version Control: Git and GitHub  
    
    ✨ Features:  
    
    1. Modern UI: A stylish and user-friendly music player interface  
    2. Responsive Design: Works seamlessly on mobile, tablet, and desktop  
    3. Hover Effects & Animations: Smooth transitions for a dynamic feel  
    `,
  },

  {
    title: "Simon Says",
    category: "Frontend Development",
    download: null,
    images: [images.sim1, images.sim2],
    alt: "Project image",
    live: "https://inquisitive-pastelito-9a4887.netlify.app/",
    video: null,
    repo: "https://github.com/Abhishek-Khot/Simon-Says",
    desc: "This is a classic Simon Says game I built while learning HTML, CSS, and JavaScript. It challenges players to memorize and repeat a sequence of colors that gets progressively longer with each round. The game tests memory and reflexes, providing a fun and interactive experience.",
  },
];
