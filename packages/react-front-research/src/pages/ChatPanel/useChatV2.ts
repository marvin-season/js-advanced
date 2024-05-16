import {nanoid} from "nanoid";
import {generateRandomTextWithCallback} from "@/utils/ContentGenerator.ts";
import {useImmer} from "use-immer";
import moment from "moment";
import type {Types} from "@root/react-ui";

const format = 'YYYY-MM-DD HH:mm:ss';

export const useChatV2 = (): Types.ChatProps => {
    const [chatList, setChatList] = useImmer<Types.ChatItem[]>([]);


    const handleChatResponse = (answer?: Types.Answer) => {
        console.log("🚀  ", answer)
        generateRandomTextWithCallback(({content, id}) => {
            setChatList(draft => {
                const lastChatItem = draft.at(-1);
                if (lastChatItem) {
                    const lastChatItemAnswer = lastChatItem.answers.find(item => item.id === id);
                    if (lastChatItemAnswer) {
                        lastChatItemAnswer.content += content;
                    } else {
                        lastChatItem.answers.push({
                            id,
                            content,
                            createTime: moment().format(format)
                        })
                    }
                }

            })
        })
    }

    const onSelectedFile = (files: FileList) => {
        for (let index = 0; index < files.length; index++) {
            const file = files[index]
            if (file) {
                const url = URL.createObjectURL(file);
            }
        }
    }
    const onReload = (answer: Types.Answer) => {
        handleChatResponse(answer);
    }
    const onSend = (value: string) => {
        setChatList(draft => {
            draft.push({
                questions: [
                    {
                        id: nanoid(),
                        content: value,
                        createTime: moment().format(format),
                    }
                ],
                answers: []
            })
        })
        handleChatResponse()
    }

    return {
        chatList,
        onReload,
        onSend,
        onSelectedFile
    }

}
