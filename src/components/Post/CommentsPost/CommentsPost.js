import React from 'react';
import CommentsPostStyle from './CommentsPost.module.css'
import Avatar from '../../../assets/images/ava-192.png'

class CommentsPost extends React.Component {

    render() {
        console.log (this.props.newComment)
        return (
            <div>
                {this.props.newComment?.map(comment => {
                    return (
                        <div key={comment.id} className={CommentsPostStyle.Comment}>
                            <div className={CommentsPostStyle.comment__body}>
                                <img src={Avatar} alt=""/>
                                <div className={CommentsPostStyle.text}>
                                    <p>
                                        {comment.name}
                                    </p>
                                    <p>
                                        {comment.comment}
                                    </p>
                                    <p>
                                        {comment.time}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
};

export {CommentsPost};
