import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

type ZoomableImageProps = {
  src: string,
  subheading?: string
}

export default function ZoomableImage({ src, subheading }: ZoomableImageProps) {

  return (
    <Zoom zoomImg={{ src }} zoomMargin={150}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className='m-auto'
        src={src}
        width={200}
        height={200}
        alt={subheading ? subheading : ""}
      />
      {/* <Image
        className='m-auto'
        src={src}
        width={200}
        height={200}
        alt={ subheading ? subheading : "" }
      /> */}
      {subheading && <p className="m-auto text-center text-sm">{subheading}</p>}
    </Zoom>
  )


}