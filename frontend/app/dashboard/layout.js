"use client";
import { hasCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import NavBar from "@/components/Navbar";
import MenuCard from "@/components/MenuCard";
import Truck from "@/icon/Truck";
import Home from "@/icon/Home";
import Taka from "@/icon/Taka";

const layout = ({ children }) => {
	const router = useRouter();
	const auth = useSelector((st) => st.auth);

	useEffect(() => {
		if (!hasCookie(process.env.tokenKey)) {
			router.push("/");
		}
	}, [auth]);

	return (
		<div className="">
			<NavBar>
				<div className="w-full lg:w-4/5 h-full flex flex-row rounded-b overflow-hidden">
					<div className="w-1/3 lg:w-1/5 h-full p-2 bg-slate-200 flex flex-col space-y-2 overflow-auto">
						<MenuCard
							className="bg-purple-500"
							text="Home"
							icon={<Home />}
							link="/dashboard/sts"
						/>
						<MenuCard
							className="bg-blue-500"
							text="Vehicle Entry"
							icon={<Truck />}
							link="/dashboard/sts/vehicle-entry"
						/>
						<MenuCard
							className="bg-red-500"
							text="Bill"
							icon={<Taka />}
							link="/dashboard/bill"
						/>
					</div>
					<div className="w-2/3 lg:w-4/5 p-2">{children}</div>
				</div>
			</NavBar>
		</div>
	);
};

export default layout;
