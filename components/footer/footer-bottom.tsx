export function FooterBottom() {
  return (
    <div className="border-t border-green-800">
      <div className="container mx-auto py-6 px-4 text-center">
        <div className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} PT Buana Raya Wardani. All rights reserved.
        </div>
      </div>
    </div>
  )
}
