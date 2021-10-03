import getConfig from 'next/config'

function NavDetail({ tab }) {

    const { publicRuntimeConfig } = getConfig();

    return (
        <div className="flex flex-row justify-between items-center w-4/6 border-r border-b border-l ml-60">
            {publicRuntimeConfig.navDetails[tab]?.map(({ name, list }) =>
            (
                <div key={name} className="flex flex-col items-center mr-8 ml-8">
                    <div className="border-b  w-full m-2 border-nativeCamp-nav-textHov pb-2">
                        <div className="border-l-4 border-nativeCamp-nav-textHov text-nativeCamp-nav-text">&ensp;{name}</div>
                    </div>
                    <div className="items-center">
                        {list?.map(data => (
                            <div key={data} className="text-nativeCamp-nav-text flex items-center flex-row">
                                <div className="w-2  overflow-hidden inline-block m-2">
                                    <div className="h-6  bg-nativeCamp-nav-textHov rotate-45 transform origin-top-left"></div>
                                </div>
                                <span className="pb-3 text-sm">{data}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )
            )}
        </div>
    )
}

export default NavDetail
