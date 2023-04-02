 import TagInput from './TagInput'; 
 import TaxonomyInput from './TaxonomyInput'; 
 import JsonEditor from './JsonEditor'; 
 import TextField from './TextField'; 
 import CKEditor from './CKEditor'; 

export default function () {
  return(
<div class="flex flex-col items-center justify-center"> 
   <div id="header" class="backdrop-blur bg-[#FFFFFFCC] h-[64px] border-b border-solid border-gray box-border text-[#2d3843] [color-scheme: light] flex flex-row shrink-0 text-base left-0 fixed right-0 [text-size-adjust: 100%] top-0 w-full [-webkit-font-smooting: antialiased] z-[1100] py-2 px-4"> 
     <div class="items-center box-border text-[#2d3843] [color-scheme: light] flex text-base min-h-[48px] relative [text-size-adjust: 100%]"> 
       <button class="items-center [appearance: none] bg-[#00000000] border border-[#e0e3e7] box-border [color-scheme: light] [cursor: pointer] flex justify-center p-2 ml-px relative [vertical-align: middle] h-[34px] w-[34px] rounded-[10px]"> 
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> 
           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /> 
         </svg> 
       </button> 
       <a class="ml-4" href="">NEW POST</a> 
     </div> 
     <div class="flex-auto block"></div> 
     <div class="flex items-center justify-center"> 
       <button class="ml-[10px] w-[34px] flex items-center justify-center h-[34px] border rounded-[10px] border-[#e0e3e7] box-border [color-scheme: light] relative [vertical-align: middle]"> 
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> 
           <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /> 
         </svg> 
       </button> 
     </div> 
   </div> 
   <div class="flex flex-col justify-items-center content-between pb-[40px] pt-[75px]"> 
     <TextField class="w-full" id="filled-basic" label="Title" variant="filled" /> 
     <CKEditor /> 
   </div> 
   <aside class="fixed [inset: 0px] z-[1200] block text-[#1A2027]"> 
     <div id="backdrop-overlay-aside" class="fixed flex items-center justify-center bg-[#00000080] z-[-1] opacity-100 transition-opacity duration-[225ms] ease-in-out delay-[0ms]"></div> 
     <div class="block"></div> 
     <div class="[transform: none] transition-transform duration-[225ms] ease-out sm:w-[310px] text-[#1A2027] bg-white flex flex-[1_0_auto] flex-col h-full z-[1200] fixed top-0 right-0 rounded-l-[10px]"> 
       <header class="backdrop-blur bg-[#FFFFFFCC] h-[64px] border-b border-solid border-gray box-border text-[#2d3843] [color-scheme: light] flex flex-row shrink-0 text-base left-0 fixed right-0 [text-size-adjust: 100%] top-0 w-full [-webkit-font-smooting: antialiased] z-[1100] py-2 px-4"> 
         <div class="items-center box-border text-[#2d3843] [color-scheme: light] flex text-base min-h-[48px] relative [text-size-adjust: 100%]"> 
           <button class="items-center [appearance: none] bg-[#00000000] border border-[#e0e3e7] box-border [color-scheme: light] [cursor: pointer] flex justify-center p-2 ml-px relative [vertical-align: middle] h-[34px] w-[34px] rounded-[10px]"> 
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> 
               <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /> 
             </svg> 
           </button> 
           <a class="ml-4" href="">Post Metadata</a> 
         </div> 
         <div class="flex-auto block"></div> 
         <div class="flex items-center justify-center"> 
           <button class="ml-[10px] w-[34px] flex items-center justify-center h-[34px] border rounded-[10px] border-[#e0e3e7] box-border [color-scheme: light] relative [vertical-align: middle]" id="publish"> 
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> 
               <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /> 
             </svg> 
             <span class="ml-[10px]">Publish</span> 
           </button> 
         </div> 
       </header> 
       <TextField id="post-slug" label="Slug" variant="outlined" /> 
       <TextField id="post-description" label="Description" variant="outlined" /> 
       <TagInput id="post-tags"/> 
       <TaxonomyInput id="post-tax"/> 
       <JsonEditor id="post-schema"/> 
     </div> 
     <div class="block"></div> 
   </aside> 
 </div>
)
}
