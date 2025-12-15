/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",           // agar local HTML files hain
    "./src/**/*.{html,js}" // agar src folder me bhi files hain
  ],
  safelist: [
    // Typography / Text
    'text-3xl','text-4xl','text-5xl','text-2xl','text-xl','text-lg','text-sm',
    'font-extrabold','font-bold','font-semibold','font-medium',
    'text-teal-700','text-teal-800','text-teal-900',
    'text-gray-500','text-gray-600','text-gray-700','text-gray-800',
    'text-green-700','text-indigo-700','text-indigo-800','text-pink-600','hover:text-pink-800',
    'underline',

    // Backgrounds
    'bg-gray-50','bg-gray-100','bg-white',
    'bg-teal-50','bg-teal-100','bg-teal-600','bg-teal-700',
    'bg-pink-600','hover:bg-pink-700','active:bg-pink-800',
    'bg-blue-600','hover:bg-blue-700','active:bg-blue-800',
    'bg-yellow-50','bg-indigo-50',

    // Borders / Rounding / Shadows
    'border','border-gray-100','border-l-4','border-l-4 border-teal-600',
    'border-l-4 border-yellow-600','border-t-4 border-indigo-600',
    'rounded-lg','rounded-xl','rounded-2xl','rounded-full',
    'shadow-md','shadow-lg','shadow-2xl','hover:shadow-2xl','hover:shadow-lg',

    // Layout / Spacing
    'p-1.5','p-3','p-4','p-5','p-6','p-8','p-10','sm:p-8','sm:p-10',
    'pt-6','pb-2','pb-3','pb-4',
    'mt-2','mt-4','mt-6','mt-12','mb-2','mb-3','mb-4','mb-6','mb-8','mb-10',
    'mx-auto','ml-0','mr-1',
    'max-w-2xl','max-w-4xl',
    'grid','grid-cols-1','sm:grid-cols-2','gap-x-8','gap-y-4',
    'flex','flex-col','sm:flex-row','justify-center','justify-between','items-center',
    'space-y-2','space-y-3','space-y-4','sm:space-y-0','sm:space-x-6',
    'list-disc','list-inside','list-none',

    // Effects / Transitions
    'hover:bg-teal-800','duration-200','duration-150','transition','ease-in-out',
    'hover:scale-[1.01]','active:bg-pink-800','active:bg-blue-800',

    // Buttons / Links
    'btn-primary','w-fit','px-3','px-6','px-8','py-1.5','py-3',
    'text-white','text-xs','text-lg',

    // Images / Figures
    'w-full','h-auto','transition','duration-300','ease-in-out','hover:shadow-2xl','hover:scale-[1.01]',

    // SVG Icons
    'w-4','h-4','w-5','h-5','inline','mr-1','mr-2','-mt-0.5',

    // Containers / Wrappers
    'blogger-post-wrapper','article'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
