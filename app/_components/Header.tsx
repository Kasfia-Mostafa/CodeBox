import Image from "next/image";
import logo from "../../assets/public/logo.png";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const courses = [
  {
    id: 1,
    name: 'HTML',
    desc: 'Learn the fundamentals of HTML and build the structure of modern web pages.',
    path: '/course/1/detail'
  },
  {
    id: 2,
    name: 'CSS',
    desc: 'Master CSS to style and design responsive, visually appealing web layouts.',
    path: '/course/2/detail'
  },
  {
    id: 3,
    name: 'React',
    desc: 'Build dynamic and interactive web applications using the React JavaScript library.',
    path: '/course/3/detail'
  },
  {
    id: 4,
    name: 'React Advanced',
    desc: 'Deep dive into advanced React concepts including hooks, state management, performance optimization, and architectural patterns.',
    path: '/course/4/detail'
  },
  {
    id: 5,
    name: 'Python',
    desc: 'Learn Python programming from basics to intermediate level, covering logic building, functions, and real-world applications.',
    path: '/course/5/detail'
  },
  {
    id: 6,
    name: 'Python Advanced',
    desc: 'Master advanced Python concepts such as OOP, modules, APIs, data processing, and automation.',
    path: '/course/6/detail'
  },
  {
    id: 7,
    name: 'Generative AI',
    desc: 'Explore prompt engineering, LLMs, embeddings, image generation, and build GenAI-powered applications.',
    path: '/course/7/detail'
  },
  {
    id: 8,
    name: 'Machine Learning',
    desc: 'Understand ML concepts, algorithms, data preprocessing, model training, evaluation, and deployment.',
    path: '/course/8/detail'
  },
  {
    id: 9,
    name: 'JavaScript',
    desc: 'Learn core JavaScript concepts, asynchronous programming, DOM manipulation, and modern ES6+ features.',
    path: '/course/9/detail'
  }
];



const Header = () => {
  return (
    <div className="p-4 max-w-7xl flex justify-between items-center w-full mx-auto">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <Image src={logo} alt="Logo" width={40} height={40} />
        <h2 className="font-game font-bold text-3xl">Code Box</h2>
      </div>
      {/* Navbar */}
      <NavigationMenu>
        <NavigationMenuList className="gap-4">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-100 lg:w-125 lg:grid-cols-2">
                {courses.map(course => (
                  <li key={course.id}>
                    <NavigationMenuLink asChild>
                      <Link href={course.path}><h1 className="font-medium">{course.name}</h1> <p className="text-sm text-gray-500">{course.desc}</p></Link>

                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuLink>
            <NavigationMenuItem>
              <Link href={"/projects"}>Projects</Link>
            </NavigationMenuItem>
          </NavigationMenuLink>
          <NavigationMenuLink>
            <NavigationMenuItem>
              <Link href={"/pricing"}>Pricing</Link>
            </NavigationMenuItem>
          </NavigationMenuLink>
          <NavigationMenuLink>
            <NavigationMenuItem>
              <Link href={"/contactus"}>Contact Us</Link>
            </NavigationMenuItem>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      {/* Sign In / Sign Up */}
      <Button className="font-game text-2xl" variant="pixel">
        Sign Up
      </Button>
    </div>
  );
};

export default Header;
