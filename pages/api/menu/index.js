
// import firebase from '../../../firebase'
import _ from 'lodash';
// const database = firebase.database();
// const blogsRef = database.ref('/menu').orderByChild('ups').limitToLast(1);

export default (req, res) => {
    blogsRef.on('value', (snapshot) => {
        const data = snapshot.val();
        let messagesVal = data;
        let messages = _(messagesVal)
            .keys()
            .map(messageKey => {
                let cloned = _.clone(messagesVal[messageKey]);
                cloned.key = messageKey;
                return cloned;
            }).value();
        res.json(_.reverse(messages));
    });
};