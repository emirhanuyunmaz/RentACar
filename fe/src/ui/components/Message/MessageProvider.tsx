import React, { createContext, useContext } from 'react';
import { message } from 'antd';

type MessageContextType = {
  success: (content: string) => void;
  error: (content: string) => void;
  warning: (content: string) => void;
};

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export default function MessageProvider ({ children }:{children:React.ReactNode}) {
  const [messageApi, contextHolder] = message.useMessage();

  const success = (content: string) => {
    messageApi.open({ type: 'success', content });
  };

  const error = (content: string) => {
    messageApi.open({ type: 'error', content });
  };

  const warning = (content: string) => {
    messageApi.open({ type: 'warning', content });
  };

  return (
    <MessageContext.Provider value={{ success, error, warning }}>
      {contextHolder}
      {children}
    </MessageContext.Provider>
  );
};

export const useMessageApi = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessageApi must be used within a MessageProvider');
  }
  return context;
};
