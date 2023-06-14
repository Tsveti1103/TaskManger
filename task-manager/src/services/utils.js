export function formIsValid(data) {
    for (let error in data) {
        if (data[error] !== '') {
            return false;
        }
    }
    return true;
}

export const sortTasks = (data, value) => {
    if (value === 'Title') {
        return (
            data.sort(function (a, b) {
                return a.title.localeCompare(b.title);
            })
        )
    }
    else if (value === 'Priority') {
        return (
            data.sort(function (a, b) {
                return a.priority - b.priority;
            })
        )
    }
    else if (value === 'Priority') {
        return (
            data.sort(function (a, b) {
                return a.priority - b.priority;
            })
        )
    }
    else if (value === 'Date') {
        return (
            data.sort(function (a, b) {
                return a.date_created.localeCompare(b.date_created)
            })
        )
    }
    else if (value === 'Description') {
        return (
            data.sort(function (a, b) {
                return a.description.localeCompare(b.description)
            })
        )
    }
};
export function getUserData() {
    return JSON.parse(localStorage.getItem('user'))
}

export function getAccessToken() {
    const user = getUserData();
    if (user) {
        return user.token;
    }
    else {
        return null
    }
}

export function clearUserData() {
    localStorage.removeItem('user')
}

export function setUserData(user) {
    localStorage.setItem('user', JSON.stringify(user))
}