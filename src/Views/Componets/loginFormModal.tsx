import React, { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { MailIcon } from '../Assets/MailIcon.js'
import { LockIcon } from '../Assets/LockIcon.js';
import { useIndexStore } from "../Stores/IndexStore.js";

export default function LoginFormModal(props: { active: boolean; }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const login = (mail: string, password: string) => {
        useIndexStore.setState({ isLogin: true, mail: mail, password: password })
    }
    useEffect(() => {
        if (props.active == false) {
            onOpen()
        }
    }, [])

    return (
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                backdrop="blur"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">登录</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    endContent={
                                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="邮箱"
                                    placeholder="输入你的邮箱"
                                    variant="bordered"
                                />
                                <Input
                                    endContent={
                                        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="密码"
                                    placeholder="输入你的密码"
                                    type="password"
                                    variant="bordered"
                                />
                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        保存密码
                                    </Checkbox>
                                    <Link color="primary" href="#" size="sm">
                                        忘记密码?
                                    </Link>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    关闭
                                </Button>
                                <Button color="primary" onPress={() => {
                                    onClose();
                                    login("test", "test");
                                }}>
                                    确定
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
