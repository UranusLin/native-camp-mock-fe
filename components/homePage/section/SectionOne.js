import Image from "next/image";

function SectionOne() {
    return (
        <div className="w-full">
            {/* Left */}
            <div className="">
                <svg width="0" height="0">
                    <defs>
                        <clipPath id="mask">
                            <path d="M 40 0 L 0 40, 60 100, 0 160, 40 200, 100 140, 160 200, 200 160, 140 100, 200 40, 160 0, 100 60"></path>
                        </clipPath>
                    </defs>
                </svg>
                <Image
                    src="https://nativecamp.net/user/images/index/zh-tw/top-1.jpg"
                    width={1063}
                    height={685}
                />
            </div>
            {/* Right */}
            <div> </div>
        </div>
    )
}

export default SectionOne
