import { Inter } from 'next/font/google'
import { GetStaticProps, GetStaticPaths } from 'next'
import { gql, GraphQLClient } from 'graphql-request'
import Image from 'next/image'
import { IProjectItem } from '../interfaces/project_interfaces'

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

  const headers = response.project.projectList.filter(checkFeatured).map((project) =>
    <div key={project.id}><h1>{project.title}</h1></div>
  )

  return (
  <>
   <div><h1 className='text-3xl font-bold underline'>Hello World</h1></div>
   <div>{headers}</div>
   <Image src={response.project.projectList[0].thumbnail.url} alt={response.project.projectList[0].imageAlt} width={200} height={200} ></Image>
   </>
  )
}
