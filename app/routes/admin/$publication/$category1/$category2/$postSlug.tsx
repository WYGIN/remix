import { prisma } from '~/utils/prisma.server';
import { useLoaderData } from "@remix-run/react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import TextField from '@mui/material/TextField';
import Editor from '~/components/CKEditor';
import TagInput from '~/components/TagInput';
import TaxonomyInput from '~/components/TaxonomyInput';
import JsonEditor from '~/components/JsonEditor';
import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { getAuthorByUsername } from '~/prisma/Author';
import { getPostBySlugWithAuth, upsertPost } from '~/utils/post.server';

enum Status {
  PUBLISHED
  DRAFT
}

export async function loader(args: LoaderArgs) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if(isAuthenticated) {
    const data = await prisma.post.findUnique({
      where: 

          category1: args.category1,


     
  }
  
  return {
    authorised: false
  }
}

export async function publish({ body, featuredImage, description, category1, category2, tags, slug, schema, status, authorId }) {
  const prisma = await prisma.post.upsert({
    where: {
      category1: category1,
      category2: category2,
      slug: slug
    },
    create: {
      body: body,
      featuredImage: featuredImage,
      description: description,
      category: {
        connectOrCreate: {
          where: {
            category: {
              category1: category1,
              category2: category2,
            },
          },
          create: {
            category1: category1,
            category2: category2,
          },
        },
      },
      tags: tags,
      slug: slug,
      schema: schema,
      status: status,
      author: {
        connect: {
          id: authorId
        }
      }
    },
    update: {
      body: body,
      featuredImage: featuredImage,
      description: description,
      category: {
        connectOrCreate: {
          where: {
            category: {
              category1: category1,
              category2: category2
            },
          },
          create: {
            category1: category1,
            category2: category2
          }
        },
      },
      tags: tags,
      slug: slug,
      schema: schema,
      status: status,
      author: {
        connect: {
          id: authorId
        }
      }
    }
  });
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
    <div class="flex flex-col items-center justify-center"> 
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
              <button class="ml-[10px] w-[34px] flex items-center justify-center h-[34px] border rounded-[10px] border-[#e0e3e7] box-border [color-scheme: light] relative [vertical-align: middle]" id="publish" onClick={() => {
                  const parser = new DOMParser(); 
                  const doc = parser.parseFromString(editorData, 'text/html'); 
                  const title = doc.getElementsByTagName('h1')[0].innerText; 
                  const featuredImage = doc.getElementsByTagName('img')[0].getAttribute("srcset"); 
                  const body = doc.body.removeChild(title).innerHtml;
                  if(isAuthenticated && data.authorised)
                    publish(editerData, featuredImage, description, texonomy[0], taxonomy[1], tags, slug, schema, Status.PUBLISHED, getAuthorByUsername(user.username));
                  else
                    alert("unable to publish post due to unauthorised access")
                }}> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> 
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /> 
                </svg> 
                <span class="ml-[10px]">Publish</span> 
              </button> 
            </div> 
          </header>
          <TextField id="post-slug" label="Slug" variant="outlined" value={slug} onChange={
              (event: React.ChangeEvent<HTMLInputElement>) => {
                setSlug(event.target.value);
              }
            } />
          <TextField id="post-description" label="Description" variant="outlined" value={description} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDescription(event.target.value);
            }} /> 
          <TagInput id="post-tags" value={tags} onAdd={(chip) => {
              tags.push(event.target.value);
            }} onDelete={(chip, index) =>  {
              tags.splice(index,1);
            }} /> 
          <TaxonomyInput id="post-tax" value={taxonomy} onAdd={(chip) => {
              taxonomy.push(event.target.value);
            }} onDelete={(chip, index) =>  {
              taxonomy.splice(index,1);
            }} /> 
          <JsonEditor id="post-schema" defaultValue={schema} onChange={(value, event) => {
              setSchema(eval(value));
            }} /> 
        </div> 
      <div class="block"></div> 
    </aside> 
  </div>
  );
}


