import React, { useEffect } from 'react'
import {
    HomeIcon,
    MagnifyingGlassIcon, 
    BuildingLibraryIcon, 
    HeartIcon,
    RssIcon,
    PlusCircleIcon
} from '@heroicons/react/24/solid';
import { signOut, useSession } from "next-auth/react"

function Sidebar() {
    const { data: session, status} = useSession();
    
  

  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
        <div className="space-y-4">
            <button className="flex items-center space-x-2 hover:text-white" onClick={() => signOut()}>
                <HomeIcon className='h-6 w-6'/>
                <p>Logout</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white" >
                <HomeIcon className='h-6 w-6'/>
                <p>Home</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <MagnifyingGlassIcon className='h-6 w-6'/>
                <p>Search</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <BuildingLibraryIcon className='h-6 w-6'/>
                <p>Your Library</p>
            </button>
          <hr  className="border0t0[0.1px] border-gray-900"/>

            <button className="flex items-center space-x-2 hover:text-white">
                <PlusCircleIcon className='h-6 w-6'/>
                <p>Create Playlist</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <HeartIcon className='h-6 w-6'/>
                <p>Liked Songs</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <RssIcon className='h-6 w-6'/>
                <p>Your episodes</p>
            </button>
          <hr  className="border0t0[0.1px] border-gray-900"/>
          {/* Playlists... */}

          <p className="cursor-pointer hover:text-white">
            Playlist name...
          </p>
          <p className="cursor-pointer hover:text-white">
            Playlist name...
          </p>
          <p className="cursor-pointer hover:text-white">
            Playlist name...
          </p>
          <p className="cursor-pointer hover:text-white">
            Playlist name...
          </p>
          <p className="cursor-pointer hover:text-white">
            Playlist name...
          </p>
          <p className="cursor-pointer hover:text-white">
            Playlist name...
          </p>
          <p className="cursor-pointer hover:text-white">
            Playlist name...
          </p>
          <p className="cursor-pointer hover:text-white">
            Playlist name...
          </p>
          <p className="cursor-pointer hover:text-white">
            Playlist name...
          </p>
          <p className="cursor-pointer hover:text-white">
            Playlist name...
          </p>
          <p className="cursor-pointer hover:text-white">
            Playlist name...
          </p>
          <p className="cursor-pointer hover:text-white">
            Playlist name...
          </p>
          
        </div>
    </div>
  )
}

export default Sidebar