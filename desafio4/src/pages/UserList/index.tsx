import React, { useState, useMemo, useEffect } from 'react'
import axios from 'axios'
import './styles.css'

interface UserPageProps {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: UserProps[],
    ad: Object
}

interface UserProps {
    id: number,
    first_name: String,
    last_name: String,
    email: String,
    avatar: string
}

function UserList() {
    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [users, setUsers] = useState<UserProps[]>([])

    useEffect(() => {
        axios.get(`https://reqres.in/api/users?page=${page}`).then(response => {
            const results = response.data
            setPage(results.page)
            setTotalPages(results.total_pages)
            setUsers(results.data)
        })
    },[page])

    function onNext() {
        const nextPage = page+1
        setPage(nextPage)
    }

    function onPrevious() {
        const previousPage = page-1
        setPage(previousPage)
    }

    return (
        <div id="user-list">
            <h1>Users</h1>
            <table>
                <caption>
                    { (page > 1) &&
                        <a href="#" onClick={onPrevious}>Página anterior</a>
                    }

                    <span>Página {page} de {totalPages}</span>

                    { (page < totalPages) &&
                        <a href="#" onClick={onNext}>Próxima página</a>
                    }
                </caption>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td><img alt="Avatar" src={user.avatar} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="footer">
                <span>Fonte: <a href="https://reqres.in/api/users" target="_blank">https://reqres.in/api/users</a></span>
            </div>
        </div>
    )
}

export default UserList