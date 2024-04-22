import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from 'next/image';

type Props = {
    params: {project: string};
};

export default async function Project({params}: Props){
    const slug = params.project;
    const project = await getProject(slug);

    return (
    <div className="max-w-3x1 mx-auto">
        <header className="flex justify-center">

        
        <h1 className="mt-2 font-extrabold bg-gradient-to-r from-green-400 via-yellow-500 to-red-600 bg-clip-text text-transparent text-7xl">
            {project.name}
        </h1>

        {/* <a href={project.url}
            title="View Project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
        >
            View Project
        </a> */}

        </header>
        {/*image here*/}
        <div className="flex justify-center  mt-5">{project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={500}
              height={300}
              className="flex justify-center object-cover rounded-xl border-2 border-gray-700"
            />
           )}</div>
         {/*content here*/}

         <div className="flex justify-center text-lg text-gray-700 mt-5">
            <PortableText value={project.content}/>
        </div>
    </div>
       

    )
}