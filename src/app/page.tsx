"use client";

import { useState } from "react";
import {
  Briefcase,
  Code,
  GraduationCap,
  Layers,
  ChevronRight,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillDetails, skills } from "./location/skills";
import { projects } from "./location/projects";
import { experiences } from "./location/experiences";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const BubblyBackground = () => {
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className='absolute rounded-full bg-[#1399CF] opacity-10 animate-float'
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

const SkillModal = ({
  skill,
  onClose,
}: {
  skill: string;
  onClose: () => void;
}) => {
  const details = skillDetails[skill] || {
    description: "このスキルの詳細情報はまだ追加されていません。",
    experience: "N/A",
    projects: [],
    level: "N/A",
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white p-6 rounded-lg max-w-md w-full'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-2xl font-bold text-[#084F8C]'>{skill}</h3>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700'
          >
            <X size={24} />
          </button>
        </div>
        <p className='text-gray-600 mb-4'>{details.description}</p>
        <div className='mb-4'>
          <strong className='text-[#1081C7]'>経験年数:</strong>{" "}
          {details.experience}
        </div>
        <div className='mb-4'>
          <strong className='text-[#1081C7]'>レベル:</strong> {details.level}
        </div>
        <div>
          <strong className='text-[#1081C7]'>関連プロジェクト:</strong>
          <ul className='list-disc list-inside'>
            {details.projects.map((project, index) => (
              <li key={index} className='text-gray-600'>
                {project}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const tabs = [
    { id: "about", label: "About Me", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Layers },
    { id: "experience", label: "Experience", icon: Briefcase },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#084F8C] via-[#1399CF] to-[#27D5E8] p-8 relative'>
      <BubblyBackground />
      <Card className='max-w-4xl mx-auto bg-white/90 backdrop-blur-md overflow-hidden relative z-10 shadow-lg'>
        <CardContent className='p-6'>
          <h1 className='text-4xl font-bold text-center mb-6 text-[#084F8C] animate-fade-in'>
            Portfolio
          </h1>
          <div className='mb-6 p-4 bg-[#1399CF]/10 rounded-lg text-[#084F8C] text-center animate-slide-up'>
            <Avatar className='mx-auto mb-4 w-32 h-32 border-4 border-[#1081C7] shadow-lg transition-transform duration-300 hover:scale-105'>
              <AvatarImage
                src='https://avatars.githubusercontent.com/u/109452865?v=4'
                alt='プロフィール写真'
                className='w-full h-full object-cover'
              />
            </Avatar>
            <h2 className='text-2xl font-semibold mb-2'>
              Welcome to My Creative Space
            </h2>
            <p className='text-[#1081C7]'>
              Explore my projects, skills, and experiences in web development
              and design.
            </p>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className='w-full'
          >
            <TabsList className='flex w-full p-1 bg-[#1399CF]/10 rounded-lg'>
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`
       flex-1 flex items-center justify-center p-3 rounded-lg
       transition-all duration-200
       data-[state=active]:bg-white data-[state=active]:shadow-sm
       data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#084F8C]
       data-[state=active]:text-[#1081C7]
     `}
                >
                  <tab.icon className='w-5 h-5 md:mr-2' />
                  <span className='hidden md:inline'>{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className='transition-all duration-300 ease-in-out'>
              <TabsContent value='about' className='animate-fade-in'>
                <h2 className='text-2xl font-semibold mb-4 text-[#084F8C]'>
                  About Me
                </h2>
                <p className='text-gray-700'>
                  Webエンジニアとして現場で培ったアクセシビリティー対応の知識と熱意を武器に、誰もが使いやすいデジタル体験を追求。
                  OSSコントリビューターとしても活躍する傍ら、弊社ではアクセシビリティーを専門に担当。
                  机上の学問にとどまらず、現場で培った洞察と熱意を持ち、具体的な課題解決に取り組んでいる。
                </p>
              </TabsContent>

              <TabsContent value='skills' className='animate-fade-in'>
                <h2 className='text-2xl font-semibold mb-4 text-[#084F8C]'>
                  Skills & Tech Stack
                </h2>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                  {skills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => setSelectedSkill(skill)}
                      className='bg-[#1399CF]/10 rounded-full px-4 py-2 text-center text-[#084F8C] transition-colors duration-200 hover:bg-[#1399CF]/20'
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value='projects' className='animate-fade-in'>
                <h2 className='text-2xl font-semibold mb-4 text-[#084F8C]'>
                  Projects
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className='transition-transform duration-200 hover:scale-105'
                    >
                      <Card className='overflow-hidden'>
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className='w-full h-40 object-cover'
                        />
                        <CardContent className='p-4'>
                          <h3 className='font-semibold mb-2 text-[#084F8C]'>
                            {project.title}
                          </h3>
                          <p className='text-sm text-gray-600 mb-4'>
                            {project.desc}
                          </p>
                          <Button
                            variant='outline'
                            size='sm'
                            className='bg-[#1081C7] text-white hover:bg-[#084F8C] transition-colors duration-200'
                          >
                            詳細を見る <ChevronRight className='w-4 h-4 ml-2' />
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value='experience' className='animate-fade-in'>
                <h2 className='text-2xl font-semibold mb-4 text-[#084F8C]'>
                  Experience & Education
                </h2>
                <ul className='space-y-4'>
                  {experiences.map((exp, index) => (
                    <li
                      key={index}
                      className='bg-[#1399CF]/10 p-4 rounded-lg transition-transform duration-200 hover:scale-102'
                    >
                      <h3 className='font-semibold text-[#084F8C]'>
                        {exp.title}
                      </h3>
                      <p className='text-sm text-gray-600'>
                        {exp.position} • {exp.period}
                      </p>
                      <p className='mt-2 text-gray-700'>{exp.description}</p>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>

      {selectedSkill && (
        <SkillModal
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </div>
  );
}
