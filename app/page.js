import Image from 'next/image'
import Category from './components/Category'
import categoriesData from '@/json/Category.json'
export default function Home() {
  const categories = categoriesData.data.categories;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Multi-Level Categories Form</h1>
      <Category categories={categories} />
    </div>
  </div>
  )
}
