import { connect } from 'react-redux'
import { UserProfile } from './UserProfile'

const mapStateToProps = (state) => {
    return {
        tag: state.userProfile.tag,
        name: state.userProfile.name,
        location: state.userProfile.location,
        followers: state.userProfile.followers,
        following: state.userProfile.following,
        shots: state.userProfile.shots,
        collections: state.userProfile.collections,
    }
}

const UserProfileContainer = connect(mapStateToProps)(UserProfile)

export { UserProfileContainer }
