import { GridSectionImage } from '@/app/ui/GridSectionImage'
import {
  pageQ44Href,
  pageStanzaHref,
  pageTraccePassatoHref,
  pageTupperwareHref,
  pageWonderSnackHref,
} from '@/app/paths'

export default function MainPageContent() {
  return (
    <section>
      <h1>Projects</h1>
      <GridSectionImage projCode='p1-tupperware' to={pageTupperwareHref} />
      <GridSectionImage projCode='p2-q44' to={pageQ44Href} />
      <GridSectionImage projCode='p3-stanza' to={pageStanzaHref} />
      <GridSectionImage
        projCode='p4-tracce-passato'
        to={pageTraccePassatoHref}
      />
      <GridSectionImage projCode='p5-wondersnack' to={pageWonderSnackHref} />
    </section>
  )
}
