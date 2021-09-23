import { useState } from 'react';
import Image from "next/image";

function NavTab({ image, imageHov, name }) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return (
        <li className="w-48 flex items-center justify-center cursor-pointer text-nativeCamp-nav-text hover:text-nativeCamp-nav-textHov border-b-4 border-white hover:border-nativeCamp-nav-textHov"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <div className="space-y-2 w-48 flex justify-center items-center flex-col">
                <div className="relative flex h-[28px] w-[28px]">

                    {isHovering ? (
                        <Image
                            src={imageHov}
                            layout="fill"
                            objectFit="contain"
                        />
                    ) : (
                        <Image
                            src={image}
                            layout="fill"
                            objectFit="contain"
                        />
                    )}
                </div>
                <div className="pb-2" >
                    <span className="text-sm">{name}</span>
                </div>
            </div>
        </li>
    )
}

export default NavTab
