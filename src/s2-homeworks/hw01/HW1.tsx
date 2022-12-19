import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatarUser from './avatar-main.png'
import avatarFriend from './avatar-friend.jpg'

/*
---- * 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
type UserInfoType = {
    avatar: string,
    name: string
}

type MessageInfoType  = {
    text: string,
    time: string
}

export type MessageType = {
    id:number,
    user: UserInfoType,
    message: MessageInfoType
}


// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatarUser, // можно менять
        name: 'Brad Pitt',  // можно менять
    },
    message: {
        text: 'Hello, Baby', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatarFriend, // можно менять
        name: 'Billy Way', // можно менять
    },
    message: {
        text: "Hi, Brad. What's going on?", // можно менять
        time: '22:00', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={`${s2.fontLink} ${s2.hw}` }>
                {/*проверка отображения (не менять)*/}
                <div className={s2.chat}>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
