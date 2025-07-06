import React from 'react';
import { useNavigation } from 'next/navigation';
import readFile from '../../../public/text/file_reader';
import LayoutBase from '../../components/layoutbase.js';

const Project = () => {
  const router = useNavigation;
  const filePath = 'public/text/ramsey-games.txt';
  const desc1 = readFile(filePath);
  const projectData = {
    title: 'Ramsey Games',
    explanation: null,
    tags: ['Game Theory', 'ML']
  };

  return (
    <LayoutBase>
      <div className="min-h-screen bg-gray-100 p-8 flex">
        <div className="bg-white rounded p-6 shadow w-1/4 mr-16">
          <h2 className="text-3xl font-semibold mb-2">{projectData.title}</h2>
          <a
            href={'https://github.com/kliu3115/'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 text-white bg-red-500 border border-red-500 rounded hover:bg-slate-600 hover:border-slate-600 mb-1"
          >
            IN PROGRESS
          </a>
          <p className="text-3xl">{projectData.explanation}</p>
          <div className="mt-6">
            {desc1}
          </div>
          <div className="mt-2 flex">
            {projectData.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="inline-flex items-center bg-slate-500 text-white text-xs px-3 py-1 rounded-full mr-2"
              >
                <span className="mr-1">{tag}</span>
                <span className="h-2 w-2 bg-white rounded-full"></span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-2 w-3/4 grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-3xl font-semibold mb-3">Ramsey Games Online:</h3>
            <a   className="text-blue-600 hover:underline" href="https://ramsey-game.vercel.app/">https://ramsey-game.vercel.app/</ a>
            {/*<img src={'/screenshots/mal_1.png'} alt="Screenshot 1" className="rounded-lg object-cover" />
            <h3 className="text-3xl font-semibold mb-3">TSNE plot of Mecha (green) in anime corpus.</h3>
            <p> Less valid since converting a 700+ d vector into 2d</p>
            <img src={'/screenshots/mal-3.png'} alt="Screenshot 1" className="rounded-lg object-cover" />*/}
          </div>
        </div>
      </div>
    </LayoutBase>
  );
};


export default Project;
