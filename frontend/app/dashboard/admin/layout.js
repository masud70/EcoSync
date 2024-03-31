"use client";
import { hasCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import MenuCard from "@/components/MenuCard";
import Truck from "@/icon/Truck";
import Home from "@/icon/Home";
import StsIcon from "@/icon/StsIcon";
import { RiProfileFill } from "react-icons/ri";

const layout = ({ children }) => {
	const router = useRouter();
	const auth = useSelector((st) => st.auth);

	useEffect(() => {
		if (
			!hasCookie(process.env.tokenKey) ||
			!auth.roles.includes("system_admin")
		) {
			toast.error("Invalid access!");
			router.push("/dashboard");
		}
	}, [auth]);

	return (
		<div style={{backgroundColor:'#eaf8ef'}} className="w-full lg:w-4/5 h-full flex flex-row rounded-b overflow-hidden">
			<div className="w-1/3 lg:w-1/5 h-full p-2 bg-slate-200 flex flex-col space-y-2 overflow-auto">
				<MenuCard  
					text="User Management"
					icon={<RiProfileFill size={70}/>}
					link="/administration/user"
				/>
				<MenuCard 
					text="Home"
					icon={<Home />}
					link="/dashboard/admin"
				/>
				<MenuCard 
					text="Vehicle Entry"
					icon={<Truck />}
					link="/dashboard/admin/vehicle-register"
				/>
				<MenuCard 
					text="Vehicle Assignment"
					icon={<StsIcon />}
					link="/dashboard/admin/vehicle-assignment"
				/>
				<MenuCard 
					text="STS Register"
					icon={<StsIcon />}
					link="/dashboard/admin/sts-register"
				/>
				<MenuCard 
					text="STS Management"
					icon={<StsIcon />}
					link="/dashboard/admin/sts-management"
				/>
			</div>
			<div className="w-2/3 lg:w-4/5 p-2">{children}</div>
		</div>
	);
};

export default layout;
