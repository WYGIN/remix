import { getAccountNameFromSocial, getAccountFromSocial } from '@utils/Social';
export default function Footer({footer}) {
  return(
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://wygin.me/" className="flex items-center">
                  <img src="https://wygin.me/logo.svg" className="h-8 mr-3" alt="WYGIN Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">wygin</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                { footer.items.map((item, index) => (
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white" key={index}>item.label</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                    { item.items.map((subitem, index) => (
                      {  if(item.length !== index) {
                           return(
                             <li className="mb-4" key{index}>
                               <a href={subitem.slug} className="hover:underline">{subitem.name}</a>
                             </li>
                           )
                         } else {
                           return (
                             <li>
                               <a href={subitem.slug} className="hover:underline">{subitem.name}</a>
                             </li>
                           )
                         }
                       }
                    )}
                  </ul>
                )}
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://wygin.me" class="hover:underline">wygin</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            { footer.social.accounts.map((item, index) => {
              <a href={getAccountFromSocial(item.socialPlatform, item.username)} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="ml-[10px] w-[34px] flex items-center justify-center h-[34px] border rounded-[10px] border-[#e0e3e7] box-border [color-scheme: light] relative [vertical-align: middle]">
                  <image xlink:href={item.logo} src={item.logo} width="24" height="24" />
                </svg>
                <span className="sr-only">{getAccountNameFromSocial(item.socialPlatform)}</span>
              </a>
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
