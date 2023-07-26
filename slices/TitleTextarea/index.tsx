import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TitleTextarea`.
 */
export type TitleTextareaProps =
  SliceComponentProps<Content.TitleTextareaSlice>;

/**
 * Component for "TitleTextarea" Slices.
 */
const TitleTextarea = ({ slice }: TitleTextareaProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for title_textarea (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TitleTextarea;
