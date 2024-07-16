"use client";
import Image from "next/image";
import Avatar from "./Avatar";
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function SidebarHeader({ avatarURL, userName = 'Birusha' }: { avatarURL: string, userName: string }) {
   const router = useRouter();
   // bg-[#8098F9]
   const useSignout = () => {

      router.push('/');

   }
   return (
      <header className="p-4 border-b border-gray-300 flex justify-between items-center">
         <Link href={'/home'}>
            <h1 className="text-2xl font-semibold text-blue-400 hover:text-blue-500">Inbox</h1>
         </Link>
         <div className="flex items-center gap-3">
            <Link href={'/home/profile'} className="flex items-center gap-3">
               <div className={`w-10 h-10 rounded-full bg-[#8098F9] text-gray-50 overflow-hidden hover:cursor-pointer`}>
                  {avatarURL ? (
                     <Image src={avatarURL} alt="Avatar" layout="fill" className={`w-10 h-10`} />
                  ) : (
                     <Avatar />
                  )}
               </div>
               <p>Birusha</p>

            </Link>
            <Button
               title="Signout"
               className="bg-red-400 hover:bg-red-500"
               handleClick={useSignout}
            />
         </div>
      </header>
   );
}