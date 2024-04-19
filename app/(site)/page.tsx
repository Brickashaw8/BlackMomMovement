import { getProjects } from "@/sanity/sanity-utils";
import { log } from "console";
import Image from 'next/image'
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects()
  console.log(projects)

  return( 


      <div>
        <h2 className="flex justify-center mt-24 font-bold text-gray-700 text-3xl px-5">Black Moms Movement</h2>
        
        {/* main article grid */}
        <p className="flex justify-center bg-gradient-to-r from-green-400 via-yellow-500 to-red-600 bg-clip-text text-transparent px-5">All Moms are Super Heroes</p>
        <h2 className="flex justify-center mt-24 font-bold text-gray-700 text-3xl px-5">Information Playbooks</h2>
        
        {/* playbook grid */}
        <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
          {projects.map((projects) => projects.image && (
            
          <Link href={`/projects/${projects.slug}`} key={projects._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
          <div className="flex justify-center mt-2 font-extrabold bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 bg-clip-text text-transparent ">
              {projects.name}
            </div>
            {projects.image && (
              <Image
                src={projects.image}
                alt={projects.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            
            
          </Link>
        )
        )}
        
      </div>
      </div>
  )
}    