// // Actions
// const UPDATE_PHOTO = 'profilePhoto/UPDATE_PHOTO';

// // Action creators
// const update = (photo) => ({
//     type: UPDATE_PHOTO,
//     photo
// });

// // Thunk action creators
// export const updatePhoto = (id, payload) => async (dispatch) => {
//     const res = await fetch(`/api/profile-photo/${id}`, {
//         method: "PUT",
//         body: payload, id
//     });

//     if (res.ok) {
//         const data = await res.json();
//         dispatch(update(data));

//         return;

//     } else if (res.status < 500) {
//         const data  = res.json();

//         if (data.errors) {
//             return data.errors;
//         }
//     } else {
//         return ["An error occured. Please try again."]
//     }
// };

// // Reducer
// const profilePhotoReducer = (state = {}, action) => {
//     switch (action.type) {
//         case UPDATE_PHOTO:
//             const updateState = { ...state, [action.profile_photo.id]: action.profile_photo };
//             return updateState;
//         default:
//             return state;
//     }
// }

// export default profilePhotoReducer;
