import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { SimpleHeroDataFragmentDoc, type SimpleHeroDataFragment } from "@/gql/graphql";

/**
 * Simple Hero
 * 
 */
export const SimpleHero_component : CmsComponent<SimpleHeroDataFragment> = ({ data, editProps }) => {
    const componentName = 'Simple Hero'
    const componentInfo = ''
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
SimpleHero_component.displayName = "Simple Hero (_component/SimpleHero)"
SimpleHero_component.getDataFragment = () => ['SimpleHeroData', SimpleHeroDataFragmentDoc]

export default SimpleHero_component