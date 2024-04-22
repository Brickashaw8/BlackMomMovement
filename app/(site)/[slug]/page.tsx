import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
    params: {slug:string}
}

export default async function Page({params}: Props) {
    const page = await getPage(params.slug);

    return(
        <div>
            <h1 className="flex justify-center mt-2 font-extrabold bg-gradient-to-r from-green-400 via-yellow-500 to-red-600 bg-clip-text text-transparent text-7xl font-extrabold">
                {page.title}
            </h1>
        
        
            

        {page.title === 'Survey'?(
            <div className="flex justify-center">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScWxcqkr9mErakw1eXU4TbHYHskqs6fiY1tXH-KRt3-neMtyA/viewform?embedded=true" width="1200" height="1200" ></iframe>
            </div>
        ):(
            <div className="text-lg text-gray-700 mt-10">
                <PortableText value={page.content}/>
                </div>
        )}
        </div>
        
        
    )
}