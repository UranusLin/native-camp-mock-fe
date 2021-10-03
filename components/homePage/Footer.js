import Image from "next/image";
import getConfig from 'next/config'

function Footer() {
    const { publicRuntimeConfig } = getConfig();
    return (
        <div className="bg-nativeCamp-nav-text h-96 flex flex-row">
            {/* Left */}
            <div className="flex flex-col items-center justify-center space-y-4 p-32">
                <div className="h-[31px] w-[160px] relative flex ">
                    <Image
                        src="https://nativecamp.net/user/images/common/logo_s-zh-tw.png?v=2.1"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div>
                    <ul className="flex flex-row space-x-4">
                        <li className="bg-white rounded-full h-8 w-8 justify-center flex items-center hover:bg-gray-300">
                            <Image
                                src="/icon/twitter-color.svg"
                                width={20}
                                height={20}
                            />
                        </li>
                        <li className="bg-white rounded-full h-8 w-8 justify-center flex items-center hover:bg-gray-300">
                            <Image
                                src="/icon/facebook-color.svg"
                                width={20}
                                height={20}
                            /></li>
                        <li className="bg-white rounded-full h-8 w-8 justify-center flex items-center hover:bg-gray-300">
                            <Image
                                src="/icon/youtube-color.svg"
                                width={20}
                                height={20}
                            /></li>
                        <li className="bg-white rounded-full h-8 w-8 justify-center flex items-center hover:bg-gray-300">
                            <Image
                                src="/icon/black-instagram.svg"
                                width={20}
                                height={20}
                            /></li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <span className="text-white text-xs">Copyright © 2021 線上英語會話</span>
                    <span className="text-white text-xs">NativeCamp. All Rights Reserved.</span>
                </div>
            </div>
            {/* Right */}
            <div className="flex flex-col items-start justify-center space-y-2">
                {publicRuntimeConfig.footer?.map(({ name, list }) =>
                (
                    <div key={name} >
                        <span className="text-white text-sm">・ {name}</span>
                        <div className="flex flex-row items-center space-x-8 pt-1 pl-5">
                            {list.map((name) => (
                                <div className="text-white text-xs">
                                    {name}
                                </div>
                            ))}
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Footer
