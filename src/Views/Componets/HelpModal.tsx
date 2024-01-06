import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";

const HelpModal = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (<div className="flex flex-col gap-2">
        <div className="hidden">
            <Button id="openHelp" onPress={onOpen}>Open Modal</Button>
        </div>
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            scrollBehavior="inside"
            backdrop="blur"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            问题与解决
                        </ModalHeader>
                        <ModalBody>
                            <p className="underline">
                                问题: 为什么我无法登录?
                            </p>
                            <p>
                                解决: 请检查你的网络连接是否正常, 以及你的账号密码是否正确.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onPress={onClose}>
                                了解
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    </div>);
}

export default HelpModal;