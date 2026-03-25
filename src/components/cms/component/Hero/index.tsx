import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { HeroDataFragmentDoc, ReferenceDataFragmentDoc, LinkDataFragmentDoc, type HeroDataFragment } from "@/gql/graphql";
import { getFragmentData } from "@/gql/fragment-masking";

/**
 * Hero
 *
 */
export const Hero_component : CmsComponent<HeroDataFragment> = ({ data, editProps }) => {
    const image = getFragmentData(ReferenceDataFragmentDoc, data.Image)
    const imageLink = getFragmentData(LinkDataFragmentDoc, image?.url)
    const imageUrl = imageLink?.default
    return <CmsEditable className="relative w-full" {...editProps}>
        { imageUrl && <img src={imageUrl} alt={data.Heading ?? ''} className="w-full h-96 object-cover" /> }
        <div className="mx-auto max-w-4xl px-4 py-12">
            { data.Heading && <h1 className="text-4xl font-bold mb-4">{ data.Heading }</h1> }
            { data.SubHeading && <p className="text-xl text-gray-600 mb-6">{ data.SubHeading }</p> }
            { data.Body?.html && <div className="prose" dangerouslySetInnerHTML={{ __html: data.Body.html }} /> }
        </div>
    </CmsEditable>
}
Hero_component.displayName = "Hero (_component/Hero)"
Hero_component.getDataFragment = () => ['HeroData', HeroDataFragmentDoc]

export default Hero_component