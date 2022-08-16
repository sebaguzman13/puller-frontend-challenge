import placeholder from './../../assets/circle-person-profile-user-group-people-svgrepo-com.svg';

export const Avatar = ({ imageUrl, userName }) => {
    return (
        <img
            src={imageUrl ?? placeholder}
            alt={userName ?? ""}
            className="avatar"
        />
    )
};

export default Avatar;