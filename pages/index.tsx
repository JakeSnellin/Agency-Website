import { Inter } from 'next/font/google'
import { GetStaticProps, GetStaticPaths } from 'next'
import { gql, GraphQLClient } from 'graphql-request'
import Image from 'next/image'
import { IProjectItem } from '../interfaces/project_interfaces'
import Hero from '../components/Hero'

const inter = Inter({ subsets: ['latin'] })

const client = new GraphQLClient(process.env.HYGRAPH_URL as string);

export const getStaticProps: GetStaticProps = async () => {

  const query = gql`
  query Project {
    project(where: {id: "clhyv0zrjln9j0cmikv5txplr"}) {
    projectList {
      id
      slug
      thumbnail {
        url
      }
      title
      disciplines
      isFeatured
      imageAlt
    }
  }
}`;

const response: IProjectItem = await client.request(query);

console.log(response);

return{
  props: response
}

}

const checkFeatured = (project: any) => {
  return project.isFeatured === true;
}

export default function Home(response: IProjectItem) {

  const projects = response.project.projectList.filter(checkFeatured).map((project) =>
  <div key={project.id}><div><Image src={project.thumbnail.url} alt={project.imageAlt} width={1200} height={675}/></div><div className='pt-18 pl-4 pr-4 pb-65 bg-gradient-to-b from-[#212121] to-[#121212]'><span className='mr-1 text-grey text-m5 leading-h5 pb-2 font-main font-m5'>Project</span><h5 className='text-cream text-m5 inline-block leading-h5 pb-2 font-main font-m5'>{project.title}</h5><p className='text-grey text-m-caption font-m-caption leading-m-caption font-main'>{project.disciplines}</p></div></div>
);

  return (
  <>
    <Hero></Hero>
    <div>{projects}</div>
   </>
  )
}
