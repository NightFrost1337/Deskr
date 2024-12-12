'use client'

import React from 'react';
import { useAuth } from "@/lib/hooks/useAuth";
import BottomNav from "@/components/nav/BottomNav";
import { Search, Settings, Smartphone, Plus, Monitor, Radio, ArrowRight } from 'lucide-react'

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="h-screen bg-gray-50">
      <header className="p-4 bg-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <Smartphone className="w-4 h-4 text-blue-500" />
          </div>
          <div>
            <h1 className="font-medium">{user.username}</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Managed Devices: 1</span>
              <span className="px-2 py-0.5 text-xs bg-blue-500 text-white rounded">Free</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-6 border-b">
          <button className="pb-2 text-blue-500 border-b-2 border-blue-500">
            My Device
          </button>
          <button className="pb-2 text-gray-500">
            Recents
          </button>
        </div>
      </header>

      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg outline-none"
          />
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-sm flex items-center">
          <div className="w-10 h-16 bg-gray-100 rounded flex items-center justify-center">
            <Smartphone className="w-6 h-6 text-gray-400" />
          </div>
          <div className="flex-1 ml-4">
            <h3 className="font-medium">iPhone (This device)</h3>
          </div>
          <ArrowRight className="w-5 h-5 text-blue-500" />
        </div>

        <button className="w-full p-4 bg-white rounded-lg shadow-sm flex items-center">
          <div className="w-10 h-16 bg-gray-100 rounded flex items-center justify-center">
            <Plus className="w-6 h-6 text-gray-400" />
          </div>
          <div className="flex-1 ml-4">
            <h3 className="font-medium text-left">Add Device</h3>
          </div>
          <Plus className="w-5 h-5 text-blue-500" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 mt-8">
        <div className="w-32 h-32 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
          <Monitor className="w-16 h-16 text-blue-500" />
        </div>
        <p className="text-center text-gray-500">Easy connect to device</p>
      </div>

      <BottomNav />
    </div>
  )
}
