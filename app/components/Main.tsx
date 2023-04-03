export default function ({ post }) {
  return(
    <main class="grid w-full">
      <div class="w-full box-border mx-auto block px-4 pt-[100px] max-w-[105ch] relative min-w-0">
        <div class="flex -mt-[10px] -mb-[15px]">
          <a class="items-center justify-center relative box-border py-1 px-2 mb-4 font-medium [cursor: pointer] [user-select: none] [vertical-align: middle] no-underline min-w-[64px] rounded-[10px] text-[0.78125rem] text-[#0072E5]">
            edit this page
            <span class="-mr-0.5 ml-2 font-medium text-[0.78125rem] text-[#0072E5]">
              <svg></svg>
            </span>
            <span class="absolute"></span>
          </a>
        </div>
        <div class="text-base">
          <h1>{post.title}</h1>
          {post.body}
        </div>
        <div class="mt-24">
          <hr class="border-[#E7EBF0]" />
        </div>
      </div>
    </main>
  )
}
