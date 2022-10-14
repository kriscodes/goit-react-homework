import css from './Profile.module.css';
import user from './user.json'

export const Profile = () => {
    return (
        <div className={css.profileContainer}>
            <div className={css.profileContentContainer}>
                <img 
                className={css.profileAvatar} 
                src={user.avatar} 
                alt="user avatar" 
                width="60px" 
                height="60px" 
                />
                <h3>
                    {user.username}
                </h3>
                <p>
                    @{user.tag}
                </p>
                <p>
                    {user.location}
                </p>
                <div className={css.profileStatsContainer}>
                    <div className={css.profileStatsItem}>
                        <span>Followers</span>
                        {user.stats.followers}
                    </div>
                    <div className={css.profileStatsItem}>
                        <span>Views</span>
                        {user.stats.views}
                    </div>
                    <div className={css.profileStatsItem}>
                        <span>Likes</span>
                        {user.stats.likes}
                    </div>
                </div>
            </div>
        </div>
    );
}