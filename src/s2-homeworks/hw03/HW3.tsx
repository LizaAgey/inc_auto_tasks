import React, { useState } from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'

/*
* 8 - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName)
* 9 - в файле Greeting.tsx дописать типизацию пропсов
* 10 - в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки
* 11 - сделать стили в соответствии с дизайном
* */

export type UserType = {
    _id: string
    name: number
}




export const pureAddUserCallback = (name: string, setUsers: ([])=>void, users: UserType[]) => {
    const user = {
        _id: v1(),
        name:"name"
    }
    setUsers([...users, user])
}




const HW3 = () => {
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => {
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #3</div>
            {/*для автоматической проверки дз (не менять)*/}

            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3