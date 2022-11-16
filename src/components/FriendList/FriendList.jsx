import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem";

import css from "./friendList.module.css"

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) =>
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />)}
        </ul>)
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object.isRequired)
}