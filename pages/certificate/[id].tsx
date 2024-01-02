import Certificate from "@/components/certificate"
import { useParams } from 'next/navigation'

type Params = {
  id: string
}

const Cert = () => {

  const params = useParams<Params>();
  const hasIdParam = params && params.id;

  if ( hasIdParam ){
    return <Certificate id={params.id}/>
  }

}
  
export default Cert;