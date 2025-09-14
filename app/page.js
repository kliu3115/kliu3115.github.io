import React from 'react';
import LayoutBase from './components/layoutbase.js';
import Link from 'next/link';
import Head from 'next/head';

const projectsData = [
  {
    title: 'Ramsey Games',
    slug: 'ramsey-games',
    imageSrc: '/images/ramsey_game.png',
    description: 'Research on optimal Ramsey Game strategy.',
    url: "https://github.com/yeefever/bocchi-desktop",
    tags: ['Game Theory', 'ML'],
    finished: false,
  },
  {
    title: 'Gold Price Prediction',
    slug: 'gold-price-prediction',
    imageSrc: '/images/gold.png',
    description: 'Model trained to predict gold prices with 98% accuracy.',
    url: "https://github.com/yeefever/bocchi-desktop",
    tags: ['ML'],
    finished: true,
  },  
  {
    title: 'PHEX AI',
    slug: 'phex-ai',
    imageSrc: '/images/phex-ai.jpg',
    description: 'AI powered pigment mixing tool.',
    url: "https://github.com/yeefever/bocchi-desktop",
    tags: ['AI', 'Full Stack'],
    finished: true,
  },
  {
    title: 'Quiz Corrections',
    slug: 'quiz-corrections',
    imageSrc: '/images/quiz_corrections.png',
    description: 'Full stack app for learning through quiz review.',
    url: "https://github.com/yeefever/bocchi-desktop",
    tags: ['React.js', 'Node.js', 'SQL'],
    finished: true,
  },
];

//projectsData.sort((a, b) => a.title.localeCompare(b.title));

const Home = () => {
  return (
    <LayoutBase>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
        <link rel="manifest" href="/icon/site.webmanifest" />
        <link rel="icon" href="icon/favicon.ico" />
      </Head>
      {/* Intro Section */}
      <div className="flex flex-col items-center justify-center bg-gray-100 h-60">
        <div className="text-3xl font-bold mb-4 text-black">Hi, I'm Kelly Liu</div>
        <div className="text-lg text-center mb-6 text-black">
          I am a student at Yale University graduating in 2029 and pursuing degrees in Math and Computer Science. My interests and experiences span machine learning, financial modeling and full stack web development for educational technologies and other tools. Outside academics, I have been dancing for the past 15 years and am an avid poker player. 
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-gray-200 py-8">
        <h2 className="text-2xl font-bold text-center text-black">Projects</h2>
        <h2 className="font-bold text-center mb-6 text-black">Click each tab to learn more</h2>
        <div className="grid grid-cols-3 gap-4 px-4">
          {projectsData.map((project, index) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} passHref legacyBehavior>
              <a className="block">
                <div className="bg-white rounded p-4 shadow cursor-pointer flex flex-col justify-center items-center">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="mb-2 w-full h-32 object-contain"
                  />
                  <h3 className="text-lg font-semibold text-center mb-1 text-black">{project.title}</h3>
                  <p className="text-sm text-center text-black">{project.description}</p>
                  <div className="mt-2 flex flex-wrap justify-center">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center bg-slate-500 text-white text-xs px-3 py-1 rounded-full mr-2"
                      >
                        {tag}
                      </span>
                    ))}
                    {!project.finished && (
                      <span
                        className="inline-flex items-center bg-red-500 text-white text-xs px-3 py-1 rounded-full"
                      >
                        In Progress
                      </span>
                    )}
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </LayoutBase>
  );
};

export default Home;
