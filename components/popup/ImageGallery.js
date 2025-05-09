import { context } from "@/context/context";
import FsLightbox from "fslightbox-react";
import { Fragment, useContext } from "react";
const ImageGallery = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { gallery, setGallery } = useContext(context);

  return (
    <Fragment>
      <FsLightbox
        toggler={gallery}
        sources={[
          "images/works/work1.jpg",
          "images/works/work2.jpg",
          "images/works/work3.jpg",
          "images/works/work4.jpg",
        ]}
      />
    </Fragment>
  );
};
export default ImageGallery;
