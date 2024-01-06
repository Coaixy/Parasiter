import { DropdownItem, DropdownMenu } from "@nextui-org/react";
import { useEffect, useState } from "react";

const InfoDropDown = (props: { active: boolean; mail: string }) => {
    const [disabledKeys, setDisableKeys] = useState<string[]>([])
    const login = () => {
        return ;
    }
    useEffect(() => {
        console.log(props)
        if (props.active == false) {
            setDisableKeys(['settings', 'team_settings', 'logout'])
        } else {
            setDisableKeys([])
        }
    }, [])
    return (<>
        <DropdownMenu aria-label="Profile Actions" variant="flat" disabledKeys={disabledKeys}>
            <DropdownItem key="profile" className="h-14 gap-2" onClick={login}>
                <p className="font-semibold">{props.mail == "" ? "去登陆" : props.mail}</p>
            </DropdownItem>
            <DropdownItem key="settings">个人设置</DropdownItem>
            <DropdownItem key="team_settings">团队设置</DropdownItem>
            <DropdownItem key="help_and_feedback" onClick={() => {
                document.getElementById('openHelp')?.click()
            }}>帮助</DropdownItem>
            <DropdownItem key="logout" color="danger">
                退出登录
            </DropdownItem>
        </DropdownMenu>
    </>);
}

export default InfoDropDown;