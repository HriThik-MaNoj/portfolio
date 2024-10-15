import React from 'react';

const skills = [
  { name: 'Network Security', level: 90 },
  { name: 'Penetration Testing', level: 85 },
  { name: 'Python', level: 95 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Linux Administration', level: 88 },
  { name: 'Blockchain', level: 70 },
  { name: 'Smart Contracts', level: 65 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="font-semibold">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <div
                  className="h-2.5 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
                  style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;