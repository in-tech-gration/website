import Certificate from "@/components/certificate"
import { useParams } from 'next/navigation'

const Cert = () => {
  const params = useParams()
  console.log(params)
  if (params){
    // @ts-ignore
    return <Certificate id={params?.id}/>
  }
  }
  
export default Cert;