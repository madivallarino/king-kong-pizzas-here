import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
          initial={{
            y: -100, 
            opacity: 0,
          }} 
          transition={{ duration: 1.2}}
          whileInView={{ opacity: 1, y: 0}}
          viewport={{ once: true}}
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src="https://media-exp1.licdn.com/dms/image/C4E0BAQEVMkpCw2CJRA/company-logo_200_200/0/1660576723514?e=1674691200&v=beta&t=yH2WX2nqg7u6zcKttsa9Le3EsueNgbrJDijZ4Ab9iSk"
          alt=""
        />
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Frontend Engineer Intern</h4>
            <p className="font-bold text-2xl mt-1">Above & Beyond Studios</p>
            <div className="flex space-x-2 my-2">
                <img 
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                  alt=""
                />
                 <img 
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                  alt=""
                />
                 <img 
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                  alt=""
                />
            </div>
            <p className="uppercase py-5 text-gray-300">Started work... -Ended...</p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>

            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard