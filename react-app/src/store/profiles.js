// Actions
// const UPDATE_USERNAME = 'profile/UPDATE_USERNAME';
const UPDATE_BIO = 'profile/UPDATE_BIO';
// const UPDATE_PHOTO = 'profile/UPDATE_PHOTO';

// Action creators
// const usernameUpdate = (username) => ({
//     type: UPDATE_USERNAME,
//     username
// });

const bioUpdate = (bio) => ({
    type: UPDATE_BIO,
    bio
});

// const photoUpdate = (photo) => ({
//     type: UPDATE_PHOTO,
//     photo
// });

// Thunk action creators
// export const updateUsername = (id, payload) => async (dispatch) => {
//     const res = await fetch(`/api/profile/username/${id}`, {
//         method: "PUT",
//         body: payload, id
//     });

//     if (res.ok) {
//         const data = await res.json();
//         dispatch(usernameUpdate(data));

//         return;

//     } else if (res.status < 500) {
//         const data = await res.json();

//         if (data.errors) {
//             return data.errors;
//         }

//     } else {
//         return ["An error occured. Please try again."];
//     };
// };

export const updateBio = (id, payload) => async (dispatch) => {
    const res = await fetch(`/api/profile/${id}/bio`, {
        method: "PUT",
        body: payload, id
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(bioUpdate(data));

        return;

    } else if (res.status < 500) {
        const data = await res.json();

        if (data.errors) {
            return data.errors;
        }

    } else {
        return ["An error occured. Please try again."];
    };
};

// export const updatePhoto = (id, payload) => async (dispatch) => {
//     const res = await fetch(`/api/profile/profile-photo/${id}`, {
//         method: "PUT",
//         body: payload, id
//     });

//     if (res.ok) {
//         const data = await res.json();
//         dispatch(photoUpdate(data));

//         return;

//     } else if (res.status < 500) {
//         const data  = await res.json();

//         if (data.errors) {
//             return data.errors;
//         }

//     } else {
//         return ["An error occured. Please try again."];
//     }
// };

// Reducer
const profilesReducer = (state = {}, action) => {
    switch (action.type) {
        // case UPDATE_USERNAME:
        //     const updateUsernameState = { ...state, [action.username.id]: action.username };
        //     return updateUsernameState;
        case UPDATE_BIO:
            const updateBioState = { ...state, [action.bio.id]: action.bio };
            return updateBioState;
        // case UPDATE_PHOTO:
        //     const updatePhotoState = { ...state, [action.profile_photo.id]: action.profile_photo };
        //     return updatePhotoState;
        default:
            return state;
    }
}

export default profilesReducer;
