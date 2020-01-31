import { Fragment } from 'react'
import { connect } from 'react-redux'

const Article = ({ id, username }) => {
    return (
        <Fragment>
            <h1>
                Halo{id}
                <span>span{username}</span>
            </h1>
            default
        </Fragment>
    )
}

Article.getInitialProps = async ({ query, store, isServer }) => {
    isServer && store.dispatch({type: 'CHANGE_NAME', value: 'servers'})
    return {
        id: query.id
    }
}

const mapStateToProps = state => {
    return {
        username: state.user.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
