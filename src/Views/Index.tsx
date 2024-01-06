import { Navbar, NavbarBrand, NavbarContent, DropdownTrigger, Dropdown, Avatar } from "@nextui-org/react";
import { AcmeLogo } from "./Assets/AcmeLogo.tsx";
import InfoDropDown from './Componets/infoDropDown.tsx';
import { useIndexStore } from "./Stores/IndexStore";
import LoginFormModal from "./Componets/loginFormModal.tsx";
import IndexCardButton from "./Componets/indexCardButton.tsx";
import HelpModal from "./Componets/HelpModal.tsx";
import { useRef } from "react";
const Index = () => {
    return (
        <>
            <LoginFormModal active={useIndexStore(state => state.isLogin)}></LoginFormModal>
            <Navbar>
                <NavbarBrand>
                    <AcmeLogo />
                    <p className="font-bold text-inherit">Parasiter</p>
                </NavbarBrand>
                <NavbarContent as="div" justify="end">
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                size="sm"
                                src={`https://q1.qlogo.cn/g?b=qq&nk=${useIndexStore(state => state.qq)}&s=640`}
                            />
                        </DropdownTrigger>
                        <InfoDropDown active={useIndexStore(state => state.isLogin)} mail={useIndexStore(state => state.mail)}></InfoDropDown>
                    </Dropdown>
                </NavbarContent>
            </Navbar>
            <HelpModal></HelpModal>
            <div className="flex justify-center">
                <div className="text-center m-4 mx-auto">
                    <IndexCardButton name="冒险模式"></IndexCardButton>
                    <IndexCardButton name="单人匹配"></IndexCardButton>
                    <IndexCardButton name="学习模式"></IndexCardButton>
                </div>
            </div>
        </>
    );
}

export default Index;