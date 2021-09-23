import getConfig from 'next/config'
import NavTab from './NavTab'

function Nav() {

    const { publicRuntimeConfig } = getConfig();
    return (
        <div className="">
            <ul className="flex flex-row items-center justify-center pt-2 border-b">
                {publicRuntimeConfig.navTab?.map(({ image, imageHov, name }) => (
                    <NavTab key={name} image={image} imageHov={imageHov} name={name} />
                ))}
            </ul>
        </div>
    )
}

export default Nav
