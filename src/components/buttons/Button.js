import Link from 'next/link';
import { twMerge } from "tailwind-merge";

export default function Button({ btnText, className, link }) {


    const classes = twMerge(`text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800

        ${className ?? ""}
    `);
    return (
        <Link href={link} key={btnText} passHref>
            <button 
                className={classes}>
                    {btnText}
                </button>
        </Link>
    );
}
