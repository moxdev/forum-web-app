import xss from 'xss-filters';
import users from './user';
import API from './api';

let ui = {
    renderPosts(posts) {
        let elements = posts.map( (post) => {
            let { title, lastReply } = post;
            // shorthand for:
            // let title = post.title;
            // let lastReply = post.lastReply;
            return articleTemplate(title, lastReply);
        });

        let target = document.querySelector('.container');
        target.innerHTML = elements.join('');
    },

    renderUsers(users) {
        let elements = users.map( (user) => {
            let { name, avatar } = user;
            return userTemplate(name, avatar);
        });

        let target = document.querySelector('.sidebar-content');
        target.innerHTML = elements.join('');
    }
}

function articleTemplate(title, lastReply) {
    let stitle = xss.inHTMLData(title);
    let slastReply = xss.inHTMLData(lastReply);
    let template = `
        <article class="post">
            <h2 class="post-title">${stitle}</h2>
            <p class="post-meta">${slastReply}</p>
        </article>`;

    return template;
};

function userTemplate(name, avatar) {
    let sname = xss.inHTMLData(name);
    let savatar = xss.inHTMLData(avatar);
    let template = `
        <div class="active-avatar">
            <img width="54" src="assets/images/${savatar}" alt="">
            <h5 class="post-author">${sname}</h5>
        </div>`;

    return template;
};

export default ui;