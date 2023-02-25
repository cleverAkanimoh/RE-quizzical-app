import SideBar from "./SideBar";
import MiddleSection from "./MiddleSection";
import Aside from "./Aside";

export default function () {
    return (
        <section className="w-full grid grid-cols-3">
            <SideBar />
            <MiddleSection />
            <Aside />
        </section>
    )
}