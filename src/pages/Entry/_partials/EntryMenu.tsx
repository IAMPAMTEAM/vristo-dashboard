import IconLogout from '@/components/Icon/IconLogout';
import {useNavigate} from 'react-rouer-dom'

const EntryMenu = () => {
    const menuList = [
        {
            logo: '',
            menu: 'IAM Users',
            path: '/users/hr',
        },
        {
            logo: '',
            menu: 'IAM Assets',
        },
        {
            logo: '',
            menu: 'IAM Policy',
        },
        {
            logo: '',
            menu: 'IAM Monitor',
        },
        {
            logo: '',
            menu: 'IAM Audit',
        },
        {
            logo: '',
            menu: 'Compliance',
        },
        {
            logo: '',
            menu: 'Admin',
        },
    ];

    // const navigateMenu = (idx: number) => {
    //     // TODO: Navigate Menu
    //     menuList.forEach((menu) => {});
    // };

    return (
        <div className="panel flex flex-col gap-16 h-full w-full bg-[#F6F5F2] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 p-12 border-none">
            <div className="flex gap-8 justify-center items-center">
                {/* TODO: zerotrust portal logo */}
                <img src="" alt="Zerotrust Portal Logo" />
                <p className="text-6xl font-semibold font-mono tracking-tighter">ZeroTrust Portal</p>
            </div>

            <div className="grid lg:grid-cols-7 grid-flow-col gap-8 p-8">
                {menuList.map((menu, idx) => (
                    <button className="lg:col-span-1 flex flex-col items-center h-full w-full bg-[#86469C] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-8 border-none hover:bg-opacity-30 hover:cursor-pointer" >
                        <img src={menu['logo']} alt={menu['menu']} />
                        <p className="mt-2 font-extrabold text-xl tracking-tighter">{menu['menu']}</p>
                    </button>
                ))}
            </div>

            <div className="">
                <button className="btn bg-[#AD88C6] border-none w-full">
                    <IconLogout />
                    <p className="font-bold font-mono text-[#FFF] tracking-tight text-lg ml-2 shadow-none">LOGOUT</p>
                </button>
            </div>

            <div className="flex flex-col ">
                <p className="font-semibold text-lg mt-0 mr-auto ml-auto mb-4">CS Download Link</p>
                <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-8">
                    <button className="btn lg:col-span-1 bg-opacity-0 border-2 border-[#236969] hover:bg-opacity-20 shadow-none">
                        <p className="text-[#236969]">[Online] Server-CS</p>
                    </button>
                    <button className="btn lg:col-span-1 bg-opacity-0 border-2 border-[#2794EB] hover:bg-opacity-20 shadow-none">
                        <p className="text-[#2794EB]">[Online] DB-CS</p>
                    </button>
                    <button className="btn lg:col-span-1 bg-opacity-0 border-2 border-[#236969] hover:bg-opacity-20 shadow-none">
                        <p className="text-[#236969]">[Online] Server-CS</p>
                    </button>
                    <button className="btn lg:col-span-1 bg-opacity-0 border-2 border-[#2794EB] hover:bg-opacity-20 shadow-none">
                        <p className="text-[#2794EB]">[Online] DB-CS</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EntryMenu;
