"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BubblyBackground } from "./components/BubblyBackground";
import { applicationList } from "./locales/application";
import { tabs } from "./locales/tabList";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 p-8 relative'>
      <BubblyBackground />
      <Card className='max-w-4xl mx-auto bg-white/90 backdrop-blur-md overflow-hidden relative z-10'>
        <CardContent className='p-6'>
          <motion.h1
            className='text-4xl font-bold text-center mb-6 text-blue-600'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Your Name's Portfolio
          </motion.h1>

          <motion.div
            className='mb-6 p-4 bg-blue-100 rounded-lg text-blue-800 text-center'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-2xl font-semibold mb-2'>
              Welcome to My Creative Space!
            </h2>
            <p>
              Explore my projects, skills, and experiences in web development
              and design.
            </p>
          </motion.div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className='w-full'
          >
            <TabsList className='grid w-full grid-cols-4 gap-4'>
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className='flex items-center justify-center p-2 bg-blue-100 hover:bg-blue-200 text-blue-600'
                >
                  <tab.icon className='w-5 h-5 mr-2' />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContent value='about' className='mt-6'>
                  <h2 className='text-2xl font-semibold mb-4 text-blue-600'>
                    About Me
                  </h2>
                  <p className='text-gray-700'>
                    こんにちは！私は[あなたの名前]です。クリエイティブで革新的なウェブ開発に情熱を注いでいます。
                    最新のテクノロジーを活用し、ユーザーフレンドリーで魅力的なウェブアプリケーションを作ることが私の目標です。
                    常に新しいチャレンジを求め、技術の最前線に立ち続けることを心がけています。
                  </p>
                </TabsContent>

                <TabsContent value='skills' className='mt-6'>
                  <h2 className='text-2xl font-semibold mb-4 text-blue-600'>
                    Skills & Tech Stack
                  </h2>
                  <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                    {[
                      "TypeScript",
                      "React",
                      "Next.js",
                      "Kotlin",
                      "Ruby on Rails",
                      "",
                    ].map((skill) => (
                      <motion.div
                        key={skill}
                        className='bg-blue-100 rounded-full px-4 py-2 text-center text-blue-600'
                        whileHover={{ scale: 1.05, backgroundColor: "#93C5FD" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value='projects' className='mt-6'>
                  <h2 className='text-2xl font-semibold mb-4 text-blue-600'>
                    Projects
                  </h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {applicationList.map((project, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Card className='overflow-hidden'>
                          <img
                            src={`/placeholder.svg?height=150&width=300&text=${project.title}`}
                            alt={project.title}
                            className='w-full h-40 object-cover'
                          />
                          <CardContent className='p-4'>
                            <h3 className='font-semibold mb-2'>
                              {project.title}
                            </h3>
                            <p className='text-sm text-gray-600 mb-4'>
                              {project.desc}
                            </p>
                            <Button
                              variant='outline'
                              size='sm'
                              className='bg-blue-500 text-white hover:bg-blue-600'
                            >
                              詳細を見る{" "}
                              <ChevronRight className='w-4 h-4 ml-2' />
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value='experience' className='mt-6'>
                  <h2 className='text-2xl font-semibold mb-4 text-blue-600'>
                    Experience & Education
                  </h2>
                  <ul className='space-y-4'>
                    <motion.li
                      className='bg-blue-50 p-4 rounded-lg'
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className='font-semibold'>テックカンパニーX</h3>
                      <p className='text-sm text-gray-600'>
                        フロントエンドデベロッパー • 2022 - 現在
                      </p>
                      <p className='mt-2 text-gray-700'>
                        最新のウェブテクノロジーを使用した大規模Webアプリケーションの開発と保守。
                      </p>
                    </motion.li>
                    <motion.li
                      className='bg-blue-50 p-4 rounded-lg'
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className='font-semibold'>Y大学</h3>
                      <p className='text-sm text-gray-600'>
                        情報工学学士 • 2018 - 2022
                      </p>
                      <p className='mt-2 text-gray-700'>
                        コンピュータサイエンスと情報システムの基礎を学び、複数のプロジェクトに参加。
                      </p>
                    </motion.li>
                  </ul>
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
