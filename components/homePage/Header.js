import Image from "next/image";
import Nav from "./Nav";

function Header() {
    return (
        <header >
            <div className="bg-nativeCamp-header-bg h-header flex justify-center items-center">
                <div className="flex items-center">
                    {/* Left */}
                    <div className=" m-auto py-4 pr-80">
                        <div className="relative flex  h-logo cursor-pointer my-auto">
                            <Image
                                src="https://nativecamp.net/user/images/common/logo_s-zh-tw.png?v=2.1"
                                layout="fill"
                                objectFit="contain"
                                objectPosition="left"
                            />
                        </div>
                        <h1 className="text-white text-headerLogo">
                            線上英語會話的NativeCamp.7天免費體驗進行中！
                        </h1>
                    </div>
                    {/* Right */}
                    <div className=" pl-80 mb-4 space-y-2">
                        <ul className="flex justify-end ">
                            <li>
                                <a
                                    className="text-white text-sm  hover:text-opacity-75"
                                    href="https://nativecamp.net/zh-tw/tutors"
                                >
                                    FOR TUTORS
                                </a>
                            </li>
                        </ul>
                        <ul className="flex space-x-2">
                            <li>
                                <a className='bg-nativeCamp-header-signup hover:bg-nativeCamp-header-signupHov text-white text-center text-xs py-2 px-6 rounded-sm  cursor-pointer'>註冊</a>
                            </li>
                            <li>
                                <a className='bg-nativeCamp-header-login hover:bg-nativeCamp-header-loginHov text-white text-center text-xs py-2 px-6 rounded-sm  cursor-pointer'>登入</a>
                            </li>
                            <li>
                                <a className="bg-transparent hover:border-opacity-75 border border-bg-white text-white text-center text-xs p-2 px-4 rounded-sm  cursor-pointer">重新加入</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Nav */}
            <div>
                <Nav />
            </div>
        </header>
    );
}

export default Header;
