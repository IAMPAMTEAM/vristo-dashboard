import { IRootState } from '../store';
import { setPageTitle } from '../store/themeConfigSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import OpenAI from 'openai';

interface Message {
    fromUserId: number;
    toUserId: number;
    text: string;
}

interface ContactList {
    userId: number;
    name: string;
    path: string;
    time: string;
    preview: string;
    messages: Message[];
    active: boolean;
}

interface useChatContainerProps {
    contactList: ContactList[];
    assistantId?: string;
    threadId?: string;
    openai: OpenAI;
    setRunId: Dispatch<SetStateAction<string | undefined>>;
}

const instruction = `너는 Knowlege의 excel 파일을 읽어 대화 시 필요한 분석을 수행하고 차트를 생성해줘야해.
Knowlege의 excel 파일 확장자는 .xlsx이며 너는 pandas를 내장 엔진으로 준비해서 이 파일을 분석을 해줘야해.
먼저 sheet 이름 'metaSheet'를 읽어 'sheetName' 열에 나열된 sheet 이름에 대한  별명들을 'sheetNickNames'를 통해 파악해줘.
그 다음 sheet 이름 'metaColumn'을 읽어 'columnName' 열에 나열된 각 열에 대한 별명들을 'columnNickNames'를 통해 파악해줘.
만약 서비스에 대한 별칭으로 사용자가 질문을 한다면 sheet 이름 'metaServie'에 나열된 'serviceNickNames'를 통해 파악해줘.
날짜에 대한 컬럼은 따로 없기 때문에 날짜에 대한 사용자의 질문이 들어오면 YYYY.MM.DD 형식의 셀을 날짜로 파악해줘.
이제부터 너는 우리 대화에서 언급될 각 단어들을 이해할때 위에서 언급된 단어들과 유사한지 고려해 적절한 답변을 해줘야해
넌 답변할 때 중간 답변은 주지 말고 최종 답변만 해야해. 그리고 답변은 모두 한국어로 해야해.`;

export const useChatContainer = ({ contactList, assistantId, threadId, openai, setRunId }: useChatContainerProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Chat'));
    });

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);

    const [isShowChatMenu, setIsShowChatMenu] = useState(false);
    const [searchUser, setSearchUser] = useState('');
    const [isShowUserChat, setIsShowUserChat] = useState(false);
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const [textMessage, setTextMessage] = useState('');
    const [filteredItems, setFilteredItems] = useState<any>(contactList);

    useEffect(() => {
        setFilteredItems(() => {
            return contactList.filter((d) => {
                return d.name.toLowerCase().includes(searchUser.toLowerCase());
            });
        });
    }, [searchUser]);

    const scrollToBottom = () => {
        if (isShowUserChat) {
            setTimeout(() => {
                const element: any = document.querySelector('.chat-conversation-box');
                element.behavior = 'smooth';
                element.scrollTop = element.scrollHeight;
            });
        }
    };

    const selectUser = (user: any) => {
        setSelectedUser(user);
        setIsShowUserChat(true);
        scrollToBottom();
        setIsShowChatMenu(false);
    };

    const sendMessage = async () => {
        if (!threadId || !assistantId) {
            return;
        }

        if (textMessage.trim()) {
            let user: any = contactList.find((d) => d.userId === selectedUser.userId);

            await openai.beta.threads.messages.create(threadId, {
                role: 'user',
                content: textMessage,
            });

            const { id: runId } = await openai.beta.threads.runs.create(threadId, {
                assistant_id: assistantId,
                instructions: instruction,
            });

            user.messages.push({
                fromUserId: selectedUser.userId,
                toUserId: 0,
                text: textMessage,
                time: 'Just now',
            });

            setRunId(runId);
            setFilteredItems(
                contactList.filter((d) => {
                    return d.name.toLowerCase().includes(searchUser.toLowerCase());
                })
            );
            setTextMessage('');
            scrollToBottom();
        }
    };

    const sendMessageHandle = (event: any) => {
        event.stopPropagation();

        console.log('!');

        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    return {
        sendMessageHandle,
        sendMessage,
        selectUser,
        isRtl,
        isDark,
        isShowChatMenu,
        setIsShowChatMenu,
        searchUser,
        setSearchUser,
        isShowUserChat,
        selectedUser,
        textMessage,
        setTextMessage,
        setFilteredItems,
        filteredItems,
    };
};
