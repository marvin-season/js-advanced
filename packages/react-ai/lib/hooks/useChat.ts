import {nanoid} from "nanoid";
import {useImmer} from "use-immer";
import moment from "moment";
import {ActionParams, ChatItem, ChatProps, Message} from "@/types";
import {useEffect, useState} from "react";
import {ChatActionType, ChatStatus, MessageType} from "@/constant";
import {parseSSE} from "@/utils";

const format = 'YYYY-MM-DD HH:mm:ss';

export const useChat = (invokeHandle: {
    onSend: (params: any) => Promise<Response>
    onStop: Function,
    onConversationStart?: (message: Message) => void
    onConversationEnd?: (message: Message) => void
}): ChatProps => {
    const [messages, setMessages] = useImmer<Message[]>([]);
    const [chatList, setChatList] = useImmer<ChatItem[]>([]);
    const [chatStatus, setChatStatus] = useState<ChatProps['status']>(ChatStatus.Idle);

    // 发送消息任务(可能包含异步操作)
    const executeSendTask = async (params: ActionParams) => {
        setChatStatus(ChatStatus.Loading);
        setMessages(draft => {
            draft.push({
                id: nanoid(),
                content: params.prompt as string,
                createTime: moment().format(format),
                role: 'user'
            })
        })
        return invokeHandle.onSend(params);
    }

    // 接收消息任务(可能包含异步操作)
    const executeReceiveTask = async (response: Response) => {
        setChatList(draft => {
            const chatItem = draft.at(-1);
            if (chatItem) {
                chatItem.answers = chatItem.answers.filter(item => item.type != MessageType.Loading)
            }
        })

        return parseSSE(response, (message, isFirstLineMessage) => {
            if (isFirstLineMessage) {
                invokeHandle.onConversationStart?.(message);
            }

            setMessages(draft => {
                const find = draft.find(item => item.id === message.id);
                if (find) {
                    find.content += message.content
                } else {
                    draft.push({...message, role: 'assistant'})
                }
            })
        })
    }

    const sendMessage = async (params: ActionParams) => {
        await executeReceiveTask(await executeSendTask(params));
        invokeHandle.onConversationEnd?.(chatList as any)
        setChatStatus(ChatStatus.Idle);
        return '一次会话完成'
    }

    const onSelectedFile = (files: FileList) => {
        for (let index = 0; index < files.length; index++) {
            const file = files[index]
            if (file) {
                const url = URL.createObjectURL(file);
                console.log("🚀  ", url)
            }

        }
    }

    const onStop = () => {
        setChatStatus(ChatStatus.Idle);
        invokeHandle.onStop();
    }

    useEffect(() => {
        return () => {
            invokeHandle.onStop();
            setChatList([]);
            setChatStatus(ChatStatus.Idle);
        }
    }, []);

    return {
        messages,
        chatList,
        status: chatStatus,
        onAction: (actionType, actionParams) => {
            console.log("🚀  ", {actionType, actionParams});
            if (actionType === ChatActionType.SendMessage || actionType === ChatActionType.ReloadMessage) {
                sendMessage(actionParams).then(console.log)
            } else if (actionType === ChatActionType.SelectAttachment) {
                // onSelectedFile(actionParams.attachments);
            } else if (actionType === ChatActionType.StopGenerate) {
                onStop();
            }
        }
    }

}
