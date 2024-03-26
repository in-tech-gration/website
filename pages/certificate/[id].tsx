import Certificate from "@/components/certificate/certificate"
import { promises as fs } from 'fs';
import path from "path";
import yaml from 'yaml';
import { ICertificate } from "../../types";

type Params = {
  id: string,
  data: ICertificate & {
    cofounders: { fullName: string, linkedIn: string }[]
  }
}

const Cert = (props:Params) => {

  return <Certificate id={props.id} data={props.data} />

}
  
export async function getStaticProps({ params }: { params: { id: string }}) {

  try {

    const graduatesYamlFilePath = path.join(process.cwd(), "config", "graduates.yaml");
    const graduatesYamlFile = await fs.readFile( graduatesYamlFilePath, 'utf8');
    const data = yaml.parse(graduatesYamlFile);
    const graduateData = data.graduates[params.id];
    const leadInstructor = data.cohorts[graduateData.cohort].leadInstructor;
    const teachingAssistant = data.cohorts[graduateData.cohort].teachingAssistant;

    return {
      props: {
        id: params.id,
        data: { 
          ...graduateData, 
          // date: new Date().getTime(),
          leadInstructor,
          teachingAssistant,
          cofounders: data.staff.cofounders 
        }
      }
    }

  } catch( error ){

    console.log(error);

  }
  
}

export async function getStaticPaths() {

  try {

    const graduatesYamlFilePath = path.join(process.cwd(), "config", "graduates.yaml");
    const graduatesYamlFile = await fs.readFile( graduatesYamlFilePath, 'utf8');
    const { graduates } = yaml.parse(graduatesYamlFile);
    const graduateIDs = Object.keys(graduates).map( id => {
      return { params: { id } }
    });

    return {
      paths: graduateIDs,
      fallback: false
    }

  } catch( error ){

    console.log(error);

  }

}

export default Cert;