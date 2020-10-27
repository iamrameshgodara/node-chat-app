const users = []
//addUser,removeUser,getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
    //clean the data

    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate the data
    if (!username || !room) {
        return { error: 'username and room are required!' }
    }
    //check for existing user

    const existingUser = users.find((user) => {

        return user.username === username && user.room === room
    })

    //Validate username
    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    //store the user

    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)  //-1 if we didnt find match or 0 and greater if found match

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)

}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)



}

module.exports = {

    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}