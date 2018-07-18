import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import localStyles from './Notification.css'

const hasOnlyButton = hasButton =>
    classNames(localStyles.buttonTick, {
        [localStyles.onlyTick]: !hasButton,
    })

const Notification = props => (
    <li>
        <div className={localStyles.mainNotifContainer}>
            <div className={localStyles.logo}>
                <img src="/img/worldbrain-logo-narrow.png" />
            </div>
            <div className={localStyles.content}>
                <div className={localStyles.messageWhy}>
                    <div className={localStyles.titleMessage}>
                        <div className={localStyles.title}>{props.title}</div>
                        <div
                            className={localStyles.message}
                            dangerouslySetInnerHTML={{ __html: props.message }}
                        />
                        {props.isShowMore && (
                            <div
                                className={localStyles.showMore}
                                onClick={props.showMore}
                            >
                                Show {props.isMore ? 'More' : 'Less'}
                            </div>
                        )}
                    </div>
                    <div className={localStyles.why}>
                        Why am I seeing this?
                        <span className={localStyles.whyText}>
                            This notification has been stored in the code of
                            last update. No connection to our servers have been
                            made to send it to you.
                        </span>
                    </div>
                </div>
                {(props.isUnread || props.buttonText) && (
                    <div className={hasOnlyButton(props.buttonText)}>
                        {props.buttons}
                        {props.isUnread && (
                            <div
                                className={localStyles.tick}
                                onClick={props.handleTick}
                            >
                                <i className="material-icons">done</i>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    </li>
)

Notification.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    buttonText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.object),
    ]),
    isShowMore: PropTypes.bool.isRequired,
    showMore: PropTypes.func.isRequired,
    isMore: PropTypes.bool.isRequired,
    handleTick: PropTypes.func.isRequired,
    isUnread: PropTypes.bool.isRequired,
    buttons: PropTypes.arrayOf(PropTypes.node),
}

export default Notification
