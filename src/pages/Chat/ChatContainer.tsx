import Dropdown from '../../components/Dropdown';
import { IRootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconHorizontalDots from '../../components/Icon/IconHorizontalDots';
import IconSettings from '../../components/Icon/IconSettings';
import IconHelpCircle from '../../components/Icon/IconHelpCircle';
import IconLogin from '../../components/Icon/IconLogin';
import IconSearch from '../../components/Icon/IconSearch';
import IconMenu from '../../components/Icon/IconMenu';
import IconMessage from '../../components/Icon/IconMessage';
import IconPhoneCall from '../../components/Icon/IconPhoneCall';
import IconVideo from '../../components/Icon/IconVideo';
import IconCopy from '../../components/Icon/IconCopy';
import IconTrashLines from '../../components/Icon/IconTrashLines';
import IconShare from '../../components/Icon/IconShare';
import IconMoodSmile from '../../components/Icon/IconMoodSmile';
import IconSend from '../../components/Icon/IconSend';
import IconMicrophoneOff from '../../components/Icon/IconMicrophoneOff';
import IconDownload from '../../components/Icon/IconDownload';
import IconCamera from '../../components/Icon/IconCamera';
import contactList from './ContactList';
import IconUsers from '@/components/Icon/IconUsers';
import { initialSendApi, resendApi } from './api';

const Chat = () => {
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

  useEffect(() => {
    initialSendApi('삼성생명의 companyRegisterNumber는?');
  });

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
    // setFirstChatbot()
    setIsShowUserChat(true);
    scrollToBottom();
    setIsShowChatMenu(false);
  };
  const sendMessage = () => {
    if (textMessage.trim()) {
      let list = contactList;
      let user: any = list.find((d) => d.userId === selectedUser.userId);
      user.messages.push({
        fromUserId: selectedUser.userId,
        toUserId: 0,
        text: textMessage,
        time: 'Just now',
      });
      // TODO: Send API
      setFilteredItems(list);
      setTextMessage('');
      scrollToBottom();
    }
  };

  const sendMessageHandle = (event: any) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };
  return (
    <div>
      <div className={`flex gap-5 relative sm:h-[calc(100vh_-_150px)] h-full sm:min-h-0 ${isShowChatMenu ? 'min-h-[999px]' : ''}`}>
        <div className={`panel p-4 flex-none max-w-xs w-full absolute xl:relative z-10 space-y-4 xl:h-full hidden xl:block overflow-hidden ${isShowChatMenu ? '!block' : ''}`}>
          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              <div className='flex-none'>
                {/* <img src={IconUsers}  alt='' /> */}
                <IconUsers className='rounded-full h-12 w-12 object-cover' />
              </div>
              <div className='mx-3'>
                <p className='mb-1 font-semibold'>Admin (Test User)</p>
                <p className='text-xs text-white-dark'>Software Developer</p>
              </div>
            </div>
            <div className='dropdown'>
              <Dropdown
                offset={[0, 5]}
                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                btnClassName='bg-[#f4f4f4] dark:bg-[#1b2e4b] hover:bg-primary-light w-8 h-8 rounded-full !flex justify-center items-center hover:text-primary'
                button={<IconHorizontalDots className='opacity-70' />}
              >
                <ul className='whitespace-nowrap'>
                  <li>
                    <button type='button'>
                      <IconSettings className='w-4.5 h-4.5 ltr:mr-1 rtl:ml-1 shrink-0' />
                      Settings
                    </button>
                  </li>
                  <li>
                    <button type='button'>
                      <IconHelpCircle className='w-4.5 h-4.5 ltr:mr-1 rtl:ml-1 shrink-0' />
                      Help & feedback
                    </button>
                  </li>
                  <li>
                    <button type='button'>
                      <IconLogin className='ltr:mr-1 rtl:ml-1 shrink-0' />
                      Sign Out
                    </button>
                  </li>
                </ul>
              </Dropdown>
            </div>
          </div>
          <div className='relative'>
            <input type='text' className='form-input peer ltr:pr-9 rtl:pl-9' placeholder='Searching...' value={searchUser} onChange={(e) => setSearchUser(e.target.value)} />
            <div className='absolute ltr:right-2 rtl:left-2 top-1/2 -translate-y-1/2 peer-focus:text-primary'>
              <IconSearch />
            </div>
          </div>
          <div className='h-px w-full border-b border-white-light dark:border-[#1b2e4b]'></div>
          <div className='!mt-0'>
            <PerfectScrollbar className='chat-users relative h-full min-h-[100px] sm:h-[calc(100vh_-_357px)] space-y-0.5 ltr:pr-3.5 rtl:pl-3.5 ltr:-mr-3.5 rtl:-ml-3.5'>
              {filteredItems.map((person: any) => {
                return (
                  <div key={person.userId}>
                    <button
                      type='button'
                      className={`w-full flex justify-between items-center p-2 hover:bg-gray-100 dark:hover:bg-[#050b14] rounded-md dark:hover:text-primary hover:text-primary ${
                        selectedUser && selectedUser.userId === person.userId ? 'bg-gray-100 dark:bg-[#050b14] dark:text-primary text-primary' : ''
                      }`}
                      onClick={() => selectUser(person)}
                    >
                      <div className='flex-1'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 relative'>
                            <img src={person.path} className='rounded-full h-12 w-12 object-cover' alt='' />
                            {person.active && (
                              <div>
                                <div className='absolute bottom-0 ltr:right-0 rtl:left-0'>
                                  <div className='w-4 h-4 bg-success rounded-full'></div>
                                </div>
                              </div>
                            )}
                          </div>
                          <div className='mx-3 ltr:text-left rtl:text-right'>
                            <p className='mb-1 font-semibold'>{person.name}</p>
                            <p className='text-xs text-white-dark truncate max-w-[185px]'>{person.preview}</p>
                          </div>
                        </div>
                      </div>
                      <div className='font-semibold whitespace-nowrap text-xs'>
                        <p>{person.time}</p>
                      </div>
                    </button>
                  </div>
                );
              })}
            </PerfectScrollbar>
          </div>
        </div>
        <div className={`bg-black/60 z-[5] w-full h-full absolute rounded-md hidden ${isShowChatMenu ? '!block xl:!hidden' : ''}`} onClick={() => setIsShowChatMenu(!isShowChatMenu)}></div>

        <div className='panel p-0 flex-1'>
          {!isShowUserChat && (
            <div className='flex items-center justify-center h-full relative p-4'>
              <button type='button' onClick={() => setIsShowChatMenu(!isShowChatMenu)} className='xl:hidden absolute top-4 ltr:left-4 rtl:right-4 hover:text-primary'>
                <IconMenu />
              </button>

              <div className='py-8 flex items-center justify-center flex-col'>
                <p className='flex justify-center bg-white-dark/20 p-2 font-semibold rounded-md max-w-[190px] mx-auto'>
                  <IconMessage className='ltr:mr-2 rtl:ml-2' />
                  Click User To Chat
                </p>
              </div>
            </div>
          )}
          {isShowUserChat && selectedUser ? (
            <div className='relative h-full'>
              <div className='flex justify-between items-center p-4'>
                <div className='flex items-center space-x-2 rtl:space-x-reverse'>
                  <button type='button' className='xl:hidden hover:text-primary' onClick={() => setIsShowChatMenu(!isShowChatMenu)}>
                    <IconMenu />
                  </button>
                  <div className='relative flex-none'>
                    <img src={selectedUser.path} className='rounded-full w-10 h-10 sm:h-12 sm:w-12 object-cover' alt='' />
                    <div className='absolute bottom-0 ltr:right-0 rtl:left-0'>
                      <div className='w-4 h-4 bg-success rounded-full'></div>
                    </div>
                  </div>
                  <div className='mx-3'>
                    <p className='font-semibold'>{selectedUser.name}</p>
                    <p className='text-white-dark text-xs'>{selectedUser.active ? 'Active now' : 'Last seen at ' + selectedUser.time}</p>
                  </div>
                </div>
              </div>
              <div className='h-px w-full border-b border-white-light dark:border-[#1b2e4b]'></div>

              <PerfectScrollbar className='relative h-full sm:h-[calc(100vh_-_300px)] chat-conversation-box'>
                <div className='space-y-5 p-4 sm:pb-0 pb-[68px] sm:min-h-[300px] min-h-[400px]'>
                  <div className='block m-6 mt-0'>
                    <h4 className='text-xs text-center border-b border-[#f4f4f4] dark:border-gray-800 relative'>
                      <span className='relative top-2 px-3 bg-white dark:bg-black'>{'Today, ' + selectedUser.time}</span>
                    </h4>
                  </div>
                  {selectedUser.messages && selectedUser.messages.length ? (
                    <>
                      {selectedUser.messages.map((message: any, index: any) => {
                        return (
                          <div key={index}>
                            <div className={`flex items-start gap-3 ${selectedUser.userId === message.fromUserId ? 'justify-end' : ''}`}>
                              <div className={`flex-none ${selectedUser.userId === message.fromUserId ? 'order-2' : ''}`}>
                                {selectedUser.userId === message.fromUserId ? <img src={selectedUser.path} className='rounded-full h-10 w-10 object-cover' alt='' /> : ''}
                                {selectedUser.userId !== message.fromUserId ? <img src={selectedUser.path} className='rounded-full h-10 w-10 object-cover' alt='' /> : ''}
                              </div>
                              <div className='space-y-2'>
                                <div className='flex items-center gap-3'>
                                  <div
                                    className={`dark:bg-gray-800 p-4 py-2 rounded-md bg-black/10 ${
                                      message.fromUserId === selectedUser.userId ? 'ltr:rounded-br-none rtl:rounded-bl-none !bg-primary text-white' : 'ltr:rounded-bl-none rtl:rounded-br-none'
                                    }`}
                                  >
                                    {message.text}
                                  </div>
                                  <div className={`${selectedUser.userId === message.fromUserId ? 'hidden' : ''}`}>
                                    <IconMoodSmile className='hover:text-primary' />
                                  </div>
                                </div>
                                <div className={`text-xs text-white-dark ${selectedUser.userId === message.fromUserId ? 'ltr:text-right rtl:text-left' : ''}`}>
                                  {message.time ? message.time : '5h ago'}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    ''
                  )}
                </div>
              </PerfectScrollbar>
              <div className='p-4 absolute bottom-0 left-0 w-full'>
                <div className='sm:flex w-full space-x-3 rtl:space-x-reverse items-center'>
                  <div className='relative flex-1'>
                    <input
                      className='form-input rounded-full border-0 bg-[#f4f4f4] px-12 focus:outline-none py-2'
                      placeholder='Type a message'
                      value={textMessage}
                      onChange={(e: any) => setTextMessage(e.target.value)}
                      onKeyUp={sendMessageHandle}
                    />
                    <button type='button' className='absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 hover:text-primary'>
                      <IconMoodSmile />
                    </button>
                    <button type='button' className='absolute ltr:right-4 rtl:left-4 top-1/2 -translate-y-1/2 hover:text-primary' onClick={() => sendMessage()}>
                      <IconSend />
                    </button>
                  </div>
                  <div className='items-center space-x-3 rtl:space-x-reverse sm:py-0 py-3 hidden sm:block'>
                    <button type='button' className='bg-[#f4f4f4] dark:bg-[#1b2e4b] hover:bg-primary-light rounded-md p-2 hover:text-primary'>
                      <IconMicrophoneOff />
                    </button>
                    <button type='button' className='bg-[#f4f4f4] dark:bg-[#1b2e4b] hover:bg-primary-light rounded-md p-2 hover:text-primary'>
                      <IconDownload />
                    </button>
                    <button type='button' className='bg-[#f4f4f4] dark:bg-[#1b2e4b] hover:bg-primary-light rounded-md p-2 hover:text-primary'>
                      <IconCamera />
                    </button>
                    <button type='button' className='bg-[#f4f4f4] dark:bg-[#1b2e4b] hover:bg-primary-light rounded-md p-2 hover:text-primary'>
                      <IconHorizontalDots className='opacity-70' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
