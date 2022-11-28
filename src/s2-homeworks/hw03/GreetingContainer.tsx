import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: (error: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
    let arrayNoSpaces = name.split(' ')
    debugger
    if (arrayNoSpaces.every(element => element === "")) {
        debugger
        setError('Ошибка! Введите имя!')
    } else {
        addUserCallback(name)
        setName('')
    }

    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: (error: string) => void) => {
    let arrayNoSpaces = name.split(' ')
    debugger
    if (arrayNoSpaces.every(element => element === "")) {
        setError('Ошибка! Введите имя!')
    }
    // если имя пустое - показать ошибку
}

export const pureOnEnter = (event: KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
    if (event.key === 'Enter') {
        addUser()
    }
    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('')

    const [error, setError] = useState<string>('')

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value)

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length
    const lastUserName = totalUsers === 0 ? '' : users[users.length - 1].name


    console.log('last user: ', lastUserName)

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />

    )
}

export default GreetingContainer
