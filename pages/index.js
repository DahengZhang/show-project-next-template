import { Fragment } from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'

import scss from './index.module.scss'

const Home = ({ username, bundleInputChange }) => {
    return (
        <Fragment>
            <h1 className={scss.redColor}>
                Halo{username}
                <input value={username} onChange={bundleInputChange} />
                <span className={scss.small}>span</span>
            </h1>
            default
            <Link href="/article?id=1">
                <a>文章详情</a>
            </Link>
        </Fragment>
    )
}

Home.getInitialProps = ({ store }) => {
    return {}
}

const mapStateToProps = state => {
    return {
        username: state.user.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        bundleInputChange (e) {
            dispatch({
                type: 'CHANGE_NAME',
                value: e.target.value
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
