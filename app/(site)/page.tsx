import { getProjects } from "@/sanity/sanity-utils";
import { log } from "console";
import Image from 'next/image'
import Link from "next/link";
import MainContent from "./main-content"

export default async function Home() {
  const projects = await getProjects()

  return( 
      <div>
        <h2 className="flex justify-center font-extrabold mt-5 bg-gradient-to-r from-green-400 via-yellow-500 to-red-600 bg-clip-text text-transparent text-7xl px-5">Black Moms Movement</h2>
        
        {/* main article grid */}
        <p className="flex justify-center font-extrabold px-5">All Moms are Super Heroes, Black Moms especially</p>
        <MainContent/>
        
        <h2 className="flex justify-center mt-10 font-extrabold bg-gradient-to-r from-green-400 via-yellow-500 to-red-600 bg-clip-text text-transparent text-3xl px-5">Information Playbooks</h2>
        <p className="flex justify-center font-extrabold ">
           Information is our first defense and our strongest tool for self-advocacy</p>
        
        {/* playbook grid */}
        <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
          {projects.map((projects) => projects.image && (
            
          <Link href={`/projects/${projects.slug}`} key={projects._id} className="border-2 border-gray-800 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
          <div className="flex justify-center mt-2 font-extrabold bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 bg-clip-text text-transparent ">
              {projects.name}
            </div>
            {projects.image && (
              <Image
                src={projects.image}
                alt={projects.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border"
              />
            )}
            
            
          </Link>
        )
        )}
        
      </div>
      </div>
  )
}    