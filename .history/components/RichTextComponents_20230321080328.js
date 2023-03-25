import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";

export const RichTextComponents = {
    image: ({value}) => {
        return (
            <div className="relative w-full h-[250px] w-[250px]">
                <Image
                    className="object-contain"
                    src={urlFor(value).url()}
                    alt="post blog image"
                    fill
                />
            </div>
        );
    },
    list: {
        bullet: ({ children }) => {
            <ul className="ml-10 py-5 space-y-5 list-disc">{children}</ul>
        },
        number: ({ children }) => {
            <ol className="mt-lg list-decimal">{children}</ol>
        },
    },
   
    block: {
        h1: ({ children }) => {
            <h1 className="text-4xl py-10 font-bold">{children}</h1>
        },
        h2: ({ children }) => {
            <h2 className="text-3xl py-10 font-bold">{children}</h2>
        },
        h3: ({ children }) => {
            <h3 className="text-2xl py-10 font-bold">{children}</h3>
        },
        h4: ({ children }) => {
            <h4 className="text-xl py-10 font-bold">{children}</h4>
        },

    } ,
}