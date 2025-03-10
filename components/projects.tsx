"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    {
      title: "Field Equip",
      description:
        "FieldEquip digital solutions allowed our organization to automate and digitalize manual processes, which resulted in a remarkable increase in the overall operational efficiency.",
      image: "/fieldequip.png?height=400&width=700",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "ZAZU",
      description:
        "Stop swiping, start dating! With Zazu, meet first and chat later—because a date is worth a thousand texts.",
      image: "/zazu.jpg?height=400&width=600",
      technologies: ["React-Native", "Firebase", "PHP", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Preplearn Study App",
      description:
        "Preplearn Study App is an educational platform for accounting students, offering encrypted study videos and materials. The app is sold exclusively offline to users",
      image: "/preplearn.png?height=400&width=600",
      technologies: ["React", "NodeJS", "Express", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Unfoldu Online Solutions",
      description:
        "UnfoldU is an educational-based digital learning company providing innovative learning solutions. It offers free basic knowledge online and advanced courses at nominal charges.",
      image: "/UnfoldU.png?height=400&width=600",
      technologies: ["React-Native", "Firebase", "PHP", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Kids Learning App",
      description:
        "An interactive and fun learning platform for kids, featuring engaging activities in alphabets, numbers, math, and quizzes!",
      image: "/kidsLearningapp.png?height=400&width=600",
      technologies: ["React-Native", "ReactJS", "PHP", "Expo", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Tic tac toe",
      description:
        "Tic Tac Toy is a fun and interactive game where players take turns placing Xs and Os on a grid to form a winning pattern. It enhances strategic thinking and can be played solo or with friends",
      image: "/tictaktoe.jpeg?height=400&width=600",
      technologies: ["Expo", "React-Native"],
      liveUrl: "#",
      githubUrl: "#",
    },

    
  ];

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-muted/40 dark:bg-muted/10"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My Projects
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Here are some of my recent projects. Each one was built to solve a
            specific problem or explore new technologies.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden h-full group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project?.liveUrl != "#" && (
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" asChild>
                        <Link
                          href={project?.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live app
                        </Link>
                      </Button>
                      {project?.githubUrl != "#" && (
                        <Button size="sm" variant="outline" asChild>
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Button size="lg" asChild>
            <Link
              href="https://github.com/satishkashyap0423"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More on GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
