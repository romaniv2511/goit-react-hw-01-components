import PropTypes from "prop-types";

export const FriendListItem = ({ avatar, name, isOnline }) => {
    // const isOnline = isOnline ? "online" : "";

    return (<li className="item">
        <span className={isOnline ? "status online" : "status"}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>
)
}



FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}