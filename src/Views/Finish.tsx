import React from "react";
import { CircularProgress, Card, CardBody, CardFooter, Chip, Progress, Table, TableHeader, TableColumn, TableRow, TableBody, TableCell, Button } from "@nextui-org/react";

const Finish = () => {
    return (<>
        <div className="flex justify-center flex-col">
            <div className="text-center m-4 mx-auto font-bold text-2xl underline">👑结算界面👑</div>
            <Progress showValueLabel={true} label="当前等级:1" maxValue={100} value={60} size="md" className="max-w-md" />
            <div className="text-center m-4 mx-auto">
                <Card className="w-[240px] h-[240px] border-none bg-gradient-to-br from-green-400 to-green-600">
                    <CardBody className="justify-center items-center pb-0">
                        <CircularProgress
                            classNames={{
                                svg: "w-36 h-36 drop-shadow-md",
                                indicator: "stroke-white",
                                track: "stroke-white/10",
                                value: "text-3xl font-semibold text-white",
                            }}
                            value={70}
                            strokeWidth={4}
                            showValueLabel={true}
                        />
                    </CardBody>
                    <CardFooter className="justify-center items-center pt-0">
                        <Chip
                            classNames={{
                                base: "border-1 border-white/30",
                                content: "text-white/90 text-small font-semibold",
                            }}
                            variant="bordered"
                        >
                            正确率
                        </Chip>
                    </CardFooter>
                </Card>
            </div>
            <h1 className="font-bold text-center m-4">排行榜</h1>
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>代号</TableColumn>
                    <TableColumn>正确率(%)</TableColumn>
                    <TableColumn>总时间(秒)</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell>Coaixy</TableCell>
                        <TableCell>100</TableCell>
                        <TableCell>60</TableCell>
                    </TableRow>
                    <TableRow key="2">
                        <TableCell>Zoey Lang</TableCell>
                        <TableCell>100</TableCell>
                        <TableCell>62</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Button color="primary" className="mt-4">返回</Button>
        </div>
    </>);
}

export default Finish;