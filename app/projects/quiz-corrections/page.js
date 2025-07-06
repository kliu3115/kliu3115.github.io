import React from 'react';
import { useNavigation } from 'next/navigation';
import readFile from '../../../public/text/file_reader';
import LayoutBase from '../../components/layoutbase.js';

const Project = () => {
  const router = useNavigation;
  const filePath = 'public/text/quiz-corrections.txt';
  const desc1 = readFile(filePath);
  const projectData = {
    title: 'Quiz Corrections',
    explanation: null,
    tags: ['React.js', 'Node.js', 'SQL'],
  };

  return (
    <LayoutBase>
      <div className="min-h-screen bg-gray-100 p-8 flex">
        <div className="bg-white rounded p-6 shadow w-1/4 mr-16">
          <h2 className="text-3xl font-semibold mb-2">{projectData.title}</h2>
          <a
            href={'https://github.com/kliu3115/quiz-corrections'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 text-white bg-slate-500 border border-slate-500 rounded hover:bg-slate-600 hover:border-slate-600 mb-1"
          >
            COMPLETE
          </a> <br />
          <span className="text-2xl">{projectData.explanation}</span>
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

        <div className="mt-2 w-3/4">
          <div>
            <h3 className="text-3xl font-semibold mb-3">Demo:</h3>
            <div className="mb-2">
                <video controls width="800" height="360">
                    <source src="/recordings/quiz_corrections_fast.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
          </div>
        </div>
      </div>
    </LayoutBase>
  );
};


export default Project;
