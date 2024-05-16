import Link from 'next/link'
 
export default function NotFound() {
  return (
    <section className="flex items-center h-screen p-16 bg-gray-50">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col gap-6 max-w-md text-center">
          <h2 className="font-extrabold text-9xl text-gray-600">Not Found</h2>
          <p className="text-2xl md:text-3xl">Could not find requested resource</p>
          <Link href="/" className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200">Return Home</Link>
        </div>
      </div>
    </section>
  )
}