import React, {memo} from "react";
import {Question} from "@/components/chatv2/types.ts";
import {Flex} from "antd";

const QuestionMemo = memo<{ question: Question }>(({question}) => {
    return <>
        <Flex className={'p-2'} justify={"flex-end"}>
            <Flex vertical={true} gap={2} align={'end'}
                  className={'bg-indigo-100 p-2 pl-4 pr-4 rounded-lg hover:bg-indigo-200 hover:cursor-pointer'}>
                <div>
                </div>
                <div className={'font-mono text-sm'}>
                    {
                        typeof question.content === 'string' ? question.content : ''
                    }
                </div>
            </Flex>
        </Flex>
    </>
})


export default QuestionMemo;