// backend/data.js
const educationHistory = [
  {
    id: 1,
    period: '2023 - Now',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Informatika'
  },

];

const skills = [
  {
    name: 'JavaScript',
    level: 'intermediate',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
  },
  {
    name: 'Vue.js',
    level: 'proficient',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg'
  },
  {
    name: 'Laravel',
    level: 'proficient',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg'
  },
  {
    name: 'Express.js',
    level: 'intermediate',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png'
  },
  {
    name: 'Node.js',
    level: 'intermediate',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
  },
  {
    name: 'Tailwind CSS',
    level: 'proficient',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'
  },
  {
    name: 'Bootstrap CSS',
    level: 'proficient',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg'
  },
  {
    name: 'HTML5',
    level: 'proficient',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
  },
  {
    name: 'CSS3',
    level: 'proficient',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
  },
  {
    name: 'C#',
    level: 'intermediate',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png'
  },
  {
    name: 'MYSQL',
    level: 'intermediate',
    image: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg'
  },
  {
    name: 'Git & GitHub',
    level: 'proficient',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
  }
];

const projects = [
  {
    title: 'Website Lucien Avenue',
    image: 'http://localhost:3000/images/myP1.png', // Contoh gambar dari Unsplash
    description: 'Shoe store website that provides various kinds of shoes',
    tech: ['Vue.js', 'Laravel', 'Node.js'],
    link: 'https://github.com/GITikhsan/LUCIEN-AVENUE-FRONTEND.git',
    link2: 'https://github.com/GITikhsan/LUCIEN-AVENUE-BACKEND.git' 
  },
   {
    title: 'Simple Hotel management system',
    image: 'http://localhost:3000/images/myP2.png', // Contoh gambar dari Unsplash
    description: 'Hotel management is the process of managing hotel operations to ensure they run efficiently and profitably. It covers aspects such as room reservations, guest services, room management, and employee management.',
    tech: ['c#','windows forms app','.net framework','mysql'],
    link: 'https://github.com/GITikhsan/SimpleHotelManagement.git', 
    link2: 'https://github.com/GITikhsan/SimpleHotelManagement.git' 
  },
 
];
module.exports = { educationHistory, skills, projects };