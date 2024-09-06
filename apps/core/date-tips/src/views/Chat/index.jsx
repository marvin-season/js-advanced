import { Chat, useChat, ChatActionType } from "@marvin/react-ai";
import { useChatPage } from "./hooks/index.js";
import React, { useEffect } from "react";

export default function ChatPage() {
  const {
    conversations,
    conversation,
    fetchConversations,
    selectConversation,
    unSelectConversation,
    deleteConversation,
  } = useChatPage();

  const { reset, ...chatProps } = useChat({
    async onSend(params, signal) {
      console.log(params);
      return await fetch("/api/chat/stream", {
        method: "POST",
        signal,
        body: JSON.stringify({ ...params, conversationId: conversation?.conversationId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onConversationEnd: async (lastMessage) => {
      await fetchConversations();
      await selectConversation(lastMessage.conversationId);
      console.log("选中会话: ", lastMessage.conversationId);
    },
  }, {
    historyMessages: conversation?.messages || [],
  });

  useEffect(() => {
    conversation && chatProps.onAction(ChatActionType.StopGenerate);
  }, [conversation]);


  return <>
    <div className={"flex gap-4"}>
      <div className={"p-2"}>
        <div onClick={() => {
          unSelectConversation();
        }}>新建会话
        </div>
        {conversations.map(item => {
          return <div key={item.id} className={`flex gap-2 ${item.id === conversation?.id ? "bg-blue-100" : ""} mb-2`}>

            <div onClick={() => selectConversation(item.conversationId)}>{item.name}</div>
            <div onClick={() => {
              confirm("确认删除吗?") && deleteConversation(item.conversationId).then(() => {
                unSelectConversation();
                fetchConversations();
                reset();
              });
            }}>删除
            </div>
          </div>;
        })}

      </div>
      <div className={"w-[800px] h-screen"}>
        <Chat {...chatProps} title={"ChatBot"} />
      </div>
    </div>
  </>;
}

const AssistantMessageLayout = ({ message, onRegenerate }) => {
  return <>
    <div className={"flex"}>
      <div className={"bg-blue-300 text-white p-2"}>
        {message.content}
      </div>
      <div className={"cursor-pointer"} onClick={() => {
        onRegenerate?.(message);
      }}>0️⃣
      </div>
    </div>
  </>;
};