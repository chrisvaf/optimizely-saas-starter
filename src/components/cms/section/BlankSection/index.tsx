import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { BlankSectionDataFragmentDoc, type BlankSectionDataFragment } from "@/gql/graphql";

/**
 * Blank Section
 * A section without a predefined layout.
 */
export const BlankSection_section : CmsComponent<BlankSectionDataFragment> = ({ editProps, children }) => {
    return <CmsEditable as="section" className="w-full" {...editProps}>
        { children }
    </CmsEditable>
}
BlankSection_section.displayName = "Blank Section (_section/BlankSection)"
BlankSection_section.getDataFragment = () => ['BlankSectionData', BlankSectionDataFragmentDoc]

export default BlankSection_section