import { useLoaderData } from "@remix-run/react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import TextField from '@mui/material/TextField';
import Editor from '~/components/CKEditor';
import TagInput from '~/components/TagInput';
import TaxonomyInput from '~/components/TaxonomyInput';
import JsonEditor from '~/components/JsonEditor';
import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { getAuthorIdFromUsername } from '~/utils/user.server';
import { getPostBySlugWithAuth, upsertPost } from '~/utils/post.server';

enum Status {
  PUBLISHED,
  DRAFT
}

export async function loader(args: LoaderArgs) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if(isAuthenticated) {
    const data = await getPostBySlugWithAuth (args.category1, args.category2, args.slug);

    return data; 
  }
  
  return {
    authorised: false
  }
}

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  const userId = await getAuthorIdFromUsername(body.get('username'));
  const data = await upsertPost(body.get('body'), body.get('featuredImage'), body.get('description'), body.get('category1'), body.get('category2'), body.get('tags'), body.get('slug'), body.get('schema'), Status.PUBLISHED, authorId);

}


export default function Page() {
  const data = useLoaderData<typeof loader>();
  
  const [editorData, setEditorData] = useState('');
  const [slug, setSlug] = useState('');
  const [taxonomy, setTaxonomy] = useState<String[]>([]);
  const [tags, setTags] = useState<String[]>([]);
  const [description, setDescription] = useState('');
  const [schema, setSchema] = useState<Json>();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const parser = new DOMParser(); 
  const doc = parser.parseFromString(editorData, 'text/html'); 
  const featuredImage = doc.getElementsByTagName('img')[0].getAttribute("srcset"); 
    
  if(data) {
    setEditorData(data.body);
    setSlug(data.slug);
    setTaxonomy([data.taxonomy.category1, data.taxonomy.category2]);
    setTags(data.TagsOnPost.tags.map((item) => {
      return item.name
    });
    setDescription(data.description);
    setSchema(data.schema);
  }

  return(
    <Form class="flex flex-col items-center justify-center"> 
      <div id="header" class="backdrop-blur bg-[#FFFFFFCC] h-[64px] border-b border-solid border-gray box-border text-[#2d3843] [color-scheme: light] flex flex-row shrink-0 text-base left-0 fixed right-0 [text-size-adjust: 100%] top-0 w-full [-webkit-font-smooting: antialiased] z-[1100] py-2 px-4"> 
        <div class="items-center box-border text-[#2d3843] [color-scheme: light] flex text-base min-h-[48px] relative [text-size-adjust: 100%]"> 
          <button class="items-center [appearance: none] bg-[#00000000] border border-[#e0e3e7] box-border [color-scheme: light] [cursor: pointer] flex justify-center p-2 ml-px relative [vertical-align: middle] h-[34px] w-[34px] rounded-[10px]"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> 
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /> 
            </svg> 
          </button> 
          <a class="ml-4" href="">NEW POST</a> 
        </div> 
        <div class="flex-auto block"></div> 
        <div class="flex items-center justify-center"> 
          <button class="ml-[10px] w-[34px] flex items-center justify-center h-[34px] border rounded-[10px] border-[#e0e3e7] box-border [color-scheme: light] relative [vertical-align: middle]"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> 
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /> 
            </svg> 
          </button> 
        </div> 
      </div> 
      <div class="flex flex-col justify-items-center content-between pb-[40px] pt-[75px]">
        <CKEditor
          name="body"
          editor={ Editor }
          data={editorData}
          onReady={ editor => {
          } }
          onChange={ ( event, editor ) => {
            setEditorData(editor.getData());
          } }
        />
      </div>
      <aside class="fixed [inset: 0px] z-[1200] block text-[#1A2027]"> 
        <div id="backdrop-overlay-aside" class="fixed flex items-center justify-center bg-[#00000080] z-[-1] opacity-100 transition-opacity duration-[225ms] ease-in-out delay-[0ms]"></div> 
        <div class="block"></div> 
        <div class="[transform: none] transition-transform duration-[225ms] ease-out sm:w-[310px] text-[#1A2027] bg-white flex flex-[1_0_auto] flex-col h-full z-[1200] fixed top-0 right-0 rounded-l-[10px]"> 
          <header class="backdrop-blur bg-[#FFFFFFCC] h-[64px] border-b border-solid border-gray box-border text-[#2d3843] [color-scheme: light] flex flex-row shrink-0 text-base left-0 fixed right-0 [text-size-adjust: 100%] top-0 w-full [-webkit-font-smooting: antialiased] z-[1100] py-2 px-4"> 
            <div class="items-center box-border text-[#2d3843] [color-scheme: light] flex text-base min-h-[48px] relative [text-size-adjust: 100%]"> 
              <button class="items-center [appearance: none] bg-[#00000000] border border-[#e0e3e7] box-border [color-scheme: light] [cursor: pointer] flex justify-center p-2 ml-px relative [vertical-align: middle] h-[34px] w-[34px] rounded-[10px]"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> 
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /> 
                </svg> 
              </button> 
              <a class="ml-4" href="">Post Metadata</a> 
            </div> 
            <div class="flex-auto block"></div> 
            <div class="flex items-center justify-center"> 
              <button type="submit" class="ml-[10px] w-[34px] flex items-center justify-center h-[34px] border rounded-[10px] border-[#e0e3e7] box-border [color-scheme: light] relative [vertical-align: middle]" id="publish"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> 
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /> 
                </svg> 
                <span class="ml-[10px]">Publish</span> 
              </button> 
            </div> 
          </header>
          <TextField name="slug" id="post-slug" label="Slug" variant="outlined" value={slug} onChange={
              (event: React.ChangeEvent<HTMLInputElement>) => {
                setSlug(event.target.value);
              }
            } />
          <TextField name="description" id="post-description" label="Description" variant="outlined" value={description} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDescription(event.target.value);
            }} /> 
          <TagInput name="tags" id="post-tags" value={tags} onAdd={(chip) => {
              tags.push(event.target.value);
            }} onDelete={(chip, index) =>  {
              tags.splice(index,1);
            }} /> 
          <TaxonomyInput name="taxonomy" id="post-tax" value={taxonomy} onAdd={(chip) => {
              taxonomy.push(event.target.value);
            }} onDelete={(chip, index) =>  {
              taxonomy.splice(index,1);
            }} /> 
          <JsonEditor name="schema" id="post-schema" defaultValue={schema} onChange={(value, event) => {
              setSchema(eval(value));
            }} />
          <TextField name="username" className="hidden">{user.username}</TextField>
          <TextField name="category1" className="hidden">{taxonomy[0]}</TextField>
          <TextField name="category2" className="hidden">{taxonomy[1]}</TextField>
          <TextField name="featuredImage" className="hidden">{featuredImage}</TextField>
        </div> 
      <div class="block"></div> 
    </aside> 
  </Form>
  );
}
