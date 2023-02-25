import { useState } from "react";
import { BsCalendar2, BsWindowSidebar, BsGear, BsBook, BsChat, BsGraphUp } from "react-icons/bs"
import logo from "../assets/logo.png";
import SideNavButtons from "./SideNavButtons";

export default function () {
    const [sideBtn, setSideBtn] = useState([BsCalendar2, BsWindowSidebar, BsGear, BsBook, BsChat, BsGraphUp])

    const sideBarButtons = sideBtn.map(btn => (
        <SideNavButtons key={btn} props={btn} />
    ))

    return (
        <nav className="w-14 h-screen bg-gray-100 flex flex-col items-center">
            <img src={logo} alt="logo" width="50" className="mt-7 rounded-3xl" />
            {sideBarButtons}
        </nav>
    )
}