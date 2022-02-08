
function UsersList({users}) {
    return (
        users.map(user => {
            return (
                <div key={user.id} className="flex justify-center items-center mt-3 bg-slate-300 w-64 m-auto p-1 rounded">
                    <div className="w-60 text-left">
                        {user.login}
                    </div>
                    <div className="w-10">
                        <img className="rounded" src={user.avatar_url}/>
                    </div>
                </div>
            )
        })
    )
}

export default UsersList;